import React, { useState } from 'react'
import './cssfiles/Orders.css';
import { Calendar, DateRangePicker, DateRange } from 'react-date-range';

const Orders = () => {
    const [list, setlist] = useState([
        { reportName: "Sales Report", lastName: "Steward" },
        { reportName: "GST Report", lastName: "Longbottom" },
        { reportName: "Delivery Report", lastName: "Black" },
        { reportName: "Cancellation Report", lastName: "Black" }
    ])
    const [start, setstart] = useState(new Date())
    const [end, setend] = useState(new Date())
    const [value, setValue] = React.useState(null);


    const mystyle = {
        color: "#d85e54",
        fontSize: "14px",
        padding: "20px 0"
    };
    const mystyleone = {
        color: "Black",
        fontSize: "12px",
        fontWeight: "500",
        padding: "20px 0"
    };
    const mystylebtn = {
        color: "White",
        fontSize: "12px",
        fontWeight: "500",
        backgroundColor: "#d85e54",
        borderRadius: "10px",
        border: "none",
        padding: "8px",
        cursor:"pointer"
    };
    const mystyletwo = {
        color: "Black",
        fontSize: "12px",
        fontWeight: "500"
    };
    return (
        <div className='ord-main'>
            <table>
                <tr>
                    <th style={mystyle}>Report</th>
                    <th style={mystyle}>Start Date</th>
                    <th style={mystyle}>End Date</th>
                    <th style={mystyle}>Restaurant</th>
                    <th style={mystyle}>Filter</th>
                    <th style={mystyle}>Action</th>
                </tr>

                {list &&
                    list.map((user, i) => (
                        <tr key={i}>
                            <td style={mystyleone}>{user.reportName}</td>
                            <td style={mystyleone}>
                                Select Date
                            </td>
                            <td style={mystyleone}>
                                Select Date
                            </td>
                            <td >
                                <select style={mystyletwo}>
                                    <option selected >Select restaurant</option>
                                    <option>One</option>
                                    <option>two</option>
                                </select>
                            </td>
                            <td>
                                <select style={mystyletwo}>
                                    <option selected>Delivery</option>
                                    <option>All</option>
                                    <option>Dine in</option>
                                    <option>Delivery</option>

                                </select>
                            </td>
                            <td >
                                <button style={mystylebtn}>Generate</button></td>
                        </tr>
                    ))}

            </table>
        </div>
    )
}

export default Orders