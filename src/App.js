import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Upload from "./modules/Upload";
import Download from "./modules/Download";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/upload" component={Upload} />
          <Route path="/" component={Download} exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
