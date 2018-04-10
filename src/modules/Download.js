import React from "react";
import Sidebar from "../component/Sidebar";
import Header from "../component/Header";
import { CSVLink } from "react-csv";
import mock from "../mock.json";
import _ from "lodash";
let id;
let variant;
let title;
let cogs;
let price;
class Download extends React.Component {
  constructor() {
    super();
    this.state = {
      csv: []
    };
  }
  componentWillMount() {
    var data = _.map(mock, (data, key) => {
      let id = data.id;
      let variant = data.product_details.variant;
      let title = data.product_details.title;
      let cogs = data.product_details.cogs;
      let price = data.product_details.price;
      let sku = data.product_details.sku;
      let details = {id,title,cogs,price,variant,sku}
      return details;  
    });
    this.setState({csv: data});
  }

  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <div style={{ marginLeft: "25%" }}>
          <div>Download CSV Section</div>
          <div>
            <button ><CSVLink data={this.state.csv}>Download CSV</CSVLink></button>
          </div>
        </div>
      </div>
    );
  }
}

export default Download;

//    mock.forEach(element => {
// this.setState({
//     id : element.id ,
//       variant: element.product_details.variant,
//       title: element.product_details.title,
//       sku: element.product_details.sku,
//       price: element.product_details.price,
//       cogs: element.product_details.cogs})
//     });
