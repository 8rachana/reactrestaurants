import React, { useState, useEffect } from 'react'
import { FaUserCircle } from 'react-icons/fa';
import './cssfiles/Header.css';

const Header = (props) => {
    return (
        <div className='hdr-main'>
            <h4 className='hdr-ttl' >{props.selectedname}</h4>
            <div className='hdr-one'>
                <FaUserCircle className='icon' />
                <p>Vendor name</p>
            </div>
        </div>
    )
}

export default Header