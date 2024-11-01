import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import ThemeContext from '../../Context/ThemeContext';

const Home = ({navigation}: any): React.JSX.Element => {
  const {theme, setTheme} = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Button
        title="Toggle Theme"
        onPress={() => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))}
      />
      <Text>Active Theme: {theme}</Text>
      <Button
        title="Yaptığım uygulamalar"
        onPress={() => navigation.navigate('Education')}
      />

      <Button title="Ayarlar" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});
