import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';


function Movie({id, year, title, summary, poster, genres}){
  return (
    <div className="movie" id={id}>
      <img src={poster} alt={title} />
      <div className="column">
        <h3 style={{backgroundColor: 'red'}}>{title}</h3>  
        <h5>{year}</h5>        
        <ul className="genres">
          {genres.map((genre, index) => {
            return <li key={index} className="genre">{genre}</li>
          })}
        </ul>
        <p>{summary}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;
