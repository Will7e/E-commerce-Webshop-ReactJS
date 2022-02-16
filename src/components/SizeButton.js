import React from "react";
import "./SizeButton.css";

function SizeButton(props) {
  const { children } = props;
  return <button className="size-button">{children}</button>;
}
export default SizeButton;
