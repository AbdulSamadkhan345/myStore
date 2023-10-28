import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './Screens/Splash';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Home from './Screens/Home';
import MyAddress from './Screens/MyAddress';
import AddAddress from './Screens/AddAddress';
import CheckOut from './Screens/CheckOut';
import OrderSucess from './OrderSucess';
import Orders from './Screens/Orders';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="myStore"
          component={Splash}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen
        options={{headerShown: false}}
        name="Signup"
        component={Signup}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="MyAddress"
        component={MyAddress}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="AddAddress"
        component={AddAddress}
      />
      <Stack.Screen
      options={{headerShown: false}}
      name="CheckOut"
      component={CheckOut}
    />
    <Stack.Screen
      options={{headerShown: false}}
      name="OrderSucess"
      component={OrderSucess}
    />
    <Stack.Screen
      options={{headerShown: false}}
      name="Orders"
      component={Orders}
    />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
