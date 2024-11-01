import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import ThemeContext from '../../Context/ThemeContext';

const Settings = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <View>
      <Text>Active Theme: {theme}</Text>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
