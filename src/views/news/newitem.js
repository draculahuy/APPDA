import React, { Component, useState } from 'react'
import{
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    ScrollView
} from 'react-native'
import { useNavigation } from '@react-navigation/native';

const {width: screenWidth} = Dimensions.get('window');
// function NewItem(){
const NewItem = ({ newe }) => {
    let { url, title} = newe;
    const navigation = useNavigation();
// function NewItem(props){
//     let {url, title} = props.newe
    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate('DetailNew');
        }}>
            <View style={{ height: 280, width: '100%', paddingTop: 20, backgroundColor: 'white', marginTop: 10, borderRadius: 15 }}>
                <Image style={{ width: screenWidth * 0.95, height: '82%', borderRadius: 10, resizeMode: 'cover', marginLeft: screenWidth * 0.025 }} source={{ uri: url }} />
                <Text style={{ fontSize: 18, color: 'black', marginLeft: screenWidth * 0.025, fontWeight: 'bold', width: screenWidth * 0.95, height: '18%' }}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default NewItem;