import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
export default function Header(){
    return(
        <View style = {styles.ViewHeader}>
            <Text style = {styles.textHeader}>
                React Calculator 🧮 </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    ViewHeader:{
        height:80,
        backgroundColor: '#816FE8',
        justifyContent:'center',
        alignItems: 'center',
        marginTop: 0,
    },
    textHeader:{
        color:'white',
        fontWeight:'bold',
        fontSize: 18,
        fontStyle: 'normal',
    }
})