import React from "react";
import Sidebar from "../component/Sidebar";
import Header from "../component/Header";
import CSVReader from "react-csv-reader";
import "./Upload.css";
import _ from "lodash";
import fs from "fs";
import createFile from "create-file";

class Upload extends React.Component {
  constructor() {
    super();
    this.state = {
      table: {},
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

  onChange(b, x) {
    let { table } = this.state;
    console.log(
      b,
      x,
      table,
      _.findIndex(table, function(o) {
        return o.id == b;
      })
    );
    const index = _.findIndex(table, function(o) {
      return o.id == b;
    });
    table[index]["cogs"] = x;
    this.setState({ table: table });
  }
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
              <div>
                <table id="t01">
                  <thead>
                    <tr>
                      <th>id</th>
                      <th>title</th>
                      <th>price</th>
                      <th>variant</th>
                      <th>sku</th>
                      <th>cogs</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.table.map((val, i) => (
                      <tr key={i} value={val.id}>
                        <td>{val.id}</td>
                        <td>{val.title}</td>
                        <td>{val.price}</td>
                        <td>{val.variant}</td>
                        <td>{val.sku}</td>
                        <td>
                          <input
                            type="text"
                            value={val.cogs}
                            onChange={e =>
                              this.onChange(val.id, e.target.value)
                            }
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Upload;
