import React, {Component} from 'react';
import PlantList from './plantList'
const startDate = new Date('2019-12-16T09:00:00')
const strftime = require('strftime')


class PlantSchedule extends Component {

    state= {
        date: startDate
    }

    formatDate = (date) => strftime('%A, %B %e', date)

    addDay = () => {
        const date = this.state.date
       let newDate 
       if (date.getDay() === 5) {
        newDate = new Date(date.setDate(date.getDate()+3))
       }else{
        newDate = new Date(date.setDate(date.getDate()+1))
       }
       this.setState({date: newDate})
    }

    prevDay = () => {
        const date = this.state.date
       let newDate 
       if (date.getDay() === 1) {
        newDate = new Date(date.setDate(date.getDate()-3))
       }else{
        newDate = new Date(date.setDate(date.getDate()-1))
       }
       this.setState({date: newDate})
    }


    render() {
        return (
        <div>
            <h2 className="day-header">{this.formatDate(this.state.date)}</h2>
            <button onClick={this.prevDay} id="prev-day">{'<'}</button>
            <button onClick={this.addDay} id="next-day" >{'>'}</button>
            <div className="plant-list">
                <PlantList today={this.state.date}/>
            </div>
        </div>
        )

    }
}

export default PlantSchedule