import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { DashBoard } from '../components/DashBoardPage';
import Expenses from '../components/AddExpense';
import Edit from '../components/EditPage';
import { HelpPage } from '../components/HelpPage';
import { ErrorPage } from '../components/ErrorPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={DashBoard} />
                {/* <PrivateRoute path={`/edit`} component={Edit} exact={true}/> */}
                <PrivateRoute path={`/edit/:id`} component={Edit} />
                <PrivateRoute path="/create" component={Expenses} />
                <Route path="/help" component={HelpPage} />
                <Route component={ErrorPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;