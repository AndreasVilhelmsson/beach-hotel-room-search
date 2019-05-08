import React, { Component } from "react";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import logo from "../images/logo.svg";

class Navbar extends Component {
  state = {
    isOpen: false
  };

  onclickHandlerToggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  render() {
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
                  onClick={this.onclickHandlerToggle}
                >
                  <FaAlignRight className="nav-icon" />
                </button>
              </div>
              <ul
                className={
                  this.state.isOpen ? "nav-links show-nav" : "nav-links"
                }
              >
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
}

export default Navbar;
