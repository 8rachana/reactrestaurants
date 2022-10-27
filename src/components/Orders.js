import React, { useState } from 'react'
import './cssfiles/Orders.css';

const Orders = () => {
    const [list, setlist] = useState([
        { reportName: "Sales Report", lastName: "Steward" },
        { reportName: "GST Report", lastName: "Longbottom" },
        { reportName: "Delivery Report", lastName: "Black" },
        { reportName: "Cancellation Report", lastName: "Black" }

    ])
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
        padding: "8px"
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
                            <td></td>
                            <td></td>
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