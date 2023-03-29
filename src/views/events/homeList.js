import React, { Component, useState } from 'react'
import{
    View,
    Text,
    TextInput,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    ScrollView
} from 'react-native'
import HomeItem from './homeItem';
const {width: screenWidth} = Dimensions.get('window'); 
const  Home1 = ({navigation}) => {
    const [events, setEvent] = useState([
        {
            url: 'https://sansukien.com/wp-content/uploads/2023/03/vietnam-expo-hanoi-2023-april.jpg',
            title: 'VIETNAM EXPO HANOI 2023 – Hội chợ Thương mại Quốc tế Việt Nam',
            time:'09:00 | 05/04/2023',
            address: 'Trung tâm Triển lãm Quốc tế I.C.E Hà Nội'
        },
        {
            url:'https://sansukien.com/wp-content/uploads/2022/12/lich-vietbuild-2023-1.jpg',
            title: 'VIETBUILD HCM 2023 – Triển lãm quốc tế chuyên ngành xây dựng',
            time:'08:30 | 12/04/2023',
            address: 'Nhà thi đấu Phú Thọ – Trung tâm huấn luyện và thi đấu TDTT Phú Thọ'
        },
        {
            url:'https://sansukien.com/wp-content/uploads/2023/03/hoi-cho-thai-lan-tan-binh-2023-april.jpg',
            title: 'Hội chợ mua sắm và ẩm thực Thái Lan Tân Bình 2023',
            time:'09:00 | 19/04/2023',
            address: 'Trung tâm Triễn Lãm và Hội chợ Tân Bình (TBECC)'
        },
        {
            url:'https://sansukien.com/wp-content/uploads/2023/03/hoi-cho-thai-lan-nguyen-du-2023.jpg',
            title: 'Hội chợ mua sắm và ẩm thực Thái Lan Nguyễn Du 2023',
            time:'09:00 | 10/05/2023',
            address: 'CLB Văn Hóa TDTT Nguyễn Du'
        },
        {
            url:'https://sansukien.com/wp-content/uploads/2022/12/vietbaby-fair-hcm-2023.jpg',
            title: 'VIETBABY FAIR HCM 2023 – Triển lãm sản phẩm dịch vụ cho Mẹ bầu, Mẹ & em bé tại TP. HCM',
            time:'10:00 | 01/06/2023',
            address: 'Trung tâm Triển lãm và Hội nghị Sài Gòn (SECC)'
        }
    ])
    return(
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: '#0099FF', color: 'white', height: 50, width: '100%', paddingLeft: 10, alignItems: 'center', flexDirection: 'row' }}>
                <Image source={require('../../images/search1.png')} style={{ height: 30, width: 30, marginRight: 10 }} />
                <TextInput placeholder="Nhập để tìm kiếm" style={{ height: 40, width: screenWidth - 100, fontSize: 18, marginTop: 10, color: 'white', borderBottomWidth: 1, borderBottomColor: 'white', marginBottom: 10 }} autoCapitalize='none'></TextInput>
                <Image source={require('../../images/setting1.png')} style={{ height: 30, width: 30, marginLeft: 10, marginRight: 10 }} />
                <Text style={{ fontSize: 25, color: 'white', fontWeight: 'bold' }}></Text>
            </View>
            <ScrollView style={{backgroundColor:'#DDDDDD'}}>
                {events.map(eachEvents => <HomeItem event = {eachEvents}/>)}
            </ScrollView>
        </View>
    );
};

export default Home1;