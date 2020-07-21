import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => (
    <div>
        <Route {...rest} component={(props) => (
            <div>
                {
                    isAuthenticated ?
                        
                        <div>
                            <Redirect to={"/dashboard"} />
                        </div>
                    :
                        <div>
                            <Component {...props} />
                        </div>
                }
            </div>
        )} />
    </div>
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);