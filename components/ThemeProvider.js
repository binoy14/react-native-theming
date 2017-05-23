import React, { Component } from "react";

export default class ThemeProvider extends Component {
	render() {
		const { theme, children } = this.props;
		const Component = React.cloneElement(children, { theme });
		return (
			Component
		);
	}
}