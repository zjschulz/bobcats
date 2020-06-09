import React from 'react';


export default class NewReservationForm extends React.Component {
    constructor(props){
    super()
    this.state = {
        site: "",
        date: "",
        name: ""
        };
    }
    updateField = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    render(){

        return(
            <form onSubmit={this.props.handleSubmit}>
                <label>Site</label>
                <input onChange={this.updateField} value={this.state.site} id="site" name="site" type="text" />
                <br />
                <label>Date</label>
                <input onChange={this.updateField} value={this.state.date} id="date" name="date" type="text" />
                <br />
                <label>Name</label>
                <input onChange={this.updateField} value={this.state.name} id="name" name="name" type="text" />

                <input name="submit" type="submit" value="Submit" />
            </form>
        )
            

    }
}