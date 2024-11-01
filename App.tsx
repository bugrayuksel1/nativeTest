// App.js
import React from 'react';
import {StyleSheet} from 'react-native';
import {ThemeContextProvider} from './src/Context/ThemeContext';
import Router from './src/Router';

function App(): React.JSX.Element {
  return (
    <ThemeContextProvider>
      <Router />
    </ThemeContextProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
