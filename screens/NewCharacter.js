import React, {Component} from 'react';
import CharactersService from '../services/characters.service';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    TouchableHighlight 
} from 'react-native';
import Modal from 'react-native-modal';

class NewCharacter extends Component{
    constructor(props){
        super(props); 
        this.state = {
              nickname:null,
              firstname:null,
              lastname:null,
              birthday:null,
              hobby:null,
              Description: "a venir",
              profilpicture:null,
              like_behavior:null,
              dislike_behavior:null,
              accepted_catch_phrase:null,
              rejected_catch_phrase:null,
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
        let char = null;
        let {nickname,firstname, lastname,birthday, hobby, Description,profilpicture,like_behavior, dislike_behavior,accepted_catch_phrase, rejected_catch_phrase} = this.state;
        char = await CharactersService.create({nickname,firstname, lastname,birthday, hobby, Description,profilpicture,like_behavior, dislike_behavior,accepted_catch_phrase, rejected_catch_phrase});
        this.props.navigation.navigate('HomeAdmin');
        console.log(char);
    }

    render(){
        return(
            <View style={styles.container}>
                <TextInput
                id="nickname"
                style={styles.input}
                placeholder={'Pseudo du personnage'}
                onChange={(e)=>this.handleChange(e, 'nickname')}
                />
                <TextInput
                id="firstname"
                style={styles.input}
                placeholder={'Prénom du personnage'}
                onChange={(e)=>this.handleChange(e, 'firstname')}
                />
                <TextInput
                id="lastname"
                style={styles.input}
                placeholder={'Nom du personnage'}
                onChange={(e)=>this.handleChange(e, 'lastname')}
                />
                <TextInput
                id="Description"
                style={styles.input}
                placeholder={'Description du personnage'}
                onChange={(e)=>this.handleChange(e, 'Description')}
                />
                <TextInput
                id="hobby"
                style={styles.input}
                placeholder={'Passion du personnage'}
                onChange={(e)=>this.handleChange(e, 'hobby')}
                />
                <TextInput
                id="profilpicture"
                style={styles.input}
                placeholder={'Uri de la photo'}
                onChange={(e)=>this.handleChange(e, 'profilpicture')}
                />
                <TextInput
                id="like_behavior"
                style={styles.input}
                placeholder={'Il aime ? '}
                onChange={(e)=>this.handleChange(e, 'like_behavior')}
                />
                <TextInput
                id="dislike_behavior"
                style={styles.input}
                placeholder={"Il n'aime pas? "}
                onChange={(e)=>this.handleChange(e, 'dislike_behavior')}
                />
                <TextInput
                id="accepted_catch_phrase"
                style={styles.input}
                placeholder={"Phase positive"}
                onChange={(e)=>this.handleChange(e, 'accepted_catch_phrase')}
                />
                <TextInput
                id="rejected_catch_phrase"
                style={styles.input}
                placeholder={"Phase negative"}
                onChange={(e)=>this.handleChange(e, 'rejected_catch_phrase')}
                />
                
                <TouchableHighlight style={styles.button} onPress={() => this.register()} underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>Enregistrer</Text>
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

export default NewCharacter;


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