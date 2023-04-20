import React, { Component } from 'react'
import{
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import Login from './login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Signup from './signup';
import Setting from './setting';
import Contact from './contact';
import Myevent from './myevent';
import Dkcs from './dkandcs/dkcs';
import Csrt from './dkandcs/csrt';
import Tintuc from './news/newsList';
import Home1 from './events/homeList';
import DetailEvent from './events/DetailEvent';
import DetailNew from './news/DetailNew';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Trang chủ" component={Home1} options={{ tabBarIcon:()=>{ return( <Image source={require('../images/home.png')} style={{width:30,height:30}} resizeMode='stretch'/>)}}}/>
      <Tab.Screen name="Tin tức" component={Tintuc} options={{ tabBarIcon:()=>{ return( <Image source={require('../images/news.png')} style={{width:30,height:35}} resizeMode='stretch'/>)}}}/>
      <Tab.Screen name="Sự kiện" component={Contact} options={{ tabBarIcon:()=>{ return( <Image source={require('../images/event.png')} style={{width:30,height:30}} resizeMode='stretch'/>)}}}/>
      <Tab.Screen name="Trang cá nhân" component={Contact} options={{ tabBarIcon:()=>{ return( <Image source={require('../images/profile.png')} style={{width:30,height:30}} resizeMode='stretch'/>)}}}/>
      
      
    </Tab.Navigator>
  );
}
const Stack = createNativeStackNavigator();

const  RootComponent = ({navigation}) => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Myevent" component={Myevent} />
        <Stack.Screen name="DetailEvent" component={DetailEvent} />
        <Stack.Screen name="DetailNew" component={DetailNew} />
        <Stack.Screen name="Dkcs" component={Dkcs} />
        <Stack.Screen name="Csrt" component={Csrt} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootComponent;