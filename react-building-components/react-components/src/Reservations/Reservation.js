import React from 'react';


export default class Reservation extends React.Component {
    render(){
        return(
            
            
            <tr>
                <td>{this.props.site}</td> 
                <td>{this.props.name}</td>
                <td>{this.props.date}</td>
            </tr>


        )
    }
   

   
}