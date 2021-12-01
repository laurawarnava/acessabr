import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import { LocationContext } from "../contexts/LocationContext";
import { useState } from "react";
import Header from "../components/Header";
import Home from "../pages/Home";

const CONFIG = {
    city: "Porto Alegre",
    state: "RS"
}


const Routes = props => {
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    return (
        <LocationContext.Provider value={{city, setCity, state, setState}}>
            <Header />
                <Switch>
                    <Route path="/:state/:city" element={<Home />} />
                </Switch>
        </LocationContext.Provider>
    )
}

export default Routes;