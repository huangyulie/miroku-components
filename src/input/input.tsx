import React, { CSSProperties, ReactNode } from "react";
import classNames from "classnames";
import "./index.css";

export interface inputProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  type?: "normal" | "primary" | "text" | "dashed" | "link";
  children?: ReactNode;
  style?: CSSProperties;
  size?: "large" | "small" | "middle";
}

export function input(props: inputProps) {
  const {
    children,
    type = "normal",
    className,
    style,
    size = "middle",
    ...others
  } = props;
  const cls = classNames({
    "ant-btn": true,
    [`ant-btn-${type}`]: type,
    [`ant-btn-${size}`]: size,
    [className as string]: className,
  });

  return (
    <button {...others} className={cls} style=>
      {children}
    </button>
  );
}
