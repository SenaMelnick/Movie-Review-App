import React from "react";

export default class Review extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: props.user,
            time: props.timeStamp,
            content: props.content
        };
    };

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-1">
                        <b>{this.state.user}</b>
                    </div>
                    <div className="col-9"></div>
                    <div className="col-2">
                        <b>{this.state.time}</b>
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <p>{this.state.content}</p>
                </div>
            </div>
        )
    }
}