import React from "react";

export default class Review extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        };
    };

    render() {
        return (
            <div className="box ">
                <div className="row">
                    <div className="col-1">
                        <p>Username</p>
                    </div>
                    <div className="col-10"></div>
                    <div className="col-1">
                        <p>Time</p>
                    </div>
                </div>
                <div className="row">
                    <p>Review Content</p>
                </div>
            </div>
        )
    }
}