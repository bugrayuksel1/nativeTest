import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ActivityIndicator, Button} from 'react-native';

function User({navigation}: any): React.JSX.Element {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getAlbumsData = async () => {
      const albumsData = await axios
        .get('https://jsonplaceholder.typicode.com/albums')
        .then(response => {
          setTimeout(() => {
            setAlbums(response.data);
            setLoading(false);
          }, 1000);
        })
        .catch(error => {
          console.log(error);
          setLoading(false);
        });
      setAlbums(albumsData?.data);
    };
    getAlbumsData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {/* {albums.map(item => {
        return <Text>{item.title}</Text>;
      })} */}
      <Button
        title="Education Gör"
        onPress={() => navigation.navigate('Education')}
      />
      <Button
        title="Kullanıcıları Gör"
        onPress={() => navigation.navigate('Users')}
      />
      <Button title="Formu Gör" onPress={() => navigation.navigate('Form')} />
      <Button
        title="Formik Gör"
        onPress={() => navigation.navigate('FormWithFormik')}
      />
      <Button
        title="NativeBase Gör"
        onPress={() => navigation.navigate('Nativebase')}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default User;
