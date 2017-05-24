import React, { Component } from "react";
import { string, number, oneOfType, object } from "prop-types";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 3,
    shadowOpacity: 2,
  },
});

export default class Button extends Component {
  static propTypes = {
    title: oneOfType([string, number])
  };

  constructor(props, context) {
    super(props, context);
  }

  static contextTypes = {
    theme: object
  }

  flattenStyles(...styles) {
    return StyleSheet.flatten([...styles]);
  }

  render() {
    return (
      <TouchableOpacity
        style={
          this.flattenStyles(styles.container, {
            backgroundColor: this.context.theme.primaryColor,
            shadowColor: this.context.theme.dividerColor,
          }, this.props.containerStyle && this.props.containerStyle)
        }
      >
        <Text
          style={
            this.flattenStyles({
              color: this.context.theme.primaryTextColor
            }, this.props.containerStyle && this.props.containerStyle)
          }
        >
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}
