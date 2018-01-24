import React, { Component } from "react";
import Link from "gatsby-link";
import UserLinks from "../UserLinks/UserLinks";
import "./Footer.css";

class Footer extends Component {
  render() {
    const { config } = this.props;
    const url = config.siteRss;
    const copyright = config.copyright;
    if (!copyright) {
      return null;
    }
    return (
      <footer className="footer">
        <h4>get in touch: <a href="mailto:micael.robles@gmail.com">email</a> - <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/_mikirobles">twitter</a> - <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/micael-robles-75851b140/">linkedin</a></h4>
        <div className="notice-container">
          <h4>{copyright}</h4>

          <h4>
            source
          </h4>
        </div>
      </footer>
    );
  }
}

export default Footer;
