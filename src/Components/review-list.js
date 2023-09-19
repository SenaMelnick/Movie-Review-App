import React from "react";
import Review from "./review";
import ReviewForm from "./review-form";

export default class ReviewList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            reviews: props.reviews,
            id: props.id
        };
    };

    render() {
        return (
            <div className="box">
                <Review {...this.state.reviews[0]}></Review>
                <hr className="white"></hr>
                <Review {...this.state.reviews[1]}></Review>
                <div id={this.pickId()}></div>
                <hr className="white"></hr>
                <ReviewForm {...this.state.id}/>
            </div>
        );
    };

    pickId() {
        return `new-reviews-${this.state.id}`
    }
};