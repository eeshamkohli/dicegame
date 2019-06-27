import React, { Component } from 'react'

class Die extends Component {
    static defaultProps = {
        number: "one"
    }
    render() {
        return (
            <div>
                <i className={`fas fa-dice-${this.props.number}`} style={{ fontSize: '58px' }}></i>
            </div>
        )
    }
}

export default Die