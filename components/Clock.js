import React, { Component } from 'react';

export default class Clock extends Component {
    constructor (props) {
        super(props);
        this.state = {
            date: new Date,
            counter: 0
        };
    }
    componentDidMount () {
        this.timerID = setInterval(() => this.tick(), 1000);
        console.log('componentDidMount');
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
        console.log('componentWillUnmount');
    }
    tick () {
        this.setState({
            date: new Date()
        });
    }
    render () {
        let localeDate = this.state.date.toLocaleDateString();
        let localeTime = this.state.date.toLocaleTimeString();

        return (
            <div>
                <h1>aaa</h1>
                <h2>It is {localeDate}.</h2>
                <h2>{localeTime}</h2>
                <button>点击计数：{this.state.counter}</button>
            </div>
        );
    }
}
