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
import CharacterBox from "../components/CharacterBox"
import CharactersService from '../services/characters.service';

class Home extends Component{

    constructor(props) {
        super (props);
        this.state = {
            characters : [],
        }
    }

    async componentDidMount() {       
        let characters = await CharactersService.list();
        this.setState({characters});
    }

    render() {

        let {characters} = this.state;
        let {navigation}=this.props;
        
        return (
            <ScrollView style={ styles.container }>
                <Title title={"Ce week-end"}/>
                <FlatList
                    data={characters}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    backgroundColor={"#FFF"}
                    keyExtractor={(item)=>item.id}
                    renderItem={({ item }) =><CharacterBox navigation={navigation} data={item} horizontal={true} />} />
                    
                <Title title={"A venir"}/>
                <FlatList
                    data={characters}
                    backgroundColor={"#FFF"}
                    keyExtractor={(item)=>item.id}
                    renderItem={({ item }) =><CharacterBox navigation={navigation} data={item} />} />

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