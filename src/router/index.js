import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import PortoAlegre from '../pages/PortoAlegre';
import Florianopolis from '../pages/PortoAlegre';

const CONFIG = {
    city: "Porto Alegre",
    state: "RS"
  }
  

const Routes = props => {
    return(
        <Router>
            <Switch>
                {/*<Route path="/:state/:city" element={<Home />} />*/}
                <Route path="/rs/porto-alegre" element={<PortoAlegre city= {props.city} />} />
                <Route path="/sc/florianopolis" element={<Florianopolis city= {props.city} />} />
            </Switch>
        </Router>
    )
}

export default Routes;