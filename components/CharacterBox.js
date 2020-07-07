import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
class CharacterBox extends Component{

    constructor(props) {
        super (props);
    }

    details() {
      //navigation vers le details de l'event
      let {navigation, data} = this.props;
      navigation.navigate('Details', {data: data});
    }

    render() {
      
      let {firstname,nickname,lastname, profilpicture}= this.props.data;
      let {horizontal}= this.props;

        
      return (
        <TouchableOpacity onPress={() => this.details()} navigation={this.props.navigation}>
          <View style={ horizontal ? styles.containerHorizontal : styles.container}>
              <Image source={{ uri: profilpicture }} style={styles.headerImage} resizeMode={"cover"}/>
              <Text style={styles.nickName}>{nickname}</Text>
              <Text style={styles.lastName}>{firstname} {lastname}</Text> 
          </View>
        </TouchableOpacity>
      )
    }
}

export default CharacterBox;

const styles = StyleSheet.create({
  container: {
    width: 160,
    marginBottom: 20,
    marginTop: 10,
    marginHorizontal: 10,

    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 10
    },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 5
  },
  containerHorizontal: {
    width: 350,
    marginBottom: 20,
    marginTop: 10,
    marginHorizontal: 10,

    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 10
    },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 5
},
    headerImage: {
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      height: 120,
      width: "100%"
  },
    nickName: {
      fontSize: 22,
      color: "#7766C6",
      fontWeight: "bold",
    },
    lastName: {
      fontSize: 15,
      fontWeight: "bold",
    },
  });
  