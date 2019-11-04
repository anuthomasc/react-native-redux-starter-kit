/**
 * Application top level navigator component
 * Keeps two stacks of screen for authentication and application navigation flow.
 * Two stack navigators are combined with the help of a switch navigator
 */

import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { Animated, Easing } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SplashScreenUI from '../modules/splash/container/splashScreen';
import Login from '../modules/login/container/LoginScreen';
import HomeScreen from '../modules/home/container/HomeScreen';
import DetailsScreen from '../modules/details/container/DetailsScreen';
import { Colors } from '../helpers/colors';
import { responsiveWidth } from "../helpers/responsive";

const defaultNavigationOptions = {
  headerStyle: {
    elevation: 4,
    shadowOpacity: 0.6,
    shadowOffset: {
      height: 0.2,
    },
    shadowRadius: 2,
    backgroundColor: Colors.THEME_COLOR,
  },
  headerBackImage: (
    <Ionicons name='ios-arrow-back' 
    size={responsiveWidth(6)} 
    color={Colors.WHITE} 
    style={{ padding: responsiveWidth(2.5) }} />
  ),
  headerTitleStyle: {
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: '400',
    color: Colors.WHITE
  },
  gesturesEnabled: false,
},

  transitionConfig = () =>
    ({
      transitionSpec: {
        duration: 400,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
        useNativeDriver: true
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;
        const height = layout.initHeight;
        const translateX = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        });
        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });
        return { opacity, transform: [{ translateX }] };
      },
    });

const AuthStack = createStackNavigator({
  Login: { screen: Login }
}, {
    headerMode: 'float',
    mode: 'modal',
    defaultNavigationOptions: defaultNavigationOptions,
    transitionConfig: transitionConfig
  });

const Appstack = createStackNavigator({
  Home: { screen: HomeScreen },
  DetailsScreen: { screen: DetailsScreen }
},
  {
    headerMode: 'float',
    mode: 'modal',
    defaultNavigationOptions: defaultNavigationOptions,
    transitionConfig: transitionConfig
  });

const AppNavigator = createSwitchNavigator({
  SplashScreen: { screen: SplashScreenUI },
  Authentication: { screen: AuthStack },
  Application: { screen: Appstack },
},
  {
    initialRouteName: 'SplashScreen'
  });

export default createAppContainer(AppNavigator);