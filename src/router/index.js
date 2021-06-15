import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Splash, Contact, About, IndonesiaCase} from '../pages';
import {BottomNavigator} from '../components/';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Hotline" component={Contact} />
      <Tab.Screen name="Setting" component={About} />
    </Tab.Navigator>
  );
};
const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="IndonesiaCase"
        component={IndonesiaCase}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default Router;
