import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../src/screens/LoginScreen';
import SignUpScreen from '../src/screens/SignUpScreen';
import ForgotPassword from '../src/screens/ForgotPassword';
import HomeTabs from './HomeTabs';
import SitesScreen from '../src/screens/SitesScreen';


const Stack = createStackNavigator();



function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" 
      screenOptions={{ headerShown: false, animation: "fade_from_bottom" }}
      // screenOptions={({ route }) => ({
      //   headerShown: route.name === 'HomeTabs' ? true : false,
      //   animation: "fade_from_bottom",
      //   headerTitle: route.name === 'HomeTabs' ? 'Home' : route.name,  
      // })}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Sites" component={SitesScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
