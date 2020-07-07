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

class HomeAdmin extends Component{

    constructor(props) {
        super (props);
        this.state = {
        }
    }

    async componentDidMount() {       
    }

    render() {

        const image = { uri: "http://fr.web.img6.acsta.net/r_640_360/newsv7/18/03/02/11/26/3411268.jpg" };
        const image2 = { uri: "https://www.disneyphile.fr/wp-content/uploads/2019/12/saison-des-super-héros-marvel.png" };
        
        
        return (
            <ScrollView style={ styles.container }>

                <ImageBackground source={image2} style={styles.image}>
                    <Title title={"Vos Favoris"} style={styles.title}/>
                </ImageBackground>

                <ImageBackground source={image} style={styles.image}>
                    <Title title={"Découvrir"}/>
                </ImageBackground>                        
                
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
      }
});