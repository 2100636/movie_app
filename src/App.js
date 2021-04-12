import React from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';
import './App.css';


function log(a){
  console.log(a);
}

class App extends React.Component{
  
  state = {
    isLoading: true,
    movies: [],
  }

  getJsonByUrl = async () => {
    const {
      data: {
        data:{movies}
      }
    } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=year&order_by=desc&limit=100');    
    log(movies);
    this.setState({movies, isLoading: false});
  }


  componentDidMount(){
    this.getJsonByUrl();
    // setTimeout(() => {
    //   this.setState({isLoading: false});
    // }, 1000);
  }


  render(){
    const {isLoading, movies} = this.state; 
    return (
      <div className="cotainer">
        {isLoading 
          ? (
            <div className="loader">
              <span className="loader__text">Загрузка .. </span>
            </div>
          ): ( 
            <div className="movies">
              {movies.map((movie) => (  
                <Movie 
                  key={movie.id} 
                  id={movie.id} 
                  year={movie.year} 
                  title={movie.title} 
                  summary={movie.summary} 
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              ))}
            </div>
          )
        }
      </div>
    );
  }

}






export default App;



