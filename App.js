import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, ThemeProvider } from "./components/";

const theme = {
  primary: 'blue'
};

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ThemeProvider theme={theme}>
          <Button
            title="Press Me!"
            containerStyle={{ borderRadius: 40 }}
          />
        </ThemeProvider>
      </View>
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
