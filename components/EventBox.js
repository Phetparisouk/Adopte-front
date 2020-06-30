import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';
import CharacterBox from './CharacterBox';
import Helpers from '../helpers/Helpers';

class EventBox extends Component{

    constructor(props) {
        super (props);
    }

    details() {
        //navigation vers le details de l'event
        let {navigation, data} = this.props;
        navigation.navigate('Details', {data: data});
    }

    render() {

        let {title, cover_url} = this.props.data;
        let {horizontal}= this.props;

        return (
            <TouchableOpacity onPress={() => this.details()} navigation={this.props.navigation}>
                <View style={ horizontal ? styles.containerHorizontal : styles.container}>

                    <Image source={{uri: cover_url}} style={styles.headerImage} resizeMode={"cover"}/>

                    <View style={styles.body}>
                        <CharacterBox style={styles.characterBox} /*day={Helpers.extractDayFromDate(date_start)} month={Helpers.extractMonthFromDate(date_start)}*/ />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

export default EventBox;

const styles = StyleSheet.create({

    container: {
        marginBottom: 20,
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
    body: {
        display: "flex",
        justifyContent: "center",
        height: 150,
        backgroundColor: "#FFF",
        borderBottomStartRadius: 20,
        borderBottomEndRadius: 20,
        padding:10,
    },

    characterBox : {
        position: "absolute",
        left: 10,
        top : -30,
    },  

    title: {
        fontSize: 20,
        fontWeight: "600",
        fontWeight: "bold"
    },
    subtitle:{
        fontSize: 16,
        color: "#B0B0B0"
    }
});
