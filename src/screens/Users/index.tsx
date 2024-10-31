import {View, Text, Button, FlatList} from 'react-native';
import React from 'react';
import Item from './item';

const data = [
  {
    id: 1,
    name: 'oğuzhan',
  },
  {
    id: 2,
    name: 'buğra',
  },
  {
    id: 3,
    name: 'yüksel',
  },
];

const Users = ({navigation}: any): React.JSX.Element => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Anasayafaya Dön"
        onPress={() => navigation.navigate('Home')}
      />
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Item item={item} />}
      />
    </View>
  );
};

export default Users;
