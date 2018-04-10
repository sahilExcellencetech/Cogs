import React from "react";
import styles from "./Header.css";
import { Link } from "react-router-dom";

class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <div id="sidebar">
          <div className="w3-sidebar" style={{ width: "15%" }}>
            <Link to="/" className="w3-bar-item w3-button">
              Download CSV
            </Link>
            <br />
            <Link to="/upload" className="w3-bar-item w3-button">
              Upload CSV
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
