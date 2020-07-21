import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => ( 
    <header>
        <h1>Expensify</h1>
        <NavLink to="/dashboard" activeclassname="is-active">DashBoard</NavLink>
        <NavLink to="/create" activeclassname="is-active">Create Expense</NavLink>
        <button onClick={startLogout}>Logout</button>
    </header>
);

const mapDispatchToProps = dispatch => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);