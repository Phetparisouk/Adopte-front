import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    FlatList,
    ImageBackground
} from 'react-native';
import Title from "../components/Title";
import CharacterBox from "../components/CharacterBox"
import CharactersService from '../services/characters.service';

class ListChar extends Component{

    constructor(props) {
        super (props);
        this.state = {
            characters : []
        }
    }

    async componentDidMount() {       
        let characters = await CharactersService.list();
        this.setState({characters});
    }

    randomize(tab) {
        var i, j, tmp;
        for (i = tab.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            tmp = tab[i];
            tab[i] = tab[j];
            tab[j] = tmp;
        }
        return tab;
        
    }

    render() {

        let characters=this.randomize(this.state.characters);
        let {navigation}=this.props;

        const image = { uri: "http://fr.web.img6.acsta.net/r_640_360/newsv7/18/03/02/11/26/3411268.jpg" };
                
        return (
            <ScrollView style={ styles.container }>

                <ImageBackground source={image} style={styles.image}>
                    <Title title={"Liste des personnages"}/>
                </ImageBackground>
                <FlatList
                    data={characters}
                    numColumns={2}
                    backgroundColor={"#EDF"} //#fac8e4
                    keyExtractor={(item)=>item._id}
                    renderItem={({ item }) =><CharacterBox navigation={navigation} data={item} />} 
                />                        
                
            </ScrollView>
        )
    }
}

export default ListChar;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "pink",
        paddingTop: 35
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#EDF600'
      }
});