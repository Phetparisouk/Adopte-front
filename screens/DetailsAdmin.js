import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableHighlight,
    Button
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import CharactersService from '../services/characters.service';

class DetailsAdmin extends Component{
    constructor(props){
        super(props);
        this.state={
            data: this.props.navigation.state.params.data,
            isFavoris:false,
            isModalVisible:false
          }
    }
    
    async componentDidMount() {
    }

    async openModal(id) {
        this.setState({isModalVisible:true});
        await CharactersService.delete(id);
    }

    closeModal() {
        this.props.navigation.navigate('HomeAdmin');
        this.setState({isModalVisible:false});
    }

    goback(){
        this.props.navigation.navigate('HomeAdmin');
    }

    render(){
        let {rejected_catch_phrase,firstname,nickname,lastname,birthday,Description,like_behavior,dislike_behavior, profilpicture,_id}= this.state.data;
        
        return (
            <ScrollView style={styles.container}>
                <ImageBackground style={styles.headerImage} source={{ uri: profilpicture }}></ImageBackground>  
                
                    <TouchableHighlight style={styles.buttonDel} onPress={()=>this.openModal(_id)} underlayColor='#99d9f4'>
                        <Text style={styles.buttonText}>Supprimer</Text>
                    </TouchableHighlight>
            
                <View style={styles.body}>
                    <Text style={styles.nickName}>{nickname}</Text>
                    <Text style={styles.firstname}>{firstname}</Text>
                    <Text style={styles.lastName}>{lastname}</Text> 
                    <Text style={styles.birthday}>{birthday}</Text> 
                    <Text style={styles.like_behavior}>{like_behavior}</Text> 
                    <Text style={styles.dislike_behavior}>{dislike_behavior}</Text> 
                    <Text style={styles.Description}>{Description}</Text> 
                </View>
                    <TouchableHighlight onPress={()=>this.goback()} underlayColor='#99d9f4'>
                        <Text style={styles.back} >Retour</Text>
                    </TouchableHighlight>
                <Modal onBackdropPress={()=>this.closeModal()} isVisible={this.state.isModalVisible} style={styles.modal}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.title}>Message de {nickname}</Text>
                        <Text style={styles.message}>{rejected_catch_phrase  }</Text>
                    </View> 
                </Modal>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
      backgroundColor:"#FFF",
      flex:1
    }, 
    headerImage:{
      height:300,
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
    nickName: {
        fontSize: 30,
        color: "#7766C6",
        fontWeight: "bold",
        textAlign:"center",
      },
    message: {
          fontSize: 15,
          textAlign:"center",
        },
    title: {
          fontSize: 20,
          color: "#7766C6",
          fontWeight: "bold",
          textAlign:"center",
        },
    body:{
        alignItems: "center",
    }, 
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
      },
      buttonDel: {
        height: 36,
        backgroundColor: 'red',
        borderColor: '#48BBEC',
        marginBottom: 10,
        justifyContent: 'center'
      },
      buttonAdd: {
        height: 36,
        backgroundColor: 'green',
        borderColor: '#48BBEC',
        marginBottom: 10,
        justifyContent: 'center'
      },
      back: {
        height: 36,
        color: 'black',
        fontSize:30,
        textAlign:"right",
        marginRight: 10,
        justifyContent: 'center'
      },
  }); 


export default DetailsAdmin;