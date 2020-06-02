import React from 'react';
import {NavLink} from 'react-router-dom';


const Header = ()=>( 
    <header>
        <h1>Expensify</h1>

            <NavLink to="/" activeclassname="is-active" exact={true}>Visit DashBoard</NavLink>
            <NavLink to="/create" activeclassname="is-active">Back to Create</NavLink>
            <NavLink to="/help" activeclassname="is-active">Back to Help</NavLink>
    </header>
);
export default Header;