import React from "react";
import styles from "./Header.css";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <div id="header">COGS Manager</div>
      </div>
    );
  }
}

export default Header;
