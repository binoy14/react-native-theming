import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, ThemeProvider } from "./components/";

const theme = {
  primaryColorDark: '#E64A19',
  primaryColor: '#FF5722',
  primaryColorLight: '#FFCCBC',
  primaryColorText: '#FFFFFF',
  accentColor: '#009688',
  primaryTextColor: '#212121',
  secondaryTextColor: '#757575',
  dividerColor: '#BDBDBD',
};

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <View style={{height: 40}} />
        <Button
          title="Press Me!"
          containerStyle={{ borderRadius: 40 }}
        />
        <View style={{height: 10}} />
        <Button
          title="Press Me!"
        />
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
