import React from 'react'
import { Routes, Route, Router } from 'react-router';
import Dashboard from './Dashboard';
import Orders from './Orders';
import Reports from './Reports';

function Routers() {
    return (
        <div>
            <Router>
                <Route exact path='/'> < Dashboard /></Route>
                <Route exact path='/Orders' element={< Orders />}></Route>
                <Route exact path='/Reports' element={< Reports />}></Route>
            </Router>
        </div>
    )
}

export default Routers