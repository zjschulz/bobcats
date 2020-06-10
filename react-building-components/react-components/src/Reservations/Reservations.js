import React from 'react';

const Reservations = (props) => {
    
        return (
            <div id="reservations">
            <table className="w3-table-all w3-centered">
                <tr>
                    <th>Site</th>
                    <th>Name</th>
                    <th>Date</th>
                </tr>
                <tbody>
                    {props.generateReservations()}
                </tbody>
            </table>
            </div>
        )
        
    }

export default Reservations