import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

import "assets/scss/material-kit-pro-react.scss?v=1.8.0";

// pages for this product
import EcommercePage from "views/EcommercePage/EcommercePage.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import Ameneties from "views/AboutUsPage/AboutUsPage.js";
import ProductPage from "views/ProductPage/ProductPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
	<Router history={hist}>
		<Switch>
			<Route exact path="/" component={LandingPage} />
			<Route exact path="/ameneties" component={Ameneties} />
			<Route path="/units" component={EcommercePage} />
			<Route path="/unit/:id" component={ProductPage} />
		</Switch>
	</Router>,
	document.getElementById("root")
);
