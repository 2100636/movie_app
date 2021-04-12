import React from 'react';
import Newapp from './Newapp';
import PropTypes from 'prop-types';

function Food({name, img, rating}){
  return (
    <div>
      <h4>{name}</h4>
      <div>{rating}</div>
      <img src={img} alt={name} width='450'/>
    </div>
  );
}
Food.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

const foodLike = [
  {
    'id': '1',
    'name': '1',
    'img': 'https://www.nastol.com.ua/pic/201704/1920x1080/nastol.com.ua-221046.jpg',
    'rating': 5.0
  },
  {
    'id': '2',
    'name': '2',
    'img': 'https://mota.ru/upload/resize/1152/864/upload/wallpapers/source/2015/08/24/15/01/45276/mota.ru-20150824025-92f.jpg',
    'rating': 3.0
  },
  {
    'id': '3',
    'name': '3ывава',
    'img': 'https://img4.goodfon.com/original/1366x768/8/3a/krasivaia-seksualnaia-devushka-shatenka-sidit-na-zemle-poza.jpg',
    'rating': 4.4
  },
  {
    'id': '4',
    'name': '4',
    'img': 'https://get.wallhere.com/photo/sunlight-women-outdoors-women-model-portrait-closed-eyes-nature-grass-sitting-photography-dress-jean-shorts-morning-emotion-Person-romance-autumn-girl-beauty-season-woman-lady-leg-photograph-portrait-photography-photo-shoot-art-model-interaction-323073.jpg',
    'rating': 4.0
  }
]


function render(item){
  // return Food(item);
  return <Food key={item.id} name={item.name} img={item.img} rating={item.rating}/>
}

function App0() {
  return (
    <div className="App">
      <Newapp />
      {/* {foodLike.map(item => Food(item))} */}
      {/* {foodLike.map(item => <Food key={item.id} name={item.name} img={item.img} rating={item.rating}/>)} */}
      {foodLike.map(render)}
    </div>
  );
}


// --------------------------------------------


class App extends React.Component{
  state = {
    count: 0
  }

  add = () => {
    this.setState(current => ({
      count: current.count+1
    }));
    console.log('add');
  }

  minus = () => {
    this.setState(function(current) {
      let a;
      if(current.count > 0){
        a = current.count - 1;
      }else{
        a = 0;
      }
      return {
        count: a
      }
    }); 
    console.log('minus');
  }

  render(){
    return <div>
      <h1>Число: {this.state.count}</h1>
      <button onClick={this.minus_}>Minus_</button>
      <button onClick={this.minus}>Minus</button>
      <button onClick={this.add}>Add</button>
    </div>
  }

}






export default App;
