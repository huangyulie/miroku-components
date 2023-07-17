import React, {
  CSSProperties,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import classNames from "classnames";
import "./index.css";

export interface radioProps extends React.HTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: React.FormEventHandler<HTMLInputElement>;
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
}

export default function Radio(props: radioProps) {
  const { disabled, children, className, style, onChange, ...others } = props;

  const [checked, setChecked] = useState(props.checked);

  const inputEl = useRef(null);

  const cls = classNames({
    "ant-radio": true,
    "ant-radio-checked": checked,
    "ant-radio-disabled": disabled,
  });

  const wrapperCls = classNames({
    "ant-radio-wrapper": true,
  });

  useEffect(() => {
    if ("checked" in props && props.checked !== checked) {
      setChecked(checked);
    }
  }, [props.checked]);

  const handleChange = (e: any) => {
    if (disabled || checked) {
      return;
    }

    if (!("checked" in props)) {
      setChecked(true);
    }
    if (typeof onChange === "function") {
      e.target = inputEl.current;
      onChange(e);
    }
  };

  return (
    <span className={wrapperCls} onClick={handleChange}>
      <span className={cls}>
        <input type="radio" className="ant-radio-input" ref={inputEl} />
        <span className="ant-radio-inner"></span>
      </span>
      <span>{props.children}</span>
    </span>
  );
}
