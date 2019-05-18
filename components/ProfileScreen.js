import React, { Component } from 'react'
import { Text, View, Button, Image, TouchableOpacity, ScrollView, Modal } from 'react-native'
import { ImagePicker, Permissions } from 'expo'
import { styles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome'
import MenuButton from '../menu/MenuButton';

export default class ProfileScreen extends Component {
  static navigationOptions = { 
    title : 'Profile',
    headerStyle: {
      backgroundColor: 'transparent'
    },
    headerTransparent: true,
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }

  state= {
    modalVisible: false,
    hasCameraPermission: null,
    hasCameraRollPermission: null,
    image: 'http://bit.ly/gbr-expo-cli',
    userInfo: {
      name: 'Expo CLI',
      desc: 'K-Mobile Terapan',
      email: 'mobile_terapan@admin.com',
      phone: '+62 893223',
    },
  };

  constructor(props){
    super(props);
  }

  setModalVisible(visible){
    this.setState({modalVisible: visible});
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
      <View style={styles.containerpage}>
        <ScrollView style={{backgroundColor: '#fff', flex:1, width: '100%',}}>
        <MenuButton navigation={this.props.navigation} />
          <View style={styles.userProfileImageView}>
            <Image style={styles.userProfileBackgroundImage} source={require('../assets/wallpaper.jpg')}></Image>

            <View style={styles.custom}>
              <TouchableOpacity onPress={this._pickImage}>
                <Image style={styles.userProfileImage} source={{ uri: this.state.image }} ></Image>
              </TouchableOpacity>

              <View style={styles.userProfileInfo}>
                <Text numberOfLines={1} style={styles.userProfileName}> {this.state.userInfo.name} </Text>
                <Text numberOfLines={2} style={styles.userProfileType}> {this.state.userInfo.desc} </Text>
              </View>

            </View>
          </View>

          <View style={{marginTop:330, flex:1, flexDirection: 'row'}}>
            <View style={{flex:1}}>
              <Text style={styles.userContacts}> Phone : {this.state.userInfo.phone} </Text>
              <Text style={styles.userContacts}> Email : {this.state.userInfo.email} </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}
