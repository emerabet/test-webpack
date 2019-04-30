import React from 'react';
import { hot } from 'react-hot-loader'

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    handleClick() {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div onClick={() => this.handleClick()}>
                <h1>Count: {this.state.count}</h1>
            </div>
        );
    }
}

export default hot(module)(Counter);