import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import AppRoute from './Routes/appRoute';
// import Home from "./Components/Home";

// import Categoryt1 from "./Components/Turkeyweb/Categoryt1";
// import Categoryt2 from "./Components/Turkeyweb/Categoryt2";
// import Categoryt3 from "./Components/Turkeyweb/Categoryt3";
// import { BrowserRouter as Router,Switch, Route, Redirect } from "react-router-dom";
// import Navbar  from "./Components/Navbar";




const App = () => {
  return (
    <>
    

       <AppRoute></AppRoute>
    
    {/* <Router>
    <Navbar />
    <Switch>
     <Route exact path="/home" components={Home} />
    <Route exact path="/cat1" component={Categoryt1} />
    <Route exact path="/cat2" component={Categoryt2} />
    <Route exact path="/cat3" component={Categoryt3} />
    <Redirect to="/" />
    </Switch>
    </Router> */}

    </>
  );
}

export default App;
