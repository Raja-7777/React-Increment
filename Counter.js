import React from 'react';

class Counter extends React.Component {
    constructor(props){
        super();
        this.state ={
            counter :5
        }
    }
    handleIncrement = () => {
        this.setState({counter : this.state.counter + 1});
    }
    handleDecrement = () => {
        this.setState({counter : this.state.counter - 1});
    }
    render() {
            const handlereset = () => {
                this.setState({counter :5});
            }
        return(
            <>
            <h3>Counter {this.props.componentName}</h3>

            Value:{this.state.counter}<br></br>

            <button onClick={() => this.handleIncrement()}>Increment</button> &nbsp;&nbsp;
            <button onClick={() => this.handleDecrement()}>Decrement</button> &nbsp;&nbsp;
            <button onClick={handlereset}>Reset</button> &nbsp; &nbsp;
            </>
        )
    }
}

export default Counter;
