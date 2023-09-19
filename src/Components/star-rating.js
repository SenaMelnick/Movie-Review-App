import React from "react";

export default class StarRating extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rating: props.rating,
            id: props.id
        };
    };

    render() {
        return (
            <div className="col">;
                <div className={this.deduceRating(this.state.rating, 1)} onClick={() => this.setRating(1)}></div>
                <div className={this.deduceRating(this.state.rating, 2)} onClick={() => this.setRating(2)}></div>
                <div className={this.deduceRating(this.state.rating, 3)} onClick={() => this.setRating(3)}></div>
                <div className={this.deduceRating(this.state.rating, 4)} onClick={() => this.setRating(4)}></div>
                <div className={this.deduceRating(this.state.rating, 5)} onClick={() => this.setRating(5)}></div>
            </div>
        );
    };

    deduceRating(rating, starNum) {
        switch (rating) {
            case null: 
                return "blank-star float";
            case 1:
                switch (starNum) {
                    case 1:
                        return "star float";
                    case 2:
                        return "blank-star float";
                    case 3:
                        return "blank-star float";
                    case 4:
                        return "blank-star float";
                    case 5:
                        return "blank-star float";
                };
            case 2:
                switch (starNum) {
                    case 1:
                        return "star float";
                    case 2:
                        return "star float";
                    case 3:
                        return "blank-star float";
                    case 4:
                        return "blank-star float";
                    case 5:
                        return "blank-star float";
                };
            case 3:
                switch (starNum) {
                    case 1:
                        return "star float";
                    case 2:
                        return "star float";
                    case 3:
                        return "star float";
                    case 4:
                        return "blank-star float";
                    case 5:
                        return "blank-star float";
                };
            case 4:
                switch (starNum) {
                    case 1:
                        return "star float";
                    case 2:
                        return "star float";
                    case 3:
                        return "star float";
                    case 4:
                        return "star float";
                    case 5:
                        return "blank-star float";
                };
            case 5:
                switch (starNum) {
                    case 1:
                        return "star float";
                    case 2:
                        return "star float";
                    case 3:
                        return "star float";
                    case 4:
                        return "star float";
                    case 5:
                        return "star float";
                };
        };
    };
    //This function checks both the star number and what rating was passed in through props to decide if the star is blank or lit

    setRating(starNum) {
        this.setState({rating: starNum});
    };
    //Updates the rating state to the star number that was clicked. 
    //This does not update the rating in the movies.js database 

};