import React from "react";
import { Dropdown, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import "./Custom.css";
import { useState } from "react";

/* DROP DOWN WITH FILTER*/

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(
  ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
    const [value, setValue] = useState("");

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <FormControl
          className="form-control"
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type to filter..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value)
          )}
        </ul>
      </div>
    );
  }
);

function Dropdown2() {
  return (
    <Dropdown className="drop-down">
      <Dropdown.Toggle id="dropdown-button-dark">
        <FontAwesomeIcon icon={faBars} size="xl" />
      </Dropdown.Toggle>

      <Dropdown.Menu as={CustomMenu}>
        <Dropdown.Item id="drop-item" eventKey="1">
          Category 1
        </Dropdown.Item>
        <Dropdown.Item id="drop-item" eventKey="2">
          Category 2
        </Dropdown.Item>
        <Dropdown.Item id="drop-item" eventKey="3">
          Category 3
        </Dropdown.Item>
        <Dropdown.Item id="drop-item" eventKey="1">
          Category 4
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Dropdown2;
