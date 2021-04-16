import React from 'react';

class Detail extends React.Component{

  componentDidMount(){
    const {location, history} = this.props;
    console.log(this.props);
    console.log(location.state);
    if(location.state === undefined){
      history.push('/');
    }
  }

  render(){
    const {location} = this.props;
    const {id, year, title, summary, poster, genres} = location.state;
    if (location.state){
      return (
        <div className="movie" id={location.state.id}>
        <img src={poster} alt={title} />
        <div className="column">
          <h3 style={{backgroundColor: '#e1e1e1'}}>{title}</h3>  
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
    }else{
      return null;
    }
    
  }
}


export default Detail