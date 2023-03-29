import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import{
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import Login from './login';
import Dkcs from './dkandcs/dkcs';
import Csrt from './dkandcs/csrt';

const  Setting = ({navigation}) => {
    return(
        <View style={{flex:1,backgroundColor:'#DDDDDD'}}>
            <View style={{backgroundColor:'#0099FF', color:'white', height:50,width:'100%', justifyContent:'center',alignItems:'center'}}>   
                <Text style={{fontSize:25, color:'white'}}>Cài đặt</Text>
            </View>
            <View style={{backgroundColor:'white', marginTop:20}}>
                <Text style={{fontSize:20, color: 'black', width: '100%', height:40, marginTop:10,borderBottomWidth:1,borderBottomColor:'#DDDDDD',paddingLeft:10}}>Thông tin tài khoản</Text>
                <Text style={{fontSize:20, color: 'black', width: '100%', height:40,marginTop:10,borderBottomWidth:1,borderBottomColor:'#DDDDDD',paddingLeft:10}}>Mật khẩu và bảo mật</Text>
                <Text style={{fontSize:20, color: 'black', width: '100%', height:40,marginTop:10,paddingLeft:10}}>Thiết lập chế độ riêng tư</Text>
            </View>
            <View style={{backgroundColor:'white', marginTop:20}}>
                <Text style={{fontSize:20, color: 'black', width: '100%', height:40, marginTop:10,borderBottomWidth:1,borderBottomColor:'#DDDDDD',paddingLeft:10}}>Phiên bản ứng dụng</Text>
                <TouchableOpacity
                    style={{justifyContent:'center', alignItems:'center', width:'100%', height:40}}
                    onPress = {() => {
                        navigation.navigate('Dkcs');
                    }
                    }>
                    <Text style={{fontSize:20, color: 'black', width: '100%', height:40,marginTop:10,borderBottomWidth:1,borderBottomColor:'#DDDDDD',paddingLeft:10}}>Điều khoản và điều kiện</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{justifyContent:'center', alignItems:'center', width:'100%', height:50}}
                    onPress = {() => {
                        navigation.navigate('Csrt');
                    }
                    }>
                    <Text style={{fontSize:20, color: 'black', width: '100%', height:40,marginTop:10,paddingLeft:10}}>Chính sách quyền riêng tư</Text>
                </TouchableOpacity>
                
            </View>
            <TouchableOpacity
                    style={{justifyContent:'center', alignItems:'center',backgroundColor:'#0000CC', width:'100%', height:50, marginTop:20}}
                    onPress = {() => {
                        navigation.navigate('Login');
                    }
                    }>
                    <Text style={{fontSize:20, color:'white', fontWeight:'bold'}}>Đăng xuất</Text>
                    </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default Setting;