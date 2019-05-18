import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import AppNavigation from './components/AppNavigation';

export default class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: "AIzaSyB8zn4jnPbS3rSAJavBFOcjfZ8LN4J922Y",
    authDomain: "expo-tutorial-e8fad.firebaseapp.com",
    databaseURL: "https://expo-tutorial-e8fad.firebaseio.com",
    projectId: "expo-tutorial-e8fad",
    storageBucket: "expo-tutorial-e8fad.appspot.com",
    messagingSenderId: "103090830551"

    });
  }
  render() {
    return (
      <AppNavigation />
    );
  }
}