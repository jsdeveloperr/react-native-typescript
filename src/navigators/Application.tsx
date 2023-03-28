/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { Startup } from '../screens';
import { useTheme } from '../hooks';
import MainNavigator from './Main';
import { useFlipper } from '@react-navigation/devtools';
import { ApplicationStackParamList } from '../../@types/navigation';
import { DrawerContent } from '../navigators/DrawerContent';
import { FeedStack } from './Stack';

const Stack = createStackNavigator<ApplicationStackParamList>();
const Drawer = createDrawerNavigator();

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme();
  const { colors } = NavigationTheme;

  const navigationRef = useNavigationContainerRef();

  useFlipper(navigationRef);

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="Home" component={FeedStack} />
        </Drawer.Navigator>
        {/* <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Startup" component={Startup} />
          <Stack.Screen name="Main" component={MainNavigator} />
        </Stack.Navigator> */}
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default ApplicationNavigator;
