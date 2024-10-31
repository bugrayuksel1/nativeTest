import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';

const UserDetail = ({route, navigation}) => {
  const data = route.params;
  console.log('data', data);

  return (
    <View>
      <Text style={styles.text}>UserDetail</Text>
      <Text style={styles.text}>{JSON.stringify(data, null, 2)}</Text>
      <Button
        title="title güncelle"
        onPress={() => navigation.setOptions({title: 'güncellendi.'})}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 24,
  },
});
export default UserDetail;
