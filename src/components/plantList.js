import React, { Component } from 'react'
import plants from '../Apprentice_WeGrowInTandem_Data';
const startDate = new Date('2019-12-16T09:00:00')



class PlantList extends Component {


    render() {
        return (
            <div>
                <ul>
                    {this.listPlants()}
                </ul>
                {this.props.today.getDay() === 1 || this.props.today.getDay() === 5 ? this.getWeekendPlants() : null}
            </div>
        )
    }

    listPlants = () => {
        const todaysPlants = this.getPlants(this.props.today)
        return todaysPlants.map(plant => {
            return <li>{plant.name}</li>
        })
    }

    getWaterInterval = (plant) => {
        return plant.water_after.split(' ')[0]
    }

    getPlants(date) {
        const todaysPlants = plants.filter(plant => {
            return (
            (this.compareDate(date) % this.getWaterInterval(plant) === 0) ? plant : null)
        })
        return todaysPlants

    }

    getWeekendPlants() {
        let day = this.props.today.getDay()

        if (day === 1) {
            debugger

        }
        else if (day === 5) {
            console.log(day)
        }
    }


    compareDate = (date) => { return ((date - startDate) / 1000) / 86400 }

}

export default PlantList