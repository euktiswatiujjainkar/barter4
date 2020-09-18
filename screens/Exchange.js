import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput,Modal} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import db from '../config';
import firebase from "firebase";

export default class Exchange extends Component{
    constructor(){
       super()
       this.state={
           itemname:"",
           description:"",
          
       }
    }

Additem=(description,itemname)=>{
 var username= this.state.username
 db.collection("exchange requests").add({
     "username": username,
     "itemname": itemname,
    "description":description

 })
 this.setState({
     itemname:'',
     description:'',

 })
 return Alert.alert(
    'item ready to exchange',
    '',
    [
        {text:ok, onPress:()=>{
 this.props.navigation.navigate('Home')
        }}
    ]
 );
}



render(){
    return(
  <View>
             <TextInput
                style ={styles.formTextInput}
                placeholder={"item name"}
                onChangeText={(text)=>{
                    this.setState({
                        itemname:text
                    })
                }}
                value={this.state. itemname}
              />
              <TextInput
                style ={[styles.formTextInput,{height:300}]}
                multiline
                numberOfLines ={8}
                placeholder={"description"}
                onChangeText ={(text)=>{
                    this.setState({
                        description:text
                    })
                }}
                value ={this.state.description}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={this.Additem}
                >
                <Text>addtiem</Text>
              </TouchableOpacity>
        </View>
    );
}
}

const styles = StyleSheet.create({
button:{
    width:"75%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },}

})

















