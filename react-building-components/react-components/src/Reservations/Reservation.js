import React from 'react';


export default class Reservation extends React.Component {
    render(){
        return(
            <div> <h1>{this.props.name}</h1>
                        <h2>{this.props.date}</h2>
                         <h3>{this.props.site}</h3>
                          </div>

        )
    }
   

   
}