import React, { Component } from "react";

import Header from "./Header";

class Root extends Component {
	render() {
		return (
			<div>
				<Header />
				<div className="jumbotron">
					<div className="container">
						<div className="row">
							<div className="col-md-6" />
							{this.props.children}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Root;
