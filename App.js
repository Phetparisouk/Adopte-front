import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import rootReducer from'./helpers/rootReducer';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import Login from './screens/Login';
import Details from './screens/Details';
import DetailsAdmin from './screens/DetailsAdmin';
import Splash from "./screens/Splash";
import ListChar from "./screens/ListChar";
import Register from "./screens/Register";
import HomeAdmin from "./screens/HomeAdmin";
import NewCharacter from "./screens/NewCharacter";
import Search from "./screens/Search";
const store = createStore(rootReducer);


const BottomNavigator = createBottomTabNavigator(

{
  ListChar:{
    screen: ListChar,
    navigationOptions:()=>({
        tabBarIcon:({tintColor})=>(
        <Icon
          name={"list"}
          color={tintColor}
          size={24}
        />
      )
    })
  }, 
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
  }
},
  {
  tabBarOptions:{
    showLabel:false, 
    activeTintColor:'#7766C6'
  }
}
);

const AppNavigator = createStackNavigator(
    {
        Splash:     { screen: Splash,           navigationOptions: {headerShown: false}},
        ListChar:   { screen: BottomNavigator,  navigationOptions: {headerShown: false}},
        Search:     { screen: Search,           navigationOptions: {headerShown: false}},
        HomeAdmin:  { screen: HomeAdmin,        navigationOptions: {headerShown: false}},
        Details:    { screen: Details,          navigationOptions: {headerShown: false}},
        DetailsAdmin:    { screen: DetailsAdmin,          navigationOptions: {headerShown: false}},
        Login:      { screen: Login,            navigationOptions: {headerShown: false}},
        NewCharacter:      { screen: NewCharacter,            navigationOptions: {headerShown: false}},
        Register:   { screen: Register,         navigationOptions: {headerShown: false}},

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