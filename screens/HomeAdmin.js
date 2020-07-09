import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    FlatList,
    ImageBackground,
    TouchableHighlight
} from 'react-native';
import Title from "../components/Title";
import CharacterBoxAdmin from "../components/CharacterBoxAdmin"
import CharactersService from '../services/characters.service';

class HomeAdmin extends Component{

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
    newCharacter(){
        this.props.navigation.navigate('NewCharacter');
    }
    render() {
        const image2 = { uri: "https://www.disneyphile.fr/wp-content/uploads/2019/12/saison-des-super-héros-marvel.png" };
        
        let {characters}=this.state;
        let {navigation}=this.props;
        return (
            <ScrollView style={ styles.container }>

                <ImageBackground source={image2} style={styles.image}>
                    <Title title={"Liste des personnages"} style={styles.title}/>
                </ImageBackground>
                <FlatList
                    data={characters}
                    numColumns={2}
                    backgroundColor={"#FFF"}
                    keyExtractor={(item)=>item._id}
                    renderItem={({ item }) =><CharacterBoxAdmin navigation={navigation} data={item} />} 
                />                       
        
            </ScrollView>
        )
    }
}



export default HomeAdmin;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: 25
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#000'
      },

      buttonAdd: {
        height: 36,
        backgroundColor: 'green',
        borderColor: '#48BBEC',
        marginBottom: 10,
        justifyContent: 'center'
      },
});