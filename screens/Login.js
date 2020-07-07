import React, {Component} from 'react';
import UsersService from '../services/users.service';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    TouchableHighlight 
} from 'react-native';
import tcomb from 'tcomb-form-native';

//Initialisation
const Form = tcomb.form.Form;

//Model
const LoginModel = tcomb.struct({
    email: tcomb.String,
    password: tcomb.String
});

//Options
const options = {
    fields: {
        email: {
            label: "Mon email",
        }, 
        password: {
            label: "Mot de passe",
        }
    }
};

class Login extends Component{

    constructor(props) {
        super(props);
        this.containerRef = React.createRef();
        this.state = {
            email: null,
            password: null
        }
    }

    handleChange(e, name){
        this.setState({
            [name]: e.nativeEvent.text
        });
    }

    async connect(){
        let validate = this.refs.form.validate();
        let email=validate.value.email;
        let password=validate.value.password;
        let user = await UsersService.auth({email,password});
        if(user.user){
            this.props.navigation.navigate('Home');
        }
    }

    render(){
        return (
            <View ref={this.containerRef} style={styles.container}>

                { <Form
                    ref="form"
                    type={LoginModel}
                    options={options}
                    value={this.state} /> }
                    <TouchableHighlight style={styles.button} onPress={() => this.connect()} underlayColor='#99d9f4'>
                        <Text style={styles.buttonText}>Se connecter !</Text>
                    </TouchableHighlight>
            </View>
        )
    }
}

export default Login;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        width: "100%",
        fontSize: 20,
        marginBottom: 20,
        marginLeft: 20,
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
      },
      button: {
        height: 36,
        width:"50%",
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        justifyContent: 'center'
      }

});