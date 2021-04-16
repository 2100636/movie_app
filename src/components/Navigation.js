import React from 'react';
import {Link} from 'react-router-dom'

function Navigation(){
  return <div>
    <Link to="/">Главная</Link>
    <Link to={{
      pathname: '/about',
      state: {
        fromLocation: true
      }
      }}>О нас</Link>
  </div>;
}


export default Navigation