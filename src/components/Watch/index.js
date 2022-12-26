import React, { Component } from 'react'
import moment from 'moment'

export default class WatchClass extends Component {
    constructor(props) {
        super(props);
        const { title, gmt } = props.data;
        this.calback = props.calback;
        this.time = moment().utcOffset(gmt).format('HH:mm:ss')


        this.state = {
            gmt,
            time: this.time,
            title,
        }
    }

    render() {
        return (
            <div className="Watch">
                {this.state.title}<br />
                {this.state.time}<br />
                <button onClick={(e) => this.handleClick(e)} name={this.state.title}>X</button>
            </div>
        )
    }

    componentDidMount() {
        this.timerID = setInterval(() => {
            this.setState({
                time: moment().utcOffset(this.state.gmt).format('HH:mm:ss')
            })
        }, 1000)
    }

    handleClick(e) {
        this.calback(e.target.name)
        e.preventDefault();
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

}