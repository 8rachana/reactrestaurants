import React, { useState } from 'react'
import './cssfiles/Reports.css';

const Reports = () => {
    const [userList, setUserList] = useState([
        { type: "Online", name: "Steward", firstname: "Ann", phone: "+91 2345678987", address: "jp nagar bangalore", code: "HM096", total: "300", stat: "paid" },
        { type: "Dine in", name: "Longbottom", firstname: "Cudrow", phone: "+91 2345678987", address: "jayanagar bangalore", code: "HM096", total: "300", stat: "paid" },
        { type: "Online", name: "Steward", firstname: "Harry", phone: "+91 3534667888", address: "HSR layout bangalore", code: "HM096", total: "300", stat: "paid" },
        { type: "Delivery", name: "Steward", firstname: "Ron", phone: "+91 2348780866", address: "Kothnur bangalore", code: "HM096", total: "300", stat: "paid" },
        { type: "Online", name: "Steward", firstname: "Emma", phone: "+91 8746567325", address: "NElamangala bangalore", code: "HM096", total: "300", stat: "paid" }
    ]);

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

    return (
        <div className='report-main'>
            <table>
                <tr >
                    <th style={mystyle}>Order Type</th>
                    <th style={mystyle}>Hotel Name</th>
                    <th style={mystyle}>Customer Name</th>
                    <th style={mystyle}>Phone No</th>
                    <th style={mystyle}>Address</th>
                    <th style={mystyle}>Coupon Code</th>
                    <th style={mystyle}>Total</th>
                    <th style={mystyle}>Status</th>
                </tr>
                {userList &&
                    userList.map((user,i) => (
                        <tr key={i}>
                            <td style={mystyleone}>{user.type}</td>
                            <td style={mystyleone}>{user.name}</td>
                            <td style={mystyleone}>{user.firstname}</td>
                            <td style={mystyleone}>{user.phone}</td>
                            <td style={mystyleone}>{user.address}</td>
                            <td style={mystyleone}>{user.code}</td>
                            <td style={mystyleone}>{user.total}</td>
                            <td style={mystyleone}>{user.stat}</td>
                        </tr>
                    ))}

            </table>
        </div>
    )
}

export default Reports