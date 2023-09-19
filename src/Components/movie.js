import React from "react";
import StarRating from "./star-rating";
import ReviewList from "./review-list";

export default class Movie extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.name,
            director: props.director,
            cover: props.cover,
            synopsis: props.synopsis,
            score: props.score,
            rating: props.userRating,
            reviews: props.reviews
        };
    };

    render() {
        return (
        <div>
            <div className="box">
                <div className="row">
                    <div className="col-6">
                        <h2 className="white">{this.state.name}</h2>
                    </div>
                    <div className="col-3"></div>
                    <div className="col-3">
                        <h5 className="white">Directed by {this.state.director}</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <img src={this.state.cover}/>
                    </div>
                    <div className="col">
                        <p>{this.state.synopsis}</p>
                    </div>
                    <div className="col-2"></div>
                </div>
                <div className="row">
                    <div className="col-1">
                        <h5 className="score">{this.state.score}</h5>
                    </div>
                    <div className="col-8"></div>
                    <div className="col-3">
                        <StarRating {...this.state}></StarRating>
                    </div>
                </div>
            </div>
            <br/>

            <ReviewList {...this.state.reviews}></ReviewList>
        </div>
        )
    }
}