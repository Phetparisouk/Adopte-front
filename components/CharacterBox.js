import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

class CharacterBox extends Component{

    render() {

        let {firstname, lastname, nickname} = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.nickName}>{nickname}</Text>
                <Text style={styles.firstName}>{firstname}</Text>
                <Text style={styles.lastName}>{lastname}</Text>               
            </View>
        )
    }

}

export default CharacterBox;

const styles = StyleSheet.create({
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FFF",
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.08,
      shadowRadius: 20,
      elevation: 5,
    },
    nickName: {
      fontSize: 22,
      color: "#7766C6",
      fontWeight: "bold",
    },
    firstName: {
      fontSize: 15,
      fontWeight: "bold",
    },
    lastName: {
      fontSize: 15,
      fontWeight: "bold",
    },
  });
  