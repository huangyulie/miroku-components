import React, { CSSProperties, ReactNode } from "react";
import  classNames from 'classnames'
import './index.css'

interface ButtonProps{
    className?:string;
    type?:'normal' | 'primary' | 'text' | 'dashed' | 'link';
    children?:ReactNode;
    style?:CSSProperties;
    backgroundColor?:string
}

export  function Button(props: ButtonProps) {
  const { children , type = 'normal' , className ,style ,backgroundColor} = props;
  const cls = classNames({
    'ant-btn':true,
    [`ant-btn-${type}`]: type,
    [className as string]:className
  })

  return <button className={cls} style={{backgroundColor,...style}}>{children}</button>;
}
