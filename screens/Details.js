import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

class Details extends Component{

    render(){
        return (
            <View style={ styles.container }>
                <Text>details</Text>
            </View>
        )
    }
}

export default Details;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        paddingTop: 70
    }
});
