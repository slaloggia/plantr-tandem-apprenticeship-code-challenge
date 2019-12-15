import React, { Component } from 'react'
import plants from '../Apprentice_WeGrowInTandem_Data';
const startDate = new Date('2019-12-16T09:00:00')



class PlantList extends Component {


    render() {
        return (
            <div>
                <ul>
                    {this.listPlants()}
                    {this.props.today.getDay() === 1 || this.props.today.getDay() === 5 ? this.listWeekendPlants() : null}
                </ul>
            </div>
        )
    }

    listPlants = () => {
        const todaysPlants = this.getPlants(this.props.today)
        return todaysPlants.map(plant => {
            return <li key={"key"+plant.name}>{plant.name}</li>
        })
    }

    getWaterInterval = (plant) => {
        return plant.water_after.split(' ')[0]
    }

    getPlants(date) {
        const todaysPlants = plants.filter(plant => {
            return (this.compareDate(date) % this.getWaterInterval(plant) === 0) ? plant : null
        })
        return todaysPlants
    }

    getWeekendPlants() {
        const today = this.props.today
        const weekend = new Date(this.props.today)
        if (today.getDay() === 1) {
            weekend.setDate(today.getDate()-1)
        }
        else if (today.getDay() === 5) {
            weekend.setDate(today.getDate()+1)
        }
        return this.getPlants(weekend)
    }

    listWeekendPlants = () => {
        const weekendPlants = this.getWeekendPlants()
        if (weekendPlants.length > 0) {
            return weekendPlants.map(plant => {
                return <li>{plant.name}</li>
            })
        }
    }



    compareDate = (date) => { return ((date - startDate) / 1000) / 86400 }

}

export default PlantList