// AppNavigator.js
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base';
//screens
import Home from './screens/home';
import Users from './screens/Users';
import UserDetail from './screens/UserDetail';
import FormWithFormik from './components/FormWithFormik';
import NativeBase from './components/nativebase';
import Education from './screens/home/education';
import Settings from './screens/Settings/settings';
import Form from './components/form';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NativeBaseProvider>
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
            options={{title: 'Form'}}
          />
          <Stack.Screen
            name="FormWithFormik"
            component={FormWithFormik}
            options={{title: 'Formik'}}
          />
          <Stack.Screen
            name="NativeBase"
            component={NativeBase}
            options={{title: 'Nativebase'}}
          />
          <Stack.Screen
            name="Education"
            component={Education}
            options={{title: 'Education'}}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{title: 'Settings'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default Router;
