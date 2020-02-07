import React from "react";

export default class Clock extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            timer: new Date().toLocaleTimeString()
        }
    }

    render() {
        return (
            <div>
                {this.state.timer}
            </div>
        )
    }
}