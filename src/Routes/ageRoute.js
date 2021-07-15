import React from "react"
import { Route, Redirect } from 'react-router-dom';


const AgeRoute = ({ path, Components }) => {

    var dob = localStorage.getItem('dob')
    var age = localStorage.getItem('isValidAge') || false
    if (!dob) {
        age = false
    }
    const [isValidAge, setIsValidAge] = React.useState(
        age
    );
    if (isValidAge) {
        return (<Route path={path} Components={Components} />)
    }
    else {
        sessionStorage.setItem('validAgeNext', { path });
        return (<Redirect to={{ pathname: '/AgeCheck' }} />);
    }
}

export default  AgeRoute
