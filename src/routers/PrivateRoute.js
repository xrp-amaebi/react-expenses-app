import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

export const PrivateRoute = ({ isAuthenticated, component:Component, ...rest }) => (
    <div>
        <Route {...rest} component={(props) => (
            <div>
                { 
                    isAuthenticated ?
                        <div>
                            <Header />
                            <Component {...props} />
                        </div>
                    :
                        <div>
                            <Redirect to={"/"} />
                        </div> 
                }
            </div>
        )} />
    </div>
);

const mapStateToProps = (state) => {
    console.log(state);
    return {
        isAuthenticated: !!state.auth.uid
    };
};

export default connect(mapStateToProps)(PrivateRoute);