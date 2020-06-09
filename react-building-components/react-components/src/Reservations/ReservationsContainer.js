import React from 'react';
import NewReservationForm from './NewReservationForm.js';
import Reservations from './Reservations.js';


export default class ReservationsContainer extends React.Component {
    constructor(props){
        super()
        this.state = {
            site:{}

            };
        }


    handleSubmit = (event) => {
        event.preventDefault();
        let formData = {site: {site: this.state.site, name: this.state.name, date: this.site.date}} 
        this.setState({site: {...formData.site}})
        alert('A new site was submitted') 
    }
    
    render() {
        return (
            <div id="reservations">
                <NewReservationForm submit={this.handleSubmit} />
                <Reservations site={this.state.site} />
            </div>
        )
        }

   
}