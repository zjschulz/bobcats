import React from 'react';


const Reservation = (props) => {

        return(
            <tr>
                <td>{props.site}</td> 
                <td>{props.name}</td>
                <td>{props.date}</td>
            </tr>
        )

}

export default Reservation