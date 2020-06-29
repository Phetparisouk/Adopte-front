import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    FlatList
} from 'react-native';
import Title from "../components/Title";
//import EventBox from "../components/EventBox";
import CharactersService from '../services/characters.service';

class Home extends Component{

    constructor(props) {
        super (props);

        this.state = {
            //eventsWeek : [],
            //eventsAfter: []
        }
    }


    async componentDidMount() {       
        //let response = await EventsService.list();
        //let eventsWeek = await EventsService.getEventsThisWeek(10)
        //let eventsAfter = await EventsService.getEventsAfter()
        //this.setState( {events: response} );
        //this.setState( {eventsWeek, eventsAfter} );
        let characters = await CharactersService.list();
    }


    render() {

        //let {events} = this.state;
        //let {eventsWeek, eventsAfter} = this.state;
        //let {navigation} = this.props;

        return (
            <Title title={"Ce week-end"}/>
        )
    }

}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        paddingTop: 70
    }
});