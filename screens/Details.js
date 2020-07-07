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
import {updateFavoris} from '../actions/favoris.actions'; 
import {connect} from 'react-redux'; 
import Modal from 'react-native-modal';

class Details extends Component{
    constructor(props){
        super(props);
        this.state={
            data: this.props.navigation.state.params.data,
            isFavoris:false,
            isModalVisible:false
          }
    }
    
    componentDidMount() {

        let isFavoris = false;
        let {favoris} = this.props;
        let {data} = this.state;

        favoris.includes(data._id) ? isFavoris = true : isFavoris = false;
        this.setState({isFavoris});
    }

    addOrDeleteFavoris(){
        

    }
    openModal() {
        this.setState({isModalVisible:true});
        let {favoris} = this.props;
        let {_id} = this.state.data;
        
        favoris.includes(_id) ? favoris.splice(favoris.indexOf(_id), 1) : favoris.push(_id);
        this.props.updateFavoris(favoris);
        this.setState({ isFavoris : !! favoris.includes(_id) })
    }

    closeModal() {
        this.setState({isModalVisible:false});
    }

    goback(){
        this.props.navigation.navigate('ListChar');
    }

    render(){
        let {rejected_catch_phrase,accepted_catch_phrase,firstname,nickname,lastname,birthday,Description,like_behavior,dislike_behavior, profilpicture}= this.state.data;
        let {isFavoris} = this.state;
        
        return (
            <ScrollView style={styles.container}>
                <ImageBackground style={styles.headerImage} source={{ uri: profilpicture }}></ImageBackground>  
                { isFavoris ? 
                    <TouchableHighlight style={styles.buttonDel} onPress={()=>this.openModal()} underlayColor='#99d9f4'>
                        <Text style={styles.buttonText}>Supprimer des favoris</Text>
                    </TouchableHighlight>
                : 
                    <TouchableHighlight style={styles.buttonAdd} onPress={()=>this.openModal()} underlayColor='#99d9f4'>
                        <Text style={styles.buttonText}>Ajouter aux favoris</Text>
                    </TouchableHighlight>
                }
            
                <View style={styles.body}>
                    <Text style={styles.nickName}>{nickname}</Text>
                    <Text style={styles.firstname}>{firstname}</Text>
                    <Text style={styles.lastName}>{lastname}</Text> 
                    <Text style={styles.birthday}>{birthday}</Text> 
                    <Text style={styles.like_behavior}>{like_behavior}</Text> 
                    <Text style={styles.dislike_behavior}>{dislike_behavior}</Text> 
                    <Text style={styles.Description}>{Description}</Text> 
                </View>
                    <TouchableHighlight style={styles.buttonBack} onPress={()=>this.goback()} underlayColor='#99d9f4'>
                        <Text style={styles.buttonText}>Retour</Text>
                    </TouchableHighlight>
                <Modal onBackdropPress={()=>this.closeModal()} isVisible={this.state.isModalVisible} style={styles.modal}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.title}>Message de {nickname}</Text>
                        <Text style={styles.message}>{isFavoris ? accepted_catch_phrase : rejected_catch_phrase  }</Text>
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
      buttonBack: {
        height: 36,
        width:130,
        backgroundColor: '#7766C6',
        borderColor: '#48BBEC',
        top: 80,
        left: 80,
        justifyContent: 'center'
      }
  }); 

  const mapStateToProps = state => {
    return {
        favoris: state.favoris
    }
};

  
const mapDispatchToProps = dispatch => {
    return {
        updateFavoris: favoris => {dispatch(updateFavoris(favoris))},
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);