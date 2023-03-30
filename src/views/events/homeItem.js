import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
const { width: screenWidth } = Dimensions.get('window');

const HomeItem = ({ event }) => {
  let { url, title, time, address } = event;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('DetailEvent');
      }}>
      <View
        style={{
          height: 300,
          width: '100%',
          paddingTop: 20,
          backgroundColor: 'white',
          marginTop: 10,
          borderRadius: 15,
        }}>
        <Image
          style={{
            width: screenWidth * 0.95,
            height: '68%',
            borderRadius: 10,
            resizeMode: 'cover',
            marginLeft: screenWidth * 0.025,
          }}
          source={{ uri: url }}
        />
        <Text
          style={{
            fontSize: 18,
            color: 'black',
            marginLeft: screenWidth * 0.025,
            fontWeight: 'bold',
            width: screenWidth * 0.95,
            height: '16%',
          }}>
          {title}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: screenWidth * 0.025,
            width: screenWidth * 0.95,
            height: '8%',
          }}>
          <Image
            source={require('../../images/time.png')}
            style={{ height: 18, width: 18 }}
          />
          <Text style={{ fontSize: 15, color: '#444444', marginLeft: 5 }}>
            {time}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: screenWidth * 0.025,
            width: screenWidth * 0.95,
            height: '8%',
          }}>
          <Image
            source={require('../../images/vitri.png')}
            style={{ height: 18, width: 18 }}
          />
          <Text style={{ fontSize: 15, color: '#444444', marginLeft: 5 }}>
            {address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HomeItem;