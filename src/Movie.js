import React from 'react';
import MovieList from './MovieList';

class Movie extends React.Component {

    state={}

    componentDidMount(){
        this.getMovies();
      }
    
    getMovies = async () => {
        const movies = await this.callApi()
        this.setState({
            movies
        })
        console.log(movies)
    }

    callApi = () => {
        return fetch("http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json.jsp?collection=kmdb_new&ServiceKey=W354HOT36650847O49BO&listCount=10&releaseDts=20190101&detail=Y")
        .then(response => response.json())
        //.then(json => console.log(json))
        .then(json => json.Data[0].Result)
        .catch(err => console.log(err))
    }

    renderMovies = () => {
        const movies = this.state.movies.map((movie, index) => {
            return <MovieList title={movie.title} genre={movie.genre} poster={movie.posters.split("|")[0]} openDate={movie.repRlsDate} plot={movie.plot} num={index+1} code={movie.movieSeq} key={index}/>
        })
        return movies
    }

    loadingData = () => {
        return <p>loading</p>
    }
    

    render(){
        return (
            <div className="movieList">
                {this.state.movies ? this.renderMovies() : this.loadingData()}
            </div>
        );
    }
}

export default Movie;