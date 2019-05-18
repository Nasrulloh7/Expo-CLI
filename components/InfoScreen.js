import React, { Component } from 'react'
import { Text, View, Button, Image } from 'react-native'
import { styles } from './styles';
import MenuButton from '../menu/MenuButton';

export default class InfoScreen extends Component {
  static navigationOptions = { 
    title : 'Info'
  }

  render() {
    return (
      <View style={styles.containerinfo}>
        <MenuButton navigation={this.props.navigation} />
        
        <View style={{ marginTop: '30%', flexDirection: 'column'}}>
          <View style={{ margin: 30, alignItems: 'center', flexDirection: 'row'}}>
            <Image style={styles.img} source={require('../assets/panca.jpg')} />
            <View style={{flexDirection: 'column', paddingLeft: 30}}>
              <Text> Dea Panca Wardana </Text>
              <Text> 173140714111015 </Text>
              <Text> Kediri </Text>
            </View>
          </View>

          <View style={{ margin: 30, alignItems: 'center', flexDirection: 'row'}}>
            <Image style={styles.img} source={require('../assets/nasrul.jpg')} />
            <View style={{flexDirection: 'column', paddingLeft: 30}}>
              <Text> M. Ilmi Nasrulloh </Text>
              <Text> 173140714111029 </Text>
              <Text> Jember </Text>
            </View>
          </View>

          <View style={{ margin: 30, alignItems: 'center', flexDirection: 'row'}}>
            <Image style={styles.img} source={require('../assets/ivan.jpg')} />
            <View style={{flexDirection: 'column', paddingLeft: 30}}>
              <Text> Muh. Rayhan Ravandika </Text>
              <Text> 173140714111005 </Text>
              <Text> Sidoarjo </Text>
            </View>
          </View>

        </View>
      </View>
    )
  }
}
