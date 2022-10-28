import React, { Component } from "react";

class Timer extends Component {
    
    constructor(props) {
        super(props);
        this.maxvalue = props.countdown
        this.state = { countdown: props.countdown, myInterval: undefined }

        // Events registrieren:
        this.onCountDown = this.onCountDown.bind(this);
        this.onStartCountdown = this.onStartCountdown.bind(this);
    }

    onCountDown() {
        if (this.state.countdown === 1) {
            clearInterval(this.state.myInterval)
            this.setState({countdown: "Fertig"})
            this.setState({myInterval: undefined})
        } 
        else {
            this.setState({countdown: --this.state.countdown})
        }
    }

    onStartCountdown() {
        if (this.state.myInterval != undefined) {
            this.setState({countdown: this.maxvalue})
        }
        else {
            const myInterval = setInterval(this.onCountDown, 1000)
            this.setState({countdown: this.maxvalue})
            this.setState({myInterval: myInterval})
        }
    }

    render() {
        return (<>
            <p>{this.state.countdown}</p>
            <div>
                <button onClick={this.onStartCountdown}>Start</button>
            </div>


        </>

        )
    }

}

export default Timer;