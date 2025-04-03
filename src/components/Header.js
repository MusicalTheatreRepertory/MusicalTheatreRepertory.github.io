import React from "react";
import { Link } from "gatsby";
import "../styles/global.css";
import "../styles/Header.css";
import mtrCrest from "../images/mtr-crest-white.png";

export const Header = () => {
  return (
    <header className="header">
      {/* Left Section: Logo with a different background color */}

        <div
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#FFFFFF",
            }}
          >
            <img src={mtrCrest} alt="MTR Logo" className="header-image"/>
            <img src={mtrCrest} alt="MTR Crest" className="header-image-mobile"/>
          </Link>
        </div>

      {/* Right Section: Navigation Menu */}
      <div>
        <nav>
          <ul
            className="nav-container"
          >
            {["home", "our shows", "meet the board", "join"].map((item, index) => (
              <li key={index}>
                <Link
                  to={`/${item.toLowerCase().replace(" ", "-")}`}

                  className="nav-links"
                  activeStyle={{
                    fontWeight: "bold",
                    textDecoration: "none",
                  }}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
