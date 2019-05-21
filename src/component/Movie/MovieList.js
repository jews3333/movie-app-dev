import React from 'react';
import './MovieList.css';

class MovieList extends React.Component{

    render(){
        const code = "/movie/info/"+this.props.code;
        return (
            <div className="listItem">
                <a href={code}>
                    <span className="num"><span>{this.props.num}</span></span>
                    <div className="itemImg">
                        {this.props.poster ? <img src={this.props.poster} alt={this.props.title}/> : null}
                    </div>
                    <div className="itemInfo">
                        <p className="title">{this.props.title}({this.props.openDate.substr(0,4)})</p>
                        <p className="genre">{this.props.genre}</p>
                        <p className="plot">{this.props.plot.substr(0,50)}...</p>
                    </div>
                </a>
            </div>
        );
    }
}

export default MovieList;