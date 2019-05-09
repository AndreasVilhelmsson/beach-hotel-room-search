import React, { useState } from "react";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import logo from "../images/logo.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <IconContext.Provider
      value={{ color: "#000", className: "global-class-name", size: "16px" }}
    >
      <>
        <nav className="navbar">
          <div className="nav-center">
            <div className="nav-header">
              <Link to="/">
                <img src={logo} alt="beach resort" />
              </Link>
              <button
                type="submit"
                className="nav-btn"
                onClick={() => setIsOpen(prevIsOpen => !prevIsOpen)}
              >
                <FaAlignRight className="nav-icon" />
              </button>
            </div>
            <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Rooms">Rooms</Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    </IconContext.Provider>
  );
}

export default Navbar;
