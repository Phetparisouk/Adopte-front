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
import EventBox from "../components/EventBox";
import EventsService from '../services/characters.service';

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
        let eventsWeek = await EventsService.getEventsThisWeek(10)
        let eventsAfter = await EventsService.getEventsAfter()
        //this.setState( {events: response} );
        this.setState( {eventsWeek, eventsAfter} );
    }


    render() {

        let {character} = this.state;
        //let {events} = this.state;
        //let {eventsWeek, eventsAfter} = this.state;
        //let {navigation} = this.props;

        return (
            <ScrollView style={styles.container}>
                <Title title={"Liste perso test"}/>

                {
                    character.map(item => {
                        return (<EventBox/>)
                    })
                }

                <FlatList
                    //data={events}
                    data={character}
                    //data={eventsWeek}
                    horizontal= {true}
                    showsHorizontalScrollIndicator={false}
                    backgroundColor={"#FFF"}
                    //keyExtractor={item => item.id}
                    //renderItem = {({item}) => <EventBox navigation={this.props.navigation} data={item.fields} horizontal={true} />}
                />


                <Title title={"A venir"}/>
                <FlatList
                    //data={eventsAfter}
                    backgroundColor={"#FFF"}
                    //keyExtractor={item => item.id}
                    //renderItem = {({item}) => <EventBox data={item.fields} navigation={this.props.navigation}/>}
                />
            </ScrollView>
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

/*
<FlatList
data={events}
backgroundColor={"#FFF"}
keyExtractor={item => item.id}
renderItem = {({item}) => <EventBox data={item.fields}/>}
/>

*/