import { BrowserRouter as Router, Route } from "react-router-dom";

import React from "react";
import Root from "./Root";
import Content from "./Content";
import Home from "./Home";
const AppRouter = () => {
	return (
		<Router>
			<React.Fragment>
				<Root>
					<div>
						<Route exact path="/" component={Home} />
						<Route path="/login" component={Content} />
						<Route path="/home" component={Home} />
					</div>
				</Root>
			</React.Fragment>
		</Router>
	);
};
export default AppRouter;
