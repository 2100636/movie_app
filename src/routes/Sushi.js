import React from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import xml2js from 'xml2js';

import './Sushi.css';
import { Router } from 'react-router';


class Sushi extends React.Component{
  
  state = {
    isLoading: true,
  }

  getData = async () => {
    var self = this;
    // const {
    //   data: {
    //     data:{movies}
    //   }
    // } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=year&order_by=desc&limit=100');    
    // console.log(movies);

    // http://localhost/getgoods.xml
    // https://sushi-jet.ru/yandexmarket/2d8bd96f-5039-4bf1-8c06-b2dd35a0a9a8.xml
    // http://sushi-jet.mc/yandexmarket/1e75f6c6-7a7f-40c6-bb61-a4852201ba2f.xml
    // http://cors-anywhere.herokuapp.com/https://sushi-jet.ru/yandexmarket/2d8bd96f-5039-4bf1-8c06-b2dd35a0a9a8.xml
    // {
    //   'Content-Type': 'application/json;charset=UTF-8',
    //   //'Access-Control-Allow-Origin': '*'
    // }
    
    const data = await axios.get('http://sushi-jet.mc/yandexmarket/1e75f6c6-7a7f-40c6-bb61-a4852201ba2f.xml')
    .then(function(response) {
      self.setState({ data: response.data });
      console.log(response);

      let parser = new xml2js.Parser();
      parser.parseString(
        response.data,
        function(err, result) {
          self.setState({ data_json: result.yml_catalog.shop[0].offers[0].offer });
          console.log(result.yml_catalog.shop[0].offers[0].offer);
        }
      );

    })
    .catch(function(error) {
      console.log(error);
    });    

    this.setState({isLoading: false});
  }


  componentDidMount(){
    this.getData();
    // setTimeout(() => {
    //   this.setState({isLoading: false});
    // }, 1000);
  }




  
  render(){
    const {isLoading, data_json} = this.state; 
    return (
      <div className="container">
        {isLoading 
          ? (
            <div className="loader">
              <span className="loader__text">Загрузка .. </span>
            </div>
          ): ( 
            <div className="items">
              {/* {data_json.map((item) => (
                <div key={item.id}>
                  {item.name}
                  <img src={item.picture} />
                </div>
              ))} */}
            </div>
          )
        }
      </div>
    );
  }

}






export default Sushi;



