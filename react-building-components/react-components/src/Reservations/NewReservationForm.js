import React from 'react';


export default class NewReservationForm extends React.Component {
    constructor(){
    super()
    this.state = {
        site: "",
        date: "",
        name: ""
        };
    }
    updateField = (event) => {
        this.setState({formData: {...this.state.formData}, [event.target.name]: event.target.value})
    }

    render(){

        return(
            <form>
                <label>Site</label>
                <input onChange={this.updateField} id="site" name="site" type="text" />
                <br />
                <label>Date</label>
                <input onChange={this.updateField} id="date" name="date" type="text" />
                <br />
                <label>Name</label>
                <input onChange={this.updateField} id="name" name="name" type="text" />

                <input name="submit" type="submit" value="Submit" />
            </form>
        )
            

    }
}