import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableHighlight 
} from 'react-native';

class Profil extends Component{
    constructor(props){
        super(props); 
        this.state = {
          email:null, 
          pseudo:null, 
          ddn:null
        }
      }
    handleChange(e, name){
        this.setState({
          [name]:e.nativeEvent.text
        })
      }
    async save(){
        let {email, pseudo, ddn}=this.state;
        let user = null;
        user = await UsersService.update({email,pseudo,ddn});
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
                id="pseudo"
                style={styles.input}
                placeholder={'Entrer votre pseudo'}
                onChange={(e)=>this.handleChange(e, 'pseudo')}
                />
                <TextInput
                id="ddn"
                style={styles.input}
                placeholder={'Entrer votre date de naissance'}
                onChange={(e)=>this.handleChange(e, 'ddn')}
                />
                
                <TouchableHighlight style={styles.button} onPress={() => this.save()} underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>Enregistrer</Text>
                </TouchableHighlight>
            </View>
            
          )
    }
}

export default Profil;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        paddingTop: 70
    }
});
