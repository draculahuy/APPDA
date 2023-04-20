import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native'

const Login = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Image source={require('../images/logo1.png')} style={{ height: 150, width: 150, borderRadius: 100 }} />
                <Text style={{ fontWeight: 'bold', fontSize: 23, marginTop: 5, color: 'black' }}>Bắt đầu với</Text>
                <View style={styles.line}>
                    <Text style={styles.text}>Email</Text>
                    <TextInput placeholder="Nhập email" style={styles.input} autoCapitalize='none'></TextInput>
                </View>
                <View style={styles.line}>
                    <Text style={styles.text}>Mật khẩu</Text>
                    <View style={{ flexDirection: 'row', height: 40 }}>
                        <TextInput placeholder="Nhập mật khẩu" style={{
                            width: "100%",
                            height: 40,
                            color: 'black',
                            fontSize: 18,
                            borderBottomWidth: 1,
                            borderBottomColor: 'grey', paddingRight: 30
                        }}
                            autoCapitalize='none'>
                        </TextInput>
                        {/* <Image source={require('../images/hienmk.png')} style={{heigh:30,aspectRatio:1}}/> */}
                    </View>
                </View>
                <TouchableOpacity style={{ width: '80%' }}>
                    <Text style={{ fontSize: 16, width: '38%', marginLeft: '62%', marginTop: 5, color: 'gray', fontWeight: 'bold' }}>Quên mật khẩu</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, backgroundColor: '#0099FF', width: '80%', height: 40, borderRadius: 50 }}
                    onPress={() => {
                        navigation.navigate('MyTabs');
                    }}>
                    <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Đăng nhập</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Text style={{ fontSize: 16 }}>Bạn chưa có tài khoản? </Text>
                    <TouchableOpacity style={{}}
                        onPress={() => {
                            navigation.navigate('Signup');
                        }}>
                        <Text style={{ fontSize: 16, color: '#3333CC', fontWeight: 'bold' }}>Đăng ký</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 18, color: 'black', marginTop: 20 }}>Hoặc đăng nhập bằng tài khoản:</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 5, width: '50%' }}>
                    <TouchableOpacity>
                        <Image source={require('../images/fb.png')} style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../images/google.png')} style={styles.icon} />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    line: {
        // backgroundColor: 'red',
        width: '80%',
        height: 60,
        // flexDirection: 'row',
        marginTop: 10,
    },
    text: {
        width: "30%",
        // height:30,
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
    },
    input: {
        // backgroundColor:'blue',
        width: "100%",
        height: 40,
        color: 'black',
        fontSize: 18,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
    },
    icon: {
        width: 50,
        height: 50
    }

});

export default Login;