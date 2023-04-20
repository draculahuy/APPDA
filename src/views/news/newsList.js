import React, { Component, useState } from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    ScrollView
} from 'react-native'
import NewItem from './newitem'
import Home1 from '../events/homeList';
import Icon from 'react-native-vector-icons/FontAwesome5';
const { width: screenWidth } = Dimensions.get('window');

const Tintuc = ({ navigation }) => {
    const [news, setNews] = useState([
        {
            url: 'https://sansukien.com/wp-content/uploads/2023/03/vietnam-expo-hanoi-2023-april.jpg',
            title: 'VIETNAM EXPO HANOI 2023 – Hội chợ Thương mại Quốc tế Việt Nam'
        },
        {
            url: 'https://sansukien.com/wp-content/uploads/2022/12/lich-vietbuild-2023-1.jpg',
            title: 'VIETBUILD HCM 2023 – Triển lãm quốc tế chuyên ngành xây dựng'
        },
        {
            url: 'https://sansukien.com/wp-content/uploads/2023/03/hoi-cho-thai-lan-tan-binh-2023-april.jpg',
            title: 'Hội chợ mua sắm và ẩm thực Thái Lan Tân Bình 2023'
        },
        {
            url: 'https://sansukien.com/wp-content/uploads/2023/03/hoi-cho-thai-lan-nguyen-du-2023.jpg',
            title: 'Hội chợ mua sắm và ẩm thực Thái Lan Nguyễn Du 2023'
        },
        {
            url: 'https://sansukien.com/wp-content/uploads/2022/12/vietbaby-fair-hcm-2023.jpg',
            title: 'VIETBABY FAIR HCM 2023 – Triển lãm sản phẩm dịch vụ cho Mẹ bầu, Mẹ & em bé tại TP. HCM',
        }
    ])
    return (
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: '#0099FF', color: 'white', height: 50, width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('MyTabs');
                }}>
                    <Image source={require('../../images/back.png')} style={{ height: 20, width: 20, marginLeft:10 }} />
                </TouchableOpacity>
                <Text style={{ width: '80%', fontSize: 25, color: 'white', fontWeight: 'bold', justifyContent: 'center' }}>Tin tức</Text>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Setting');
                }}>
                    <Image source={require('../../images/setting1.png')} style={{ height: 30, width: 30}} />
                </TouchableOpacity>
                <Text style={{ fontSize: 25, color: 'white', fontWeight: 'bold' }}></Text>
            </View>
            <ScrollView style={{ backgroundColor: '#DDDDDD' }}>
                {news.map(eachNews => <NewItem newe={eachNews} />)}
            </ScrollView>
        </View>
    );
};

// const styles = StyleSheet.create({

// });

export default Tintuc;