import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity  } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

class Login extends Component{

    constructor(props){
      super(props); 
      this.state = {
        email:null, 
        password:null
      }
    }

    handleChange(e, name){
      this.setState({
        [name]:e.nativeEvent.text
      })
    }

    connect(){
      let {email, password}=this.state;
      if(email !== null && password !== null){
        this.props.navigation.navigate('Home');
      }
    }
    render(){
        return(
          <View style={styles.container}>

          <TextInput
            id="email"
            style={styles.input}
            placeholder={'Entrer votre mail'}
            onChange={(e)=>this.handleChange(e, 'email')}
          />
          <TextInput
            id="password"
            style={styles.input}
            placeholder={'Entrer votre mdp'}
            onChange={(e)=>this.handleChange(e, 'password')}
            secureTextEntry={true}
          />
          <Button title={"Se connecter"}/>
          </View>
        )
        
    }
}
export default Login; 

const styles = StyleSheet.create({
  container: {
    flex:1, 
    justifyContent:"center",
    alignItems:"center"
  }, 
  input: {
    width:"100%" , 
    fontSize:20,
    marginBottom:20,
    marginLeft:20
  }
}); 