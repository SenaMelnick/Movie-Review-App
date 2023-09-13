import React from "react";

export default class StarRating extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            starState: props.starState
        };
    };

    render() {
        return (
            <div className="col">;
                <div class="star float"></div>
                <div class="star float"></div>
                <div class="star float"></div>
                <div class="star float"></div>
                <div class="star float"></div>
            </div>
        );
    };
};