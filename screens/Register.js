import React, {Component} from 'react';
import UsersService from '../services/users.service';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    TouchableHighlight 
} from 'react-native';
import Modal from 'react-native-modal';

class Register extends Component{
    constructor(props){
        super(props); 
        this.state = {
          email:null, 
          mdp:null,
          mdp2:null,
          pseudo:null, 
          role:"user", 
          favoris:[],
          isModalVisible:false,
          message:null
        }
      }

      handleChange(e, name){
        this.setState({
          [name]:e.nativeEvent.text
        })
      }
    
      openModal() {
        this.setState({isModalVisible:true});
    }

    closeModal() {
        this.setState({isModalVisible:false});
    }
    async register(){
        let {message,email, mdp,mdp2, pseudo, role}=this.state;
        let user = null;
        const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(mdp==mdp2){
           if (regEmail.test(this.state.email) === true){
                user = await UsersService.create({email,mdp,pseudo, role});
                if(user.user){
                    this.props.navigation.navigate('Login');
                }
                else{
                    this.setState({isModalVisible:true , message:"Email et Pseudo obligatoire"});
                }
           }
           else{
            this.setState({isModalVisible:true,message:"Email incorrect"});
            }
        }
        else{
            this.setState({isModalVisible:true,message:"Mot de passe différent"});
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
                id="pseudo"
                style={styles.input}
                placeholder={'Entrer votre pseudo'}
                onChange={(e)=>this.handleChange(e, 'pseudo')}
                />
                <TextInput
                id="mdp"
                style={styles.input}
                placeholder={'Entrer votre mdp'}
                onChange={(e)=>this.handleChange(e, 'mdp')}
                secureTextEntry={true}
                />
                <TextInput
                id="mdp2"
                style={styles.input}
                placeholder={'Confirmer votre mdp'}
                onChange={(e)=>this.handleChange(e, 'mdp2')}
                secureTextEntry={true}
                />
                
                <TouchableHighlight style={styles.button} onPress={() => this.register()} underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>S'inscrire !</Text>
                </TouchableHighlight>
                <Modal onBackdropPress={()=>this.closeModal()} isVisible={this.state.isModalVisible} style={styles.modal}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.title}>Erreur</Text>
                        <Text style={styles.message}>{this.state.message}</Text>
                    </View> 
                </Modal>
            </View>            
          )
    }
}

export default Register;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    message: {
          fontSize: 15,
          textAlign:"center",
        },
    modal:{
        backgroundColor:'white',
        maxHeight:150,
        marginTop:"60%",
        padding:20,
        borderRadius: 8,
        justifyContent:'center',
        textAlign:'center'
    },
    input: {
        width: "100%",
        fontSize: 20,
        marginBottom: 20,
        marginLeft: 20,
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
      },
      title: {
            fontSize: 20,
            color: "#7766C6",
            fontWeight: "bold",
            textAlign:"center",
          },
      button: {
        height: 36,
        width:"50%",
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        justifyContent: 'center'
      }

});