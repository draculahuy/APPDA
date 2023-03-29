import React, { Component } from 'react'
import{
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import Icon, { IconProps } from 'react-native-ionicons';
const  Signup = ({navigation}) => {
    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        {/* <Icon name="back" size={20} color="red" /> */}
            <View style={styles.line}>
                    <Text style={styles.text}>Họ tên</Text>
                    <TextInput placeholder="Họ tên" style={styles.input}></TextInput>
            </View>
            <View style={styles.line}>
                    <Text style={styles.text}>Email</Text>
                    <TextInput placeholder="Email" style={styles.input}></TextInput>
            </View>
            <View style={styles.line}>
                    <Text style={styles.text}>Số điện thoại</Text>
                    <TextInput placeholder="Số điện thoại" style={styles.input}></TextInput>
            </View>
            <View style={styles.line}>
                    <Text style={styles.text}>Mật khẩu</Text>
                    <TextInput placeholder="Mật khẩu" style={styles.input}></TextInput>
            </View>
            <View style={styles.line}>
                    <Text style={styles.text}>Nhập lại mật khẩu</Text>
                    <TextInput placeholder="Nhập lại mật khẩu" style={styles.input}></TextInput>
            </View>
            <TouchableOpacity style={{marginTop:20,justifyContent:'center', alignItems:'center',backgroundColor:'#3300FF', width:'60%', height:'7%',borderRadius:100, borderWidth:1, borderColor:'#00008B'}}
                onPress ={() => {
                navigation.navigate('MyTabs');
             }}>
                <Text style={{fontSize:20, color:'white', fontWeight:'bold'}}>Đăng ký</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    line: {
        // backgroundColor: 'red',
        width: '80%',
        height: 60,
        // flexDirection: 'row',
        marginTop: 15,
    },
    text:{
        width:"100%",
        // height:30,
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
    },
    input:{
        // backgroundColor:'blue',
        width:"100%",
        height:40,
        color: 'black',
        fontSize: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
    },
});

const style = StyleSheet.create({
    
  });
export default Signup;