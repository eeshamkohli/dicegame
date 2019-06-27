import React, { Component } from 'react'
import Die from './Die'

const FACES = ['one', 'two', 'three', 'four', 'five', 'six'];

class RollDice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonText: 'Roll Dice!',
            face1: FACES[Math.floor(Math.random() * FACES.length)],
            face2: FACES[Math.floor(Math.random() * FACES.length)],
            disabled: false
        };
        this.buttonClickHandler = this.buttonClickHandler.bind(this);
    }

    buttonClickHandler(e) {
        this.setState({ buttonText: 'Rolling...' })
        this.setState({ disabled: true })
        setTimeout(() => {

            this.setState({ face1: FACES[Math.floor(Math.random() * FACES.length)], face2: FACES[Math.floor(Math.random() * FACES.length)], disabled: false });
            this.setState({ buttonText: 'Roll Dice!' })
        }, 2000)
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <Die number={this.state.face1} />
                    <Die number={this.state.face2} />
                </div>
                <button disabled={this.state.disabled} onClick={this.buttonClickHandler}>{this.state.buttonText}</button>
            </React.Fragment>
        )
    }

}

export default RollDice