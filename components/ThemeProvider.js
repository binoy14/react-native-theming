import React, { Component } from "react";
import { View } from "react-native";

const defaultTheme = {
  primaryColorDark: '#1976D2',
  primaryColor: '#2196F3',
  primaryColorLight: '#BBDEFB',
  primaryColorText: '#FFFFFF',
  accentColor: '#FF5252',
  primaryTextColor: '#212121',
  secondaryTextColor: '#757575',
  dividerColor: '#BDBDBD',
};

export default class ThemeProvider extends Component {
  getChildContext() {
    if (this.props.hasOwnProperty('theme')) {
      const newTheme = {...defaultTheme, ...this.props.theme};
      return {
        theme: newTheme,
      };
    } else {
      return {
        theme: defaultTheme,
      };
    }
  }

  static childContextTypes = {
    theme: React.PropTypes.object
  }

  render() {
    const { children } = this.props;
    const count = React.Children.count(children);
    if (count === 1) {
      return React.Children.only(children);
    } else {
      return (
        <View>
          {children}
        </View>
      );
    }

    return null;
  }
}
