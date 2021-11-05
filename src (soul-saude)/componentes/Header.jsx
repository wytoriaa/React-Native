import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
export default function Header(){
    return(
        <View style = {styles.ViewHeader}>
            <Text style = {styles.textHeader}>
                SoulHealth 🩺  </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    ViewHeader:{
        height:100,
        backgroundColor: '#3D4C63',
        justifyContent:'center',
        alignItems: 'center',
        textAlign: 'right'
    },
    textHeader:{
        color:'white',
        fontWeight:'bold',
        fontSize: 40,
        fontStyle:'normal',
    }
})