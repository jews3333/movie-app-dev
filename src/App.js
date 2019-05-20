import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';


import Movie from './Movie';
import MovieInfo from './MovieInfo';


class App extends React.Component {
  render (){
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Movie} />
          <Switch>
            <Route path="/movieinfo/:name" component={MovieInfo} />
            <Route path="/movieinfo" component={MovieInfo} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
