import React,{ Component } from "react"
import { BrowserRouter, Switch, Route, Redirect, } from "react-router-dom"
//import Home from "../Components/Home";
import Categoryt1 from "../Components/Turkeyweb/Categoryt1";
import Categoryt2 from "../Components/Turkeyweb/Categoryt2";
import Categoryt3 from "../Components/Turkeyweb/Categoryt3";
import AgeRoute from "./ageRoute";
import AgeCheck from "../Components/AgeCheck";
import {useState,useEffect} from 'react';



 function AppRoute() {

    const [details, setDetails] = useState(null);
    
    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572')
        .then(response => response.json())
        .then(data => setDetails(data.country_code));
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    console.log(details);

    return (
        
        
        <BrowserRouter>
            <Switch>
             {/* <AgeRoute exact path="/" Components={Home} /> */}
                 <AgeRoute exact={true} path="/cat1" Components={Categoryt1} />
                <AgeRoute path="/cat2" Components={Categoryt2} />
                <AgeRoute path="/cat3" Components={Categoryt3} />
                <Route path="/AgeCheck">
                    <AgeCheck></AgeCheck>
                </Route>
                 <Redirect from="*" to="/AgeCheck" />
            </Switch>
        </BrowserRouter>
        
    );
}

export default AppRoute