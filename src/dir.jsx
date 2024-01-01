import { Route, HashRouter, Switch } from "react-router-dom"
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import Product from "./pages/Product";
import Favorite from "./pages/Favorite";

class Dir extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/Product" component={Product} />
                    <Route exact path="/Wishlist" component={Favorite} />
                    <Route path="/" component={Home} />
                </Switch>
            </HashRouter>
        )
    }
}
export default Dir