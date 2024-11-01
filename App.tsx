// App.js
import React from 'react';
import {StyleSheet} from 'react-native';
import {ThemeContextProvider} from './src/Context/ThemeContext';
import Router from './src/Router';
import {LangContextProvider} from './src/Context/LangContect';

function App(): React.JSX.Element {
  return (
    <LangContextProvider>
      <ThemeContextProvider>
        <Router />
      </ThemeContextProvider>
    </LangContextProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
