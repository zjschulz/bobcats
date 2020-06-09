import React from 'react';


export default class NewReservationForm extends React.Component {
    constructor(props){
    super()
    this.state = {

        };
    }
    updateField = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let formData = {site: this.state.site, name: this.state.name, date: this.state.date}
        this.setState({newSite: {...formData}})
        this.props.submit(formData)
        alert('A new site was submitted') 
    }

    render(){

        return(
            <div className="container">
            <form className="reservationForm" onSubmit={this.handleSubmit}>

                    <label>Site </label>
                    <input className="w3-input" onChange={this.updateField} value={this.state.site} id="site" name="site" type="number" />
                    <br />
                    <label>Date </label>
                    <input className="w3-input" onChange={this.updateField} value={this.state.date} id="date" name="date" type="date" />
                    <br />
                    <label >Name </label>
                    <input className="w3-input" onChange={this.updateField} value={this.state.name} id="name" name="name" type="text" />
                    <br />
                    <input name="submit" type="submit" value="Submit" />
                </form>

            </div>
        )
            

    }
}