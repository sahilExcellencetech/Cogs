import React from "react";
import Sidebar from '../component/Sidebar'
import Header from "../component/Header";
import { Button } from 'react-bootstrap';

class Upload extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header/>
        <Sidebar/>
        <div style={{marginLeft:"25%"}}>
        <div >
              Upload CSV Section
            </div>
            <div>
            <Button bsStyle="success">Upload CSV file</Button>
              </div>
            </div>
      </div>
    );
  }
}

export default Upload;
