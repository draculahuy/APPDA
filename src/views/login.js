import React, { Component } from 'react'
import{
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native'

const  Login = ({navigation}) => {
    return(
        <ScrollView>
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Image source={require('../images/logo1.png')} style={{height:200,width:200, borderRadius:100}}/>
                <View style={styles.line}>
                    <Text style={styles.text}>Email</Text>
                    <TextInput placeholder="Email" style={styles.input } autoCapitalize='none'></TextInput>
                </View>
                <View style={styles.line}>
                    <Text style={styles.text}>Mật khẩu</Text>
                    <View style={{flexDirection: 'row',height:40}}>
                        <TextInput placeholder="Mật khẩu" style={{width:"100%",
                            height:40,
                            color: 'black',
                            fontSize: 18,
                            borderBottomWidth: 1,
                            borderBottomColor: 'grey', paddingRight: 30}}
                            autoCapitalize='none'>
                        </TextInput>
                        {/* <Image source={require('../images/hienmk.png')} style={{heigh:30,aspectRatio:1}}/> */}
                    </View>
                </View>
                <View style={{width:'100%', height: "20%",marginTop: 50, justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity
                    style={{justifyContent:'center', alignItems:'center',backgroundColor:'#0000CC', width:'60%', height:40,borderRadius:100, borderWidth:1, borderColor:'#4169E1'}}
                    onPress = {() => {
                        navigation.navigate('MyTabs'); 
                    }}>
                    <Text style={{fontSize:20, color:'white', fontWeight:'bold'}}>Đăng nhập</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginTop:20,justifyContent:'center', alignItems:'center',backgroundColor:'#0000CC', width:'60%', height:40,borderRadius:100, borderWidth:1, borderColor:'#00008B'}}
                    onPress ={() => {
                        navigation.navigate('Signup');
                    }}>
                    <Text style={{fontSize:20, color:'white', fontWeight:'bold'}}>Đăng ký</Text>
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
        marginTop: 15,
    },
    text:{
        width:"30%",
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
        fontSize: 18,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
    },

});

export default Login;