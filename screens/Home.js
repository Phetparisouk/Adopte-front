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

        const image = { uri: "http://fr.web.img6.acsta.net/r_640_360/newsv7/18/03/02/11/26/3411268.jpg" };
        const image2 = { uri: "https://www.disneyphile.fr/wp-content/uploads/2019/12/saison-des-super-héros-marvel.png" };
        
        
        return (
            <ScrollView style={ styles.container }>

                <ImageBackground source={image2} style={styles.image}>
                    <Title title={"Vos Favoris"} style={styles.title}/>
                </ImageBackground>
                <FlatList
                    data={characters}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    backgroundColor={"#FFF"}
                    keyExtractor={(item)=>item.id}
                    renderItem={({ item }) =><CharacterBox navigation={navigation} data={item} horizontal={true} />} 
                />

                <ImageBackground source={image} style={styles.image}>
                    <Title title={"Découvrir"}/>
                </ImageBackground>
                <FlatList
                    data={characters}
                    numColumns={2}
                    backgroundColor={"#FFF"}
                    keyExtractor={(item)=>item.id}
                    renderItem={({ item }) =><CharacterBox navigation={navigation} data={item} />} 
                />
                        
                
            </ScrollView>
        )
    }
}



export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fed6e9",
        paddingTop: 70
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
      }
});