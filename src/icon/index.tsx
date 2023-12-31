import React, { CSSProperties } from "react";
import classNames from "classnames";
import "./index.css";

interface IconProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  type?: "fixed" | "hello" | "close";
  size?: number;
}

const svgMap = {
  fixed: (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="515"
    >
      <path
        d="M689.5616 937.3184h230.0416a17.7152 17.7152 0 1 1 0 35.4816H512a460.8 460.8 0 1 1 177.5616-35.4816zM320 588.8a76.8 76.8 0 1 0 0-153.6 76.8 76.8 0 0 0 0 153.6z m381.9008 0a76.8 76.8 0 1 0 0-153.6 76.8 76.8 0 0 0 0 153.6zM512 397.7216a76.8 76.8 0 1 0 0-153.6 76.8 76.8 0 0 0 0 153.6z m0 372.5824a76.8 76.8 0 1 0 0-153.6 76.8 76.8 0 0 0 0 153.6z"
        fill="#00A4FF"
        p-id="516"
      ></path>
    </svg>
  ),
  hello: (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="622"
    >
      <path
        d="M539.3408 58.368l205.824 129.2288a51.2 51.2 0 0 1 24.064 43.3664V409.6a51.2 51.2 0 0 0 51.2 51.2H921.6a51.2 51.2 0 0 1 51.2 51.2v409.6a51.2 51.2 0 0 1-51.2 51.2h-231.2704v-358.4a51.2 51.2 0 0 0-51.2-51.2H386.816a51.2 51.2 0 0 0-51.2 51.2v358.4H102.4a51.2 51.2 0 0 1-51.2-51.2v-409.6a51.2 51.2 0 0 1 51.2-51.2h103.168a51.2 51.2 0 0 0 51.2-51.2V230.8608a51.2 51.2 0 0 1 23.8592-43.264l204.0832-129.1264a51.2 51.2 0 0 1 54.6304-0.1024zM512 204.8l-45.1584 91.4432-100.9152 14.6944 73.0112 71.168-17.2032 100.5568L512 435.2l90.2656 47.4624-17.2032-100.5056 73.0112-71.2192-100.9152-14.6944L512 204.8z"
        fill="#00A4FF"
        p-id="623"
      ></path>
      <path
        d="M204.8 870.4h716.8v102.4H204.8z"
        fill="#00A4FF"
        p-id="624"
      ></path>
    </svg>
  ),
  close: (
    <svg
      viewBox="64 64 896 896"
      focusable="false"
      data-icon="close"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
    </svg>
  ),
};

export default function Icon(props: IconProps) {
  const { type = "fixed", className, size = 32, ...others } = props;
  const cls = classNames({
    "ant-icon": true,
    [className as string]: className,
  });

  const style: CSSProperties = { ...props.style };

  if (size) {
    style.height = size;
    style.width = size;
  }

  if (type in svgMap) {
    const svg = svgMap[type];
    return React.cloneElement(svg, {
      ...others,
      className: cls,
      style: style,
    });
  }

  return <i />;
}
