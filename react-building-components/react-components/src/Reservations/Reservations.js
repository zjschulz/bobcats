import React from 'react';
import Reservation from './Reservation.js'

const testData = [
    {site: "test",
    date: "27/05/2020",
    name: "test site"},
    {        site: "test",
    date: "27/05/2020",
    name: "test site"},
    {site: "test",
    date: "27/05/2020",
    name: "test site"} 
]


export default class Reservations extends React.Component {
    constructor(props){
        super()
        
    }


    updateSites = () => {
        testData.push(this.props.site)
    }

    generateReservations = () => {
        // map over your movieData array and return an array of the correct JSX
        return testData.map((reservation, index) => <Reservation
          key = {index}
          site = {reservation.site}
          name = {reservation.name}
          date = {reservation.date}
          />)
    
        };
    render() {
        return (
            <div id="reservations">
            {this.updateSites}
            {this.generateReservations()}
            </div>
        )
        }

   
}