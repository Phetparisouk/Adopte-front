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
            characters : 
            [{
                "_id": {
                  "$oid": "5efdf21a8adfbd4440a69725"
                },
                "nickname": "Ant-man",
                "firstname": "Scott",
                "lastname": "Lang",
                "birthday": "27/05/88",
                "hobby": "Braquerie",
                "Description": "a venir",
                "profilpicture": "https://wallpapercave.com/wp/TXOJnR1.jpg",
                "like_behavior": "joyeux",
                "dislike_behavior": "depressif",
                "accepted_catch_phrase": "Veux-tu etre ma MJ ?",
                "rejected_catch_phrase": "Desole, mon spider-sense sent une odeur desagreable"
              },
              {
                "_id": {
                  "$oid": "5efdf21a8adfbd4440a66725"
                },
                "nickname": "Spider-man",
                "firstname": "Peter",
                "lastname": "Parker",
                "birthday": "26/12/96",
                "hobby": "Programmation web",
                "Description": "a venir",
                "profilpicture": "https://wallpapercave.com/wp/TXOJnR1.jpg",
                "like_behavior": "joyeux",
                "dislike_behavior": "depressif",
                "accepted_catch_phrase": "Veux-tu etre ma MJ ?",
                "rejected_catch_phrase": "Desole, mon spider-sense sent une odeur desagreable"
              },{
                "_id": {
                  "$oid": "5efdf21a8adfbd4440a66726"
                },
                "nickname": "Iron man",
                "firstname": "Tony",
                "lastname": "Stark",
                "birthday": "15/02/82",
                "hobby": "Mechanicien",
                "Description": "a venir",
                "profilpicture": "https://pbs.twimg.com/media/Dkf3o_pXgAEpdL3?format=jpg&name=900x900",
                "like_behavior": "ambitieux",
                "dislike_behavior": "passif",
                "accepted_catch_phrase": "Je t'aime 3000 fois",
                "rejected_catch_phrase": "Parce que JE SUIS� IRON-MAN"
              },{
                "_id": {
                  "$oid": "5efdf21a8adfbd4440a66727"
                },
                "nickname": "The Hulk",
                "firstname": "Bruce",
                "lastname": "Banner",
                "birthday": "16/03/81",
                "hobby": "Destruire des voitures",
                "Description": "a venir",
                "profilpicture": "https://wallpapercave.com/wp/wp2616097.jpg",
                "like_behavior": "serieux",
                "dislike_behavior": "hautain",
                "accepted_catch_phrase": "HULK, MATCH",
                "rejected_catch_phrase": "HULK, SMASH"
              },{
                "_id": {
                  "$oid": "5efdf21a8adfbd4440a66728"
                },
                "nickname": "The God of thunder",
                "firstname": "Thor ",
                "lastname": "Odinson",
                "birthday": "99/99/00",
                "hobby": "Manger des nachos",
                "Description": "a venir",
                "profilpicture": "https://static.fnac-static.com/multimedia/Images/FD/Comete/87202/CCP_IMG_ORIGINAL/1103407.jpg",
                "like_behavior": "energetique",
                "dislike_behavior": "moux",
                "accepted_catch_phrase": "Ce fut un coup de foudre pour moi",
                "rejected_catch_phrase": "Tu es Loki ! N'est-ce-pas ?"
              },{
                "_id": {
                  "$oid": "5efdf21a8adfbd4440a66729"
                },
                "nickname": "Capitaine de l'Amerique",
                "firstname": "Steve",
                "lastname": "Rogers",
                "birthday": "21/09/45",
                "hobby": "Proteger l'Amerique",
                "Description": "a venir",
                "profilpicture": "https://pbs.twimg.com/profile_images/937142070992605184/GO70zooO.jpg",
                "like_behavior": "courageux",
                "dislike_behavior": "peureux",
                "accepted_catch_phrase": "Je peux faire ca toute la journee.. Avec toi.",
                "rejected_catch_phrase": "HAIL HYDRA"
              },{
                "_id": {
                  "$oid": "5efdf21a8adfbd4440a6672a"
                },
                "nickname": "Hawk eyes",
                "firstname": "Clinton Francis",
                "lastname": "Barton",
                "birthday": "31/07/85",
                "hobby": "Tir a l'arc",
                "Description": "a venir",
                "profilpicture": "https://3238leblogdemarvelll-1278.kxcdn.com/wp-content/uploads/2015/03/Affiche-France-Avengers-2-L-ere-d-Ultron-Hawkeye-HD.jpg-850x446-1563884886.jpg",
                "like_behavior": "decisif",
                "dislike_behavior": "indecisif",
                "accepted_catch_phrase": "Je sais viser droit dans ton coeur",
                "rejected_catch_phrase": "Desole, j'ai deja une femme et un gosse"
              },{
                "_id": {
                  "$oid": "5efdf21a8adfbd4440a6672b"
                },
                "nickname": "Scarlet witch",
                "firstname": "Wanda ",
                "lastname": "Maximoff",
                "birthday": "22/04/91",
                "hobby": "Magie rouge",
                "Description": "a venir",
                "profilpicture": "https://images-na.ssl-images-amazon.com/images/I/91%2Bt%2BIGNSdL._SX355_.jpg",
                "like_behavior": "responsible",
                "dislike_behavior": "alcoolique",
                "accepted_catch_phrase": "Remplace ma VISION",
                "rejected_catch_phrase": "Je n'ai pas de VISION pour toi"
              },{
                "_id": {
                  "$oid": "5efdf21a8adfbd4440a6672c"
                },
                "nickname": "Black Panther",
                "firstname": "T'",
                "lastname": "Challa",
                "birthday": "30/09/87",
                "hobby": "Griffer",
                "Description": "a venir",
                "profilpicture": "https://qph.fs.quoracdn.net/main-qimg-2554fa9856f6d90e444f878ef3695ddd",
                "like_behavior": "sportif",
                "dislike_behavior": "faineant",
                "accepted_catch_phrase": "Passe le moi, ton coeur",
                "rejected_catch_phrase": "Je m'en fou"
              },{
                "_id": {
                  "$oid": "5efdf21a8adfbd4440a6672d"
                },
                "nickname": "Quill's daddy",
                "firstname": "Yondu ",
                "lastname": "Udonta",
                "birthday": "21/11/49",
                "hobby": "Adopter des humains",
                "Description": "a venir",
                "profilpicture": "https://c4.wallpaperflare.com/wallpaper/676/739/745/movie-guardians-of-the-galaxy-vol-2-michael-rooker-yondu-udonta-wallpaper-preview.jpg",
                "like_behavior": "mature",
                "dislike_behavior": "immature",
                "accepted_catch_phrase": "Il a beau etre ton pere, mais il n'est pas ton papa",
                "rejected_catch_phrase": "Desole, petite mais tu est trop jeune pour moi."
              },{
                "_id": {
                  "$oid": "5efdf21a8adfbd4440a6672e"
                },
                "nickname": "Captain DC",
                "firstname": "Marvel",
                "lastname": "Mar-Vell",
                "birthday": "19/04/04",
                "hobby": "Cours d'actrice",
                "Description": "a venir",
                "profilpicture": "https://images2.alphacoders.com/978/thumb-1920-978754.jpg",
                "like_behavior": "emotionnel",
                "dislike_behavior": "non-emotionnel",
                "accepted_catch_phrase": "Salut, tu as quelque chose pour moi ?",
                "rejected_catch_phrase": "Pas de gant de l'infini, pas de rencard"
              },{
                "_id": {
                  "$oid": "5efdf21a8adfbd4440a6672f"
                },
                "nickname": "Nick Fury",
                "firstname": "Nicholas",
                "lastname": "Fury",
                "birthday": "21/01/71",
                "hobby": "Motherf*cker",
                "Description": "a venir",
                "profilpicture": "https://cdn-biiinge.konbini.com/images/files/2018/10/nickfury-feat.jpg?webp=",
                "like_behavior": "poli",
                "dislike_behavior": "malpoli",
                "accepted_catch_phrase": "Ok motherf*cker",
                "rejected_catch_phrase": "Nop motherf*cker"
              }]
        }
    }

    async componentDidMount() {       
        let characters = await CharactersService.list();
        //this.setState({characters});
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
        const image2 = { uri: "https://www.disneyphile.fr/wp-content/uploads/2019/12/saison-des-super-héros-marvel.png" };
                
        return (
            <ScrollView style={ styles.container }>
                {/*
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
                /> */}

                <ImageBackground source={image} style={styles.image}>
                    <Title title={"Liste des personnages"}/>
                </ImageBackground>
                <FlatList
                    data={characters}
                    numColumns={2}
                    backgroundColor={"#FFF"}
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
        color: '#EDF600'
      }
});