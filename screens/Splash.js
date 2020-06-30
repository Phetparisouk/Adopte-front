import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Animated,
} from 'react-native';
import logo from './../assets/logo.png';

class Splash extends Component{

    constructor(props) {
        super(props);
        this.state = {
            fadeIn: new Animated.Value(0)
        }
    }

    fadeInAnimation = () => {
        let {fadeIn} = this.state;
        Animated.timing(fadeIn, {
            toValue: 1,
            duration: 2000,
        }).start(() => this.props.navigation.navigate('Login'));
    };

    componentDidMount() {
        this.fadeInAnimation();
    }


    render() {

        let {fadeIn} = this.state;

        return (
            <View style={styles.container}>
                <Animated.Image
                    style={{opacity: fadeIn}}
                    source={logo}
                />
            </View>
        )
    }


}

export default Splash;


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#FFF"
    },

});


/*export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your appppp !!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    //display: "flex",
    //flexDirection: "row",
    //height:300,
    //flexWrap: "wrap",
    //justifyContent: 'space-between', //space-between, flex-end, flex start
    //alignItems: 'center',
    //paddingTop: 70
  },
});
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
});*/

