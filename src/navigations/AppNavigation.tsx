import React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import Search from '../screens/Search';

const Stack = createStackNavigator();
const AppNavigation = () => {
  return (
    <View style={{flex: 1}}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </View>
  );
};

export default AppNavigation;
