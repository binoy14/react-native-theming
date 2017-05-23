import React, { Component } from "react";
import { string, number, oneOfType } from "prop-types";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const defaultTheme = {
	theme: {
		primary: 'teal',
		text: '#777',
	}
};

export default class Button extends Component {
	static propTypes = {
		title: oneOfType([string, number])
	};

	static defaultProps = defaultTheme;

	constructor(props) {
		super(props);

		this.props.theme = Object.assign({}, defaultTheme.theme, this.props.theme);
	}
	
	styles = StyleSheet.create({
		container: {
			backgroundColor: this.props.theme.primary,
			padding: 20,
			borderRadius: 10,
		},
		text: {
			color: this.props.theme.text,
		},
	});

	render() {
		console.log(this.props.theme);
		return (
			<TouchableOpacity style={[this.styles.container, this.props.containerStyle && this.props.containerStyle]}>
				<Text style={this.styles.text}>{this.props.title}</Text>
			</TouchableOpacity>
		);
	}
}