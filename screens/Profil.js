import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

class Profil extends Component{
    constructor(props){
        super(props); 
        this.state = {
        }
      }

    render(){
        return(
            <View style={styles.container}>
              <Text>Profil</Text>
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
