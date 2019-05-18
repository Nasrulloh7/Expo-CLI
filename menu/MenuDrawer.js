import React, { Component } from 'react'
import { View, Text, Image, Platform, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import { ImagePicker, Permissions } from 'expo'
import firebase from "firebase";
import { styles } from '../components/styles';

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

export default class MenuDrawer extends Component {
  constructor(){
    super();
    this.state = {
      hasCameraPermission: null,
      hasCameraRollPermission: null,
      image: 'http://bit.ly/gbr-expo-cli'
    }
  }

    navLink(nav, text) {
        return(
            <TouchableOpacity style={{height: 50}} onPress={() => this.props.navigation.navigate(nav)}>
                <Text style={styles.link}> {text} </Text>
            </TouchableOpacity>
        )
    }

    async componentWillMount() {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      this.setState({ hasCameraPermission: status === 'granted' });
      const { statusCameraRoll } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      this.setState({ hasCameraRollPermission: statusCameraRoll === 'granted' });
  }

    _pickImage = async() => {
      // let result = await ImagePicker.launchCameraAsync({
      let result = await ImagePicker.launchImageLibraryAsync({
        allowEditing: true,
        aspect: [1, 1],
      })
      if(!result.cancelled){
        this.setState({ image: result.uri });
      }
    }
  render() {
    return (
      <View style={styles.containermenu}>
          <View style={styles.topLink}>
            <View style={styles.profile}>
              <TouchableOpacity style={styles.imgView} onPress={this._pickImage}>
                <Image style={styles.img} source={{ uri: this.state.image }} />
              </TouchableOpacity>
              <View style={styles.profiletext}>
                <Text style={styles.name}> Expo CLI </Text>
              </View>
            </View>
          </View>
          <ScrollView style={styles.scroller}>
            <View style={styles.bottomLink}>
              {this.navLink('Home', 'Home')}
              {this.navLink('Profile', 'Profile')}
              {this.navLink('Todos', 'Todos')}
              {this.navLink('Map', 'Map')}
            </View>
          </ScrollView>
          <View style={styles.footer}>
            <TouchableOpacity style={styles.description} onPress={this._signOutAsync}>
              <Text style={{color:'#fff', fontWeight: 'bold'}}> LOGOUT </Text>
            </TouchableOpacity>
            <Text style={styles.version}> v1.0</Text>
          </View>
      </View>
    )
  }

  _signOutAsync= () => {
    firebase.auth().signOut().then(function () {
        this.props.navigation.navigate('Auth');
    }).catch(function (error) {
        console.log(error)
    });
  };
}
