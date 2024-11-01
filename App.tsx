/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Home from './src/screens/home';
import Users from './src/screens/Users';
import UserDetail from './src/screens/UserDetail';
import Form from './src/components/form';
import FormWithFormik from './src/components/FormWithFormik';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'orange',
          },
          headerTintColor: 'white',
          headerTitleStyle: {fontWeight: 'bold'},
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Anasayfa',
          }}
        />
        <Stack.Screen
          name="Users"
          component={Users}
          options={{
            title: 'Users',
          }}
        />
        <Stack.Screen
          name="UserDetail"
          component={UserDetail}
          options={({route}) => ({title: route.params.name})}
        />
        <Stack.Screen
          name="Form"
          component={Form}
          options={({route}) => ({title: 'Form'})}
        />
        <Stack.Screen
          name="FormWithFormik"
          component={FormWithFormik}
          options={({route}) => ({title: 'Formik'})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
