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
                <input type="text">Write your review here</input>
                <button type="submit">Submit</button>
            </form>
        )
    }
}