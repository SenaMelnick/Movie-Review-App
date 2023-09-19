import React from "react";
import ReactDOM from 'react-dom/client';
import Review from "./review.js";

export default class ReviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.id
        };
    };

    

    render() {
        return (
            <form>
                <textarea className="form-control plus" type="text" placeholder="Write your review here..." id={this.pickId()}/>
                <br/>
                <button className="btn btn-primary" type="button" onClick={() => this.addReview()}>Submit</button>
            </form>
        );
    };


    addReview() {
        let list = ReactDOM.createRoot(document.getElementById(`new-reviews-${this.state.id}`));
        list.render(
            <div>
                <hr className="white"></hr>
                <Review user="Sena" timeStamp="18/9/2023" content={document.getElementById(`input-${this.state.id}`).value}/>
            </div>
        );
    };
    //adds new reviews written by the user. Just like the star ratings, these do not update the database and do not remain after refresh. Admittedly this feature isn't the most efficient, it creates a new root every time it's called and also clears the new-reviews div so only one user review can be added per movie. I will most likely revisit this project later and improve these aspects

    pickId() {
        return `input-${this.state.id}`;
    };
};