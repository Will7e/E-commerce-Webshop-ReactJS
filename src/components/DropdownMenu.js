import React from "react";
import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import "./Custom.css";
import { Link } from "react-router-dom";

function DropdownMenu() {
  return (
    <Dropdown className="drop-down">
      <Dropdown.Toggle id="dropdown-button-dark" variant="outline-light">
        <FontAwesomeIcon className="bar-icon" icon={faBars} size="2xl" />
      </Dropdown.Toggle>
      <Dropdown.Menu className="drop__downMenu" variant="black">
        <h1 className="category__intro">Kategorier</h1>
        <Dropdown.Divider />

        <Dropdown.Item className="drop__downItem" href="#">
          <Link className="drop__link" to="/halsband">
            Handsband
          </Link>
        </Dropdown.Item>

        <Dropdown.Divider />
        <Dropdown.Item className="drop__downItem" href="#/action-2">
          <Link className="drop__link" to="/namnbrickor">
            Namnbrickor
          </Link>
        </Dropdown.Item>
        <Dropdown.Divider className="last_divider" />
        <Dropdown.Item className="drop__downItem" href="#/action-3">
          <Link className="drop__link" to="/koppel">
            Koppel
          </Link>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownMenu;
