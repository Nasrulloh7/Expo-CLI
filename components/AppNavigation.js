import React from 'react'
import { Platform, Dimensions } from 'react-native'
import { createSwitchNavigator, createStackNavigator, createAppContainer, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation';
import Ionicon from 'react-native-vector-icons/Ionicons';

import AuthLoading from "../components/AuthLoading";
import LoginScreen from "../components/LoginScreen";
import HomeScreen from "../components/HomeScreen";

import InfoScreen from '../components/InfoScreen'
import ContactScreen from '../components/ContactScreen'

import ProfileScreen from '../components/ProfileScreen'
import TodosScreen from '../components/TodosScreen'
import MapScreen from '../components/MapScreen';

import OtherScreen from "../components/OtherScreen";
import TodoSQLite from "../components/TodoSQLite";

import MenuDrawer from '../menu/MenuDrawer';

const WIDTH = Dimensions.get('window').width;
const DrawerConfig = {
    drawerWidth: WIDTH * 0.5,
    contentComponent: ({ navigation }) => {
        return (<MenuDrawer navigation={navigation} />)
    }
}

const AuthStack = createStackNavigator({ SignIn: LoginScreen }, { headerMode: 'none' });
const BottomNav = createBottomTabNavigator({
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

const DrawerNav = createDrawerNavigator(
  {
    Home: {
        screen: BottomNav,      
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

const AppStack = createStackNavigator(
{    
    AppNav: {
        screen: DrawerNav,
        navigationOptions: {
            header: null,
        }
    }
});

export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoading,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
));