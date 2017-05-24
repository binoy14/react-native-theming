import React from 'react';
import { Text, View } from 'react-native';
import { Button, ThemeProvider } from "./components/";

const theme = {
  primaryColor: '#FF5722',
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
