import React from "react";

export default class StarRating extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rating: props.rating
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

    deduceRating(rating, starNum) {
        switch (rating) {
            case null: 
                return "blank-star";
            case 1:
                switch (starNum) {
                    case 1:
                        return "star";
                    case 2:
                        return "blank-star";
                    case 3:
                        return "blank-star";
                    case 4:
                        return "blank-star";
                    case 5:
                        return "blank-star";
                };
            case 2:
                switch (starNum) {
                    case 1:
                        return "star";
                    case 2:
                        return "star";
                    case 3:
                        return "blank-star";
                    case 4:
                        return "blank-star";
                    case 5:
                        return "blank-star";
                };
            case 3:
                switch (starNum) {
                    case 1:
                        return "star";
                    case 2:
                        return "star";
                    case 3:
                        return "star";
                    case 4:
                        return "blank-star";
                    case 5:
                        return "blank-star";
                };
            case 4:
                switch (starNum) {
                    case 1:
                        return "star";
                    case 2:
                        return "star";
                    case 3:
                        return "star";
                    case 4:
                        return "star";
                    case 5:
                        return "blank-star";
                };
            case 5:
                switch (starNum) {
                    case 1:
                        return "star";
                    case 2:
                        return "star";
                    case 3:
                        return "star";
                    case 4:
                        return "star";
                    case 5:
                        return "star";
                };
        };
    };

};