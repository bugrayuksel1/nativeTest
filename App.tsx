// App.js
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import ThemeContext from './src/Context/ThemeContext';
import Router from './src/Router';

function App(): React.JSX.Element {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <Router />
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
