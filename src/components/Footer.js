import React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="has-text-centered">
          <img
            src={logo}
            alt="Kaldi"
            style={{ width: "14em", height: "10em" }}
          />
        </div>
        <div className="has-text-centered">
          <div className="container">
            <section className="menu columns">
              <div className="column menu-list">
                <Link to="/" className="navbar-item menu-label">
                  Home
                </Link>
                <Link className="navbar-item menu-label" to="/about">
                  About
                </Link>
                <a
                  className="navbar-item menu-label"
                  href="/admin/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Admin
                </a>
              </div>
              <div className="column menu-list">
                <Link className="navbar-item menu-label" to="/articles">
                  Articles
                </Link>
                <Link className="navbar-item" to="/contact">
                  Contact
                </Link>
              </div>
              <div className="column">
                <a
                  href="https://github.com/bmcilw1/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon">
                    <FaGithub />
                  </span>
                </a>
                <a
                  title="LinkedIn"
                  href="https://www.linkedin.com/in/brian-mcilwain/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon">
                    <FaLinkedin />
                  </span>
                </a>
              </div>
            </section>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
