import React from 'react';
import {Route, HashRouter, BrowserRouter} from 'react-router-dom';
import Navigation from './components/Navigation';
import Detail from './components/Detail';
import Home from './routes/Home';
import About from './routes/About';
import Sushi from './routes/Sushi';

function App(){
  return <BrowserRouter>
    <Navigation />
    <Route path="/" exact={true} component={Home} />
    <Route path="/about"  component={About} />
    <Route path="/movie/:id" component={Detail} />
    <Route path="/sushi" component={Sushi} />
  </BrowserRouter>
}


export default App;



