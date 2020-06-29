import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//import Splash from "./screens/Splash";
import Home from "./screens/Home";
//import Profil from "./screens/Profil";
//import Search from "./screens/Search";
//import Details from "./screens/Details";
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Provider } from react-redux;
import {createStore} from "redux";
import rootReducer from './helpers/routeReducer';

const store = createStore(rootReducer);



const BottomNavigator = createBottomTabNavigator(

{
  Home:{
    screen: Home,
    navigationOptions:()=>({
        tabBarIcon:({tintColor})=>(
        <Icon
          name={"list"}
          color={tintColor}
          size={24}
        />
      )
    })
  } /* , 
  Search:{
    screen: Search,
    navigationOptions:()=>({
        tabBarIcon:({tintColor})=>(
        <Icon
          name={"search"}
          color={tintColor}
          size={24}
        />
      )
    })
  }, 
  Profil:{
    screen:Profil, 
    navigationOptions:()=>({
      tabBarIcon:({tintColor})=>(
      <Icon
        name={"user"}
        color={tintColor}
        size={24}
      />
    )
  })
}
},
  {
  tabBarOptions:{
    showLabel:false, 
    activeTintColor:'#7766C6'
  }*/
}
);

const AppNavigator = createStackNavigator(
    {
        //Splash: {screen: Splash, navigationOptions: {headerShown: false}},
        Home: {screen: BottomNavigator, navigationOptions: {headerShown: false}},
        //Details: {screen: Details, navigationOptions: {headerShown: false}},
        //Login: {screen: Login, navigationOptions: {headerShown: false}},

      },
    {
        initialRouteName: 'Splash'
    }
);

const AppContainer = createAppContainer(AppNavigator);

class App extends Component{
    render() {
      return (<Provider store={store}>
        <AppContainer/>
      </Provider>)
    }
};

export default App;
