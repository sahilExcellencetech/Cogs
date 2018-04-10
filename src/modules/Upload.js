import React from "react";
import Sidebar from "../component/Sidebar";
import Header from "../component/Header";
import CSVReader from "react-csv-reader";
import "./Upload.css";

class Upload extends React.Component {
  constructor() {
    super();
    this.state = {
      table: "",
      status: false,
      value: ""
    };
    this.handleForce = this.handleForce.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleForce = data => {
    data.splice(0, 1);
    let array = [];
    data.forEach(element => {
      let i = element.length;
      let dat = {
        id: element[0],
        title: element[1],
        cogs: element[2],
        price: element[3],
        variant: element[4],
        sku: element[5]
      };
      array.push(dat);
    });
    this.setState({
      table: array,
      status: true
    });
  };

  onChange(e) {}
  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <div style={{ marginLeft: "20%" }}>
          <div>Upload CSV Section</div>
          <div>
            <CSVReader
              label=" Upload .CSV file"
              onFileLoaded={this.handleForce}
            />
          </div>
          <div>
            <br />
            {this.state.status === true ? (
              <table id="t01">
                <tr>
                  <th>id</th>
                  <th>title</th>
                  <th>price</th>
                  <th>variant</th>
                  <th>sku</th>
                  <th>cogs</th>
                </tr>

                {this.state.table.map((val, i) => (
                  <tr key={i}>
                    <td key={i}>{val.id}</td>
                    <td key={i}>{val.title}</td>
                    <td key={i}>{val.price}</td>
                    <td key={i}>{val.variant}</td>
                    <td key={i}>{val.sku}</td>
                    <input
                      key={i}
                      type="text"
                      value={val.cogs}
                      onChange={e => this.onChange(e)}
                    />
                  </tr>
                ))}
              </table>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Upload;
