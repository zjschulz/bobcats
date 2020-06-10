import React from 'react';
import NewReservationForm from './NewReservationForm.js';
import Reservations from './Reservations.js';
import Reservation from './Reservation.js';

export default class ReservationsContainer extends React.Component {
    constructor(props){
        super()
        this.state = {
            sites: [
                {site: "test",
                date: "27/05/2020",
                name: "test site"},
                {site: "test",
                date: "27/05/2020",
                name: "test site"},
                {site: "test",
                date: "27/05/2020",
                name: "test site"} 
            ]
            };
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

    createNewReservation = (formData) => {
        this.setState({newSite: {...formData}})
    }
    
    render() {
        return (
            <div className= "resCont">
                <NewReservationForm submit={this.createNewReservation} />
                <Reservations newSite={{...this.state.newSite}} updateSites={this.updateSites} generateReservations={this.generateReservations}/>
            </div>
        )
        }

   
}