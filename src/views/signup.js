import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import Icon, { IconProps } from 'react-native-ionicons';
const Signup = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Image source={require('../images/logo1.png')} style={{ height: 150, width: 150, borderRadius: 100 }} />
            <View style={styles.line}>
                <Text style={styles.text}>Họ tên</Text>
                <TextInput placeholder="Nhập họ têm" style={styles.input} autoCapitalize='none'></TextInput>
            </View>
            <View style={styles.line}>
                <Text style={styles.text}>Email</Text>
                <TextInput placeholder="Nhập email" style={styles.input} autoCapitalize='none'></TextInput>
            </View>
            <View style={styles.line}>
                <Text style={styles.text}>Số điện thoại</Text>
                <TextInput placeholder="Nhập số điện thoại" style={styles.input} autoCapitalize='none'></TextInput>
            </View>
            <View style={styles.line}>
                <Text style={styles.text}>Mật khẩu</Text>
                <TextInput placeholder="Nhập mật khẩu" style={styles.input} autoCapitalize='none'></TextInput>
            </View>
            <View style={styles.line}>
                <Text style={styles.text}>Xác nhận</Text>
                <TextInput placeholder="Xác nhận mật khẩu" style={styles.input} autoCapitalize='none'></TextInput>
            </View>
            <TouchableOpacity
                style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, backgroundColor: '#0099FF', width: '80%', height: 40, borderRadius: 50 }}
                onPress={() => {
                    navigation.navigate('MyTabs');
                }}>
                <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Đăng ký</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    line: {
        // backgroundColor: 'red',
        width: '80%',
        height: 60,
        marginTop: 10,
    },
    text: {
        width: "30%",
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
});

const style = StyleSheet.create({

});
export default Signup;