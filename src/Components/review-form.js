import React from "react";

export default class ReviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        };
    };

    render() {
        return (
            <form>
                <textarea className="form-control plus" type="text" placeholder="Write your review here..."/>
                <br/>
                <button className="btn btn-primary" type="submit" onClick={this.addReview()}>Submit</button>
            </form>
        );
    };

    addReview() {
        let list = document.getElementById('#review-holder');
    }
}