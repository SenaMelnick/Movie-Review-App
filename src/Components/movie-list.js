import React from "react";
import Movie from "./movie";

export default class MovieList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: props
        };
    };

    render() {
        return (
            <div>
                <Movie {...this.state.movies[0]}/>
                <br/>
                <hr className="white"></hr>
                <br/>
                <Movie {...this.state.movies[1]}/>
                <br/>
                <hr className="white"></hr>
                <br/>
                <Movie {...this.state.movies[2]}/>
                <br/>
            </div>
        )
    }
}