import React from "react";
import Sidebar from '../component/Sidebar'
import Header from "../component/Header";
import {CSVLink} from 'react-csv';
import mock from '../mock.json'


class Download extends React.Component {
  constructor() {
    super();
    this.state = {
      id : '',
      varient: '',
      title: '',
      sku: '',
      price: '',
      cogs: ''
    };
  }
  componentWillMount(){
    mock.forEach(element => {

      this.setState({
        id:element.id,
        varient: element.product_details.variant,
        title: element.product_details.title,
        sku:element.product_details.sku,
        price:element.product_details.price,
        cogs:element.product_details.cogs
      });
  
    });
  }
  render() {
    console.log(this.state)
  

    return (
      <div>
        <Header/>
        <Sidebar/>
        <div  style={{marginLeft:"25%"}}>
            <div>
              Download CSV Section
            </div>
            <div>
            <CSVLink data={this.state.id}>
               Download CSv
            </CSVLink>
              </div>
        </div>
      </div>
    );
  }
}

export default Download;
