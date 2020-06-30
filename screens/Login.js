import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    FlatList,
    Button
} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

class Login extends Component{

    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null
        }
    }

    connect(){
        let {email, password}=this.state;
        if(email !== null && password !== null){
          this.props.navigation.navigate('Home');
        }
      }

      handleChange(e, name){
        this.setState({
          [name]:e.nativeEvent.text
        })
      }
/*
    handleChangeEmail(text) {
        this.setState({
            email: text
        });
    }

    handleChangePassword(text) {
        this.setState({
            password: text
        });
    }
*/
    render(){
        return (
            <View style={styles.container}>

                <TextInput 
                    id={"email"}
                    style={styles.input}
                    placeholder={"Entrez votre email"}
                    onChange={(e) => this.handleChange(e)}
                />

                <TextInput 
                    style={styles.input}
                    placeholder={"Entrez votre mdp"}
                    secureTextEntry={true}
                />
          
                {/*
                <TouchableOpacity style={backgroundColor: "red", width:"100%", textAlign:}></TouchableOpacity>
                */}

                <Button title={"Se connecter"} onPress={() => this.connect()} />
            </View>
        )
    }
}

export default Login;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        width: "100%",
        fontSize: 20,
        marginBottom: 20,
        marginLeft: 20,
    }

});