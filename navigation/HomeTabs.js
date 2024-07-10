import * as React from 'react';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../src/screens/HomeScreen';
import AreasScreen from '../src/screens/AreasScreen';
import SitesScreen from '../src/screens/SitesScreen';
import SiteDetailScreen from '../src/screens/SiteDetailsScreen';
import Profile from '../src/screens/Profile';
import ChangePassword from '../src/screens/ChangePassword';
import MyCards from '../src/screens/MyCards';
import AddCard from '../src/screens/AddCard';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Protected Areas') {
            iconName = 'map';
          } else if (route.name === 'My Profile') {
            iconName = 'person';
          }

          return <Icon name={iconName} type="material" color={color} size={50} />;
        },
        tabBarActiveTintColor: '#0070c4',
        tabBarInactiveTintColor: 'gray',
        tabBarLabel: () => null,
        headerTitle: route.name,
        // headerShown: route.name === 'Home' ? 'Home' : null,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#0070c4',
          fontWeight: 'bold',
          fontSize: 24,
          marginTop: 10,
        },
        // headerBackTitleVisible: false,
        // headerBackImage: () => (
        //   <Icon name='arrow-back' type='material' color='#0070c4' size={40} style={{ marginLeft: 10 }} />
        // ),
      })}
    >
      <Tab.Screen name="My Profile" component={ProfileStack} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Protected Areas" component={AreasStack} />
    </Tab.Navigator>
  );
}

function AreasStack() {
  return (
    //   <Stack.Navigator
    //   screenOptions={{
    //     headerTitleAlign: 'center',
    //     headerTitleStyle: {
    //       color: '#0070c4',
    //       fontWeight: 'bold',
    //       fontSize: 24,
    //       marginTop: 10,
    //     },
    //     headerBackTitleVisible: false,
    //     headerBackImage: () => (
    //       <Icon name='arrow-back' type='material' color='#0070c4' size={40} style={{ marginLeft: 10 }} />
    //     ),
    //   }}
    // >
    <Stack.Navigator>
      <Stack.Screen
        name="AreasMain"
        component={AreasScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Sites"
        component={SitesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SiteDetails"
        component={SiteDetailScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}


function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileMain"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Change Password"
        component={ChangePassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="My Cards"
        component={MyCards}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Add Card"
        component={AddCard}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default HomeTabs;