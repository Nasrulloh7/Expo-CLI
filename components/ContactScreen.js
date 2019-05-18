import React, { Component } from 'react'
import { KeyboardAvoidingView,TextInput,View,Button,FlatList,Text } from 'react-native'

import { SQLite } from "expo";
import MenuButton from '../menu/MenuButton';
import { styles } from './styles';

const db = SQLite.openDatabase('db.db');

export default class ContactScreen extends Component {
  static navigationOptions = {
    title: 'Contact'
}
constructor(props) {
    super(props)
    
    this.state = {
        title:'' ,
        todos:[]    
    };
    
};
componentDidMount() {
    db.transaction(tx =>{
        tx.executeSql(
            'create table todos (id integer primary key not null, title text, complete int)'
        )
    })
    this._getData()

}


render() {
    return (
        <KeyboardAvoidingView style={styles.containerinfo} behavior="padding" enabled>
          <View>
            <MenuButton navigation={this.props.navigation} />
          </View>
            <View style={{ flexDirection: 'row', marginLeft: 30, marginTop: 80, }}>
                <TextInput
                    placeholder="Input Nama dan Nomor Telepon"
                    value={this.state.title}
                    onChangeText={(text) => this.setState({ title: text })}
                    style={{ width: '95%', padding: 5, borderRadius: 5, borderColor: '#000', borderBottomWidth: 1, }}
                />
            </View>
            <View style={{width: '90%', marginTop: 10, marginLeft: 30}}>
                <Button
                    title="Add"
                    disabled={!this.state.title.length}
                    onPress={this._addData}
                    />
            </View>
            <FlatList
                style={{marginTop: 20, marginLeft: 30,}}
                data={this.state.todos}
                renderItem={({item}) => <Text style={{fontSize: 15, marginBottom: 20}}> {item.title} </Text> }
                keyExtractor={(item, index) => item.id.toString()}
            />
        </KeyboardAvoidingView>
    )
}

_addData = ()=>{
    let title = this.state.title;
    db.transaction(tx=>{
        tx.executeSql('insert into todos (complete, title) values (0,?) ',[title])
    },
    null, //error
    this.setState({title:''}) //success
    )
    this._getData()
}

_getData=()=>{
    db.transaction(tx => {
        tx.executeSql('select * from todos', [],(_,{rows})=>
            this.setState({ todos: rows._array })
        );
    });
    console.log(this.state.todos)
}
}
