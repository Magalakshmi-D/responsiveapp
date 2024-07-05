import { StyleSheet } from "react-native";
import {scale,verticalScale,moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imgStyle:{
        height:moderateScale(200),
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    imgtext:{
        color:'white',
        fontSize:scale(32),
        fontWeight:'bold'
    },
    input:{
        borderBottomWidth:1,
        borderBottomColor:'rgba(0,0,0,.08)',
        borderRadius:moderateScale(4),  
    }
});

export default styles;