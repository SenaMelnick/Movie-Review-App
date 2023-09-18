import React from "react";
import ReactDOM from 'react-dom/client';
import Review from "./review.js";

export default class ReviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        };
    };

    

    render() {
        return (
            <form>
                <textarea className="form-control plus" type="text" placeholder="Write your review here..." id="input"/>
                <br/>
                <button className="btn btn-primary" type="button" onClick={() => this.addReview()}>Submit</button>
            </form>
        );
    };


    addReview() {
        let list = ReactDOM.createRoot(document.getElementById('new-reviews'));
        list.render(
            <div>
                <hr className="white"></hr>
                <Review user="Sena" timeStamp="18/9/2023" content={document.getElementById('input').value}/>
            </div>
        );
    };
};