import React from "react";

const Content = () => {
	return (
		<div className="container">
			<form>
				<div className="form-group">
					<input
						type="email"
						className="form-control"
						placeholder="Enter email"
					/>
				</div>
				<div className="form-group">
					<input
						type="password"
						className="form-control"
						placeholder="Enter Password"
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Login
				</button>
			</form>
		</div>
	);
};
export default Content;
