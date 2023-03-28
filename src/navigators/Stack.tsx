import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainNavigator from './Main';

const Stack = createStackNavigator<any>();

export const FeedStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={MainNavigator} />
    </Stack.Navigator>
  );
};
