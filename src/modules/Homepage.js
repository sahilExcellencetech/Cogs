import React from "react";
import Sidebar from '../component/Sidebar'
import Header from "../component/Header";
import Download from './modules/Download'
import Upload from './modules/Upload'

class Download extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        <Sidebar />
            
      </div>
    );
  }
}

export default Download;
