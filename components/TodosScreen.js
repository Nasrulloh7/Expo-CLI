import React, { Component } from 'react'
import { Text, View, ActivityIndicator, Button, TextInput, FlatList, StatusBar, KeyboardAvoidingView } from 'react-native'
import { styles } from './styles';

import * as firebase from 'firebase'
import 'firebase/firestore'
import Todo  from './Todo'
import MenuButton from '../menu/MenuButton';

export default class OtherScreen extends Component {
  static navigationOption ={
    title: 'Todos'
  }

  constructor(props){
    console.disableYellowBox=true;
    super(props)
      this.ref = firebase.firestore().collection('todos');
      this.unsubscribe = null;
      this.state = {
        title: '',
        todos: [],
        loading: true
      }
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  _addTodo = ()=>{
      this.ref.add({
        title: this.state.title,
        complete: false
      })

      this.setState({title: ''});
  }

  onCollectionUpdate = (querySnapshot)=>{
    const todos = [];
    querySnapshot.forEach((doc) => {
      const{title,complete}=doc.data();

      todos.push({
        key: doc.id,
        doc,
        title,
        complete
      })
    })

    this.setState({
      todos,
      loading: false
    })
  }

  render() {
    if(this.state.loading){
      return(
        <View>
          <ActivityIndicator />
          <StatusBar barStyle="default" />
        </View>
      )
    }
    return (
    <KeyboardAvoidingView>
      <View>
        <MenuButton navigation={this.props.navigation} />
      </View>
      <View style={{flexDirection: 'row', marginLeft: 30, marginTop: 80}}>
        <TextInput 
            placeholder="Todo"
            value={this.state.title}
            onChangeText={(text)=>this.setState({title: text})}
            style={styles.txtInput}> 
        </TextInput>

        <Button style={styles.button} title="Add" onPress={this._addTodo} disabled={!this.state.title.length} />
      </View>
      <FlatList style={{margin: 30}}
          data={this.state.todos}
          renderItem={({item}) =>
            <Todo {...item} />
            } 
      />
      </KeyboardAvoidingView>
    )
  }
}