import React, { Component } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import logo from './../assets/logo.png';


class App extends Component{

  /**
   * Constructeur
   * @param props 
   */
  constructor(props){
    super(props); 
    this.state = {
      fadeIn: new Animated.Value(0)
    }
    // mettre des consoles logs dans les différentes fonctions pour vérifer l'odre d'éxécution
    console.log('je suis dans le constructeur')
  }

  fadeInAnimation = ()=>{

    let {fadeIn} =this.state;
    Animated.timing(fadeIn, {
      toValue:1, 
      duration:2000,
    }).start(()=>this.props.navigation.navigate('Login'));

  }

  /**
   * Fonction appelée après le rendu  de la vue
   */
  componentDidMount(){
    this.fadeInAnimation();
  }

  handleChangetitle(){
    this.setState(
      {title: " un autre titre"}
    );
  }
  render(){
    let{fadeIn}=this.state;
    return(
      <View style={styles.container}>
        <Animated.Image
          style={{ opacity: fadeIn }}
          source={logo}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
});

export default App; 