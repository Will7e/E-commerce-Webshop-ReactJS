import React from "react";
import "./Button.css";

function Button(props) {
  const { children } = props;
  return <button className="buy-button">{children}</button>;
}
export default Button;
