import React from 'react';

class NewReservationForm extends React.Component {
    render () {
        return (
            <form>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name"></input> 
            <label for="date">Date:</label>
            <input type="text" id="date" name="date"></input> 
            <label for="site">Site:</label>
            <input type="text" id="site" name="site"></input>
            <button type="submit">Submit</button> 
            </form>
        )
    }
}

export default NewReservationForm;