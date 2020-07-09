import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image,  } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import CharacterBox from '../components/CharacterBox';
import search from './../assets/search.png';
import CharactersService from '../services/characters.service';

class Search extends Component{
    constructor(props){
        super(props);
        this.state={
            chars:[]
        }
    }

    async searchChars(name) {
        if(name.length > 2) {
            let chars = await CharactersService.getCharacterByName(name);
            this.setState({chars});
        } else {
            this.setState({chars: []});
        }
    }

    render(){

        let {chars}=this.state; 
        let {navigation}=this.props;

        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={search} style={styles.hearderImage}/>
                    <TextInput style={styles.inputSearch}
                        placeholder={"Rechercher un personnage..."}
                        onChangeText={(name)=>this.searchChars(name)} />
                </View>
                <FlatList
                    data={chars}
                    backgroundColor={"#FFF"}
                    keyExtractor={item=>item.id}
                    renderItem={({item}) => <CharacterBox data={item} navigation={navigation} horizontal={true}/>}
                />
            </View>
        );
    }


}

export default Search; 


const styles = StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor:"#FFF",
    }, 
    header:{
        display:'flex', 
        flexDirection:"row", 
        alignItems:"center",
        marginTop:70, 
        marginHorizontal:10,
    }, 
    hearderImage:{
        width:25, 
        height:25
    },
    inputSearch:{
        fontSize:22
    }
})