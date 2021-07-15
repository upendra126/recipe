import React from 'react';
import Categoryt1 from "../Components/Turkeyweb/Categoryt1";
import Categoryt2 from "../Components/Turkeyweb/Categoryt2";
import Categoryt3 from "../Components/Turkeyweb/Categoryt3";
import { BrowserRouter as Router,Switch, Route, Redirect } from "react-router-dom";
import Navbar  from "../Components/Navbar";

const Home = () => {
    return (
        <>
        {/* <Navbar />
        <Turkey /> */}

    <Router>
    <Navbar />
    <Switch>
    <Route exact path="/cat1" Components={Categoryt1} />
    <Route exact path="/cat2" Components={Categoryt2} />
    <Route exact path="/cat3" Components={Categoryt3} />
    <Redirect to="/" />
    </Switch>
    <Categoryt1 />
    </Router>
            
        </>
    );
};

export default Home;

