import React, { Component} from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { styles } from '../components/styles';

export default class MenuButton extends Component{
    render(){
        return(
            <Ionicons
                name="md-menu"
                color="#2ecc71"
                size={32}
                style={styles.menuIcon}
                onPress={() => this.props.navigation.toggleDrawer()}
            />
        )
    }
}