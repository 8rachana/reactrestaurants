import React, { useState } from 'react'
import './cssfiles/Sidebar.css';
import Header from './Header';
import { HiOutlineMenu } from 'react-icons/hi';
import Dashboard from './Dashboard';
import Orders from './Orders';
import Reports from './Reports';

const Sidebar = (props) => {
    const [name, setname] = useState('Dashboard')
    const [sidebar, setsidebar] = useState([
        "Dashboard", "Orders", "Reports"
    ]);
    const [hambergur, sethambergur] = useState(false)
    const handlemobile = () => {
        if (!hambergur) {
            sethambergur(true)
        }
        else {
            sethambergur(false)
        }
    }




    return (

        <>
            <div className='sdbar-main'>
                <div>
                    <h1 style={{ fontFamily: 'Brush Script MT, Brush Script Std, cursive', color: 'green' }}>Hellow Cart</h1>
                </div>
                <div className='sdbar-cnt'>

                    {sidebar &&
                        sidebar.map((item, i) => (
                            <ul key={i}>
                                <li className='sdbar-one' onClick={() => setname(sidebar[i])}>{item}</li>
                            </ul>
                        ))}

                </div>
            </div>
            <Header selectedname={name} />
            {name == "Dashboard" ?
                <Dashboard />
                : name == "Orders" ?
                    <Orders />
                    : name == "Reports" ? <Reports /> : ''
            }
            <div className='sdbar-mbl'>
                <p onClick={handlemobile}><HiOutlineMenu style={{ fontSize: "32px" }} /></p>
            </div>
            {hambergur && hambergur ?
                <div className='llist'>
                    {sidebar &&
                        sidebar.map((item, i) => (
                            <ul style={{ padding: '20px', margin: '0' }} key={i}>
                                <li className='sdbar-one' onClick={() => { setname(sidebar[i]); sethambergur(false) }} >{item}</li>
                            </ul>
                        ))}
                </div>
                : ''}
        </>
    )
}

export default Sidebar