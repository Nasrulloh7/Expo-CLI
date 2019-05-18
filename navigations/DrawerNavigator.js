import React, { Component } from 'react'
import { Platform, Dimensions } from 'react-native'
import { createDrawerNavigator, createAppContainer, createBottomTabNavigator, createStackNavigator} from "react-navigation"
import Ionicon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../components/HomeScreen'
import InfoScreen from '../components/InfoScreen'
import ContactScreen from '../components/ContactScreen'

import ProfileScreen from '../components/ProfileScreen'
import TodosScreen from '../components/TodosScreen'
import MapScreen from '../components/MapScreen';

import MenuDrawer from '../menu/MenuDrawer';

const WIDTH = Dimensions.get('window').width;
const DrawerConfig = {
    drawerWidth: WIDTH * 0.5,
    contentComponent: ({ navigation }) => {
        return (<MenuDrawer navigation={navigation} />)
    }
}

const Tabs = createBottomTabNavigator({
    Home: HomeScreen,
    Info: InfoScreen,
    Contact: ContactScreen,

}, {
    defaultNavigationOptions:({navigation})=>({
        tabBarIcon:({focused, horizontal, tintcolor})=>{
          const {routeName} = navigation.state;
          if(routeName === 'Home'){
            return <Ionicon name="ios-home" size={25} color="#fff" />
    
          }else if (routeName === 'Info'){
            return <Ionicon name="ios-information-circle" size={25} color="#fff" />
    
          }else if (routeName === 'Contact'){
            return <Ionicon name="ios-person" size={25} color="#fff" />

          }
        }
    }),

    tabBarOptions: {
        activeTintColor: '#fff',
        inactiveTintColor: '#000',
        style: {
            backgroundColor: '#2ecc71',
        },
        indicatorStyle: {
            backgroundColor: '#000',
        },
    }
});

const DrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: Tabs
        },
        Profile: {
            screen: ProfileScreen
        },
        Todos: {
            screen: TodosScreen
        },
        Map: {
            screen: MapScreen
        },
    },
    DrawerConfig
);

const StackNavigator = createStackNavigator({
    DrawerNavigator: {
        screen: DrawerNavigator,
        navigationOptions: {
            header: null,
        }
    }
});

export default createAppContainer(StackNavigator);