import { Switch, Route, Redirect } from "react-router-dom";
import { Home, Games } from "../views";

function Routes() {
    
    return (
        <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/games" component={Games} />
            <Redirect from='*' to='/home' />
        </Switch>
    )
}

export default Routes;