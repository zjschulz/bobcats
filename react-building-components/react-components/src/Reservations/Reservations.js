import React from 'react';
import Reservation from './Reservation.js'


export default class Reservations extends React.Component {
    constructor(props){
        super()
        this.state = {
            sites: [
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
        }
    }


    updateSites = () => {
        this.state.sites.push({...this.props.newSite})
    }

    generateReservations = () => {
        return this.state.sites.map((reservation, index) => <Reservation
          key = {index}
          site = {reservation.site}
          name = {reservation.name}
          date = {reservation.date}
          />)
    
        };

    render() {    
        return (
            <div id="reservations">
            {this.updateSites()}
            <table className="w3-table-all w3-centered">
                <tr>
                    <th>Site</th>
                    <th>Name</th>
                    <th>Date</th>
                </tr>
                <tbody>
                    {this.generateReservations()}
                </tbody>
            </table>
            </div>
        )
        }
    }
