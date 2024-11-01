import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import ThemeContext from '../../Context/ThemeContext';

const Settings = () => {
  const {theme, setTheme} = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Text>Active Theme: {theme}</Text>
      <Button
        title="Toggle Theme"
        onPress={() => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))}
      />
      <Button
        title="Toggle Language"
        onPress={() => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))}
      />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});
