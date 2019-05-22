import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

import Header from './component/Layout/Header';
import Main from './component/Layout/Main';
import Login from "./component/Login/Login";
import Movie from './component/Movie/Movie';
import MovieInfo from './component/Movie/MovieInfo';


class App extends React.Component {

  state = {username: null}

  componentDidMount(){
    fetch("/api/getUsername")
    .then(res => res.json())
    .then(user => this.setState({username: user.username}))
    .catch(err => console.log(err))
  }

  render (){
    const { username } = this.state;
    return (
      <Router>
        <div className="App">
          <p>{username ? this.state.username : "waiting"}</p>
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
