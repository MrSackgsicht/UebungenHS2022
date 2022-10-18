import React, { Component } from "react";

class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = { countdown: props.countdown }

        // Events registrieren:
        this.start = this.start.bind(this);
    }

    start() {
        this.setState({countdown: --this.state.countdown})
        console.log(this.value)
    }

    render() {
        return (<>
            <p>{this.state.countdown}</p>
            <div>
                <button onClick={this.start}>Start</button>
            </div>


        </>

        )
    }

}

export default Timer;