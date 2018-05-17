import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './components/App';
import Listing from './components/Listing';
import Details from './components/Details';

export default () => {
    return (
        <App>
            <Router>
                <Switch>
                    <Route exact path="/" component={Listing} />
                    <Route path="/edit/:id" component={Details} />
                </Switch>
            </Router>
        </App>
    )
}