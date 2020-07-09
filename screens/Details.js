import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableHighlight,
    Button,
    Image
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

    openModal() {
        this.setState({isModalVisible:true});
        let {favoris} = this.props;
        let {_id} = this.state.data;
        
        favoris.includes(_id) ? favoris.splice(favoris.indexOf(_id), 1) : favoris.push(_id);
        this.props.updateFavoris(favoris);
        this.setState({ isFavoris : !! favoris.includes(_id) });
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

        const image = { uri: "https://europeanpartnership-responsibleminerals.eu/file/download/53241763" };
        const heart = {uri : "https://webstockreview.net/images/clipart-hearts-donut-14.png"}
        
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
                    <Text style={styles.firstname}>Prenom : {firstname}</Text>
                    <Text style={styles.lastName}>Nom : {lastname}</Text> 
                    <Text style={styles.birthday}>Anniversaire : {birthday}</Text> 
                    <Text style={styles.like_behavior}>Aime : {like_behavior}</Text> 
                    <Text style={styles.dislike_behavior}>Aime pas : {dislike_behavior}</Text>  
                </View>
                    <TouchableHighlight onPress={()=>this.goback()} underlayColor='#99d9f4'>
                        <ImageBackground source={image} style={styles.returnButton}></ImageBackground>
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
      backgroundColor:"#EDF",
      flex:1
    }, 
    headerImage:{
      height:300,
    },
    returnButton:{
        height:70,
        width:70
    },
    heartEmoji:{
        height:30,
        width:30
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
        color: "#0A58D9",
        fontWeight: "bold",
        textAlign:"center",
        marginBottom:30
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