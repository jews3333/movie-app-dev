import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

import Header from 'component/Layout/Header';
import Main from 'component/Layout/Main';
import Login from 'component/Auth/Login';
import Movie from 'component/Movie/Movie';
import MovieInfo from 'component/Movie/MovieInfo';


class App extends React.Component {

  render (){
    return (
      <Router>
        <div className="App">
          <Header/>
          <Route exact path="/" component={Main} />
          <Route path="/login" component={Login} />
          <Switch>
            <Route path="/movie/info/:name" component={MovieInfo} />
            <Route path="/movie/info" component={MovieInfo} />
            <Route path="/movie" component={Movie} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
