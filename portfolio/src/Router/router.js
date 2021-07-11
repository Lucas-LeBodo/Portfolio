// import
import React, {Fragment} from 'react';
import { HashRouter, Route, Switch} from "react-router-dom";

// import page
import Home from '../Pages/home';


// Router

const AppRouter = () => {
    return (
        <HashRouter>
            <Fragment>
                <Switch>
                    <Route path="/" component={Home} exact={true} />
                </Switch>
            </Fragment>
        </HashRouter>
    );
};

export default AppRouter;