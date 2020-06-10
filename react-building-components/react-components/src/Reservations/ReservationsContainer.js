import React from 'react';
import NewReservationForm from './NewReservationForm.js';
import Reservations from './Reservations.js';


export default class ReservationsContainer extends React.Component {
    constructor(props){
        super()
        this.state = {

            };
        }


    createNewReservation = (formData) => {
        this.setState({newSite: {...formData}})
    }
    
    render() {
        return (
            <div className= "resCont">
                <NewReservationForm submit={this.createNewReservation} />
                <Reservations newSite={{...this.state.newSite}} />
            </div>
        )
        }

   
}