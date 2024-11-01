import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import ThemeContext from '../../Context/ThemeContext';
import LangContext from '../../Context/LangContect';
const Home = ({navigation}: any): React.JSX.Element => {
  const {theme, setTheme} = useContext(ThemeContext);
  const {lang, setLang} = useContext(LangContext);
  return (
    <View style={styles.container}>
      <Button
        title="Toggle Theme"
        onPress={() => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))}
      />
      <Button
        title="Toggle Language"
        onPress={() => setLang(prev => (prev === 'tr-TR' ? 'en-US' : 'tr-TR'))}
      />
      <Text>Active Theme: {theme}</Text>
      <Text>Active Language: {lang}</Text>

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
