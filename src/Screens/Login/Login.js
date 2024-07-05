import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput } from 'react-native';
import { scale, verticalScale, moderateScale,moderateVerticalScale } from 'react-native-size-matters';
import styles from './styles';

const Login = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageBackground 
                 source={require('../../assets/images/babyimage.jpg')}
                 style={styles.imgStyle}
            >
                <Text style={styles.imgtext}>Login</Text>
            </ImageBackground>
            <View style={styles.input}>
                <Text>Email Address</Text>
                <TextInput placeholder='Enter Email Address' style={{padding:moderateVerticalScale(8)}} />
            </View>
        </View>
    );
};




//make this component available to the app
export default Login;
