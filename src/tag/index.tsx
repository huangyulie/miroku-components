import React, { ReactNode, useState } from "react";
import classNames from "classnames";
import { CloseOutlined } from "@ant-design/icons";
import "./index.css";

interface TagProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  closeIcon?: boolean | ReactNode;
  color?: string;
  visible?: boolean;
  onClose?: Function;
}

export default function Tag(props: TagProps) {
  const {
    className,
    children,
    closeIcon,
    visible: pvisible,
    onClose,
    color,
    ...others
  } = props;
  const [visible, setVisible] = useState<boolean>(true);

  React.useEffect(() => {
    if ("visible" in props && typeof props.visible !== "undefined") {
      setVisible(props.visible);
    }
  }, [props.visible]);

  const customColor = color && color.match(/^#/);

  const cls = classNames({
    "ant-tag": true,
    [`ant-tag-${color}`]: color && !customColor,
    [className as string]: className,
  });

  const style = { ...props.style };
  if (customColor) {
    style.backgroundColor = color;
  }

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    onClose?.(e);
    if (e.defaultPrevented) {
      return;
    }
    if (!("visible" in props)) {
      setVisible(false);
    }
  };

  if (!visible) {
    return null;
  }

  return (
    <span {...others} className={cls} style={style}>
      {children}
      {closeIcon ? (
        <span>
          <CloseOutlined onClick={handleClick} />
        </span>
      ) : null}
    </span>
  );
}
