import React from "react";
import Review from "./review";

export default class ReviewList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            reviews: props.reviews
        };
    };

    render() {
        return (
            <div className="box">
                <Review {...this.state.reviews[0]}></Review>
                <hr className="white"></hr>
                <Review {...this.state.reviews[1]}></Review>
            </div>
        )
    }
}