import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import DashBoard from '../components/DashBoardPage';
import Expenses from '../components/AddExpense';
import Edit from '../components/EditPage';
import Help from '../components/HelpPage';
import Error from '../components/ErrorPage';
import Header from '../components/Header';

const AppRouter = ()=>(
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={DashBoard} exact={true} />
                <Route path={`/edit`} component={Edit} exact={true}/>
                <Route path={`/edit/:id`} component={Edit} />
                <Route path="/help" component={Help} />
                <Route path="/create" component={Expenses} />
                <Route component={Error}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;  