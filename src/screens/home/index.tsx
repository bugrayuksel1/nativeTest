import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Home = ({navigation}: any): React.JSX.Element => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home</Text>
      <Button
        title="Yaptığım uygulamalar"
        onPress={() => navigation.navigate('Education')}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
