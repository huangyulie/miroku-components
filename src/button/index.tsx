import React, {
  ButtonHTMLAttributes,
  CSSProperties,
  FocusEventHandler,
  MouseEventHandler,
  ReactNode,
} from "react";
import classNames from "classnames";
import "./index.css";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  type?: "normal" | "primary" | "text" | "dashed" | "link";
  children?: ReactNode;
  style?: CSSProperties;
  backgroundColor?: string;
  size?: "large" | "small" | "middle";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onBlur?: FocusEventHandler<HTMLButtonElement>;
}

export default function Button(props: ButtonProps) {
  const {
    children,
    type = "normal",
    className,
    style,
    backgroundColor,
    onClick,
    size = "middle",
    onBlur,
    ...others
  } = props;
  const cls = classNames({
    "ant-btn": true,
    [`ant-btn-${type}`]: type,
    [`ant-btn-${size}`]: size,
    [className as string]: className,
  });

  return (
    <button
      {...others}
      className={cls}
      style={{ backgroundColor, ...style }}
      onClick={onClick}
      onBlur={onBlur}
    >
      {children}
    </button>
  );
}
