import React from 'react';
import {View, Text, StyleSheet} from "react-native";
export default function Footer(){
    return(
        <View style = {styles.ViewFooter}>
            <Text style = {styles.textFooter}>created with 💖 by Wytoria</Text>
            <Text style = {styles.textFooter}>copyright © 2021 todos os direitos reservados</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    ViewFooter:{
        height:60,
        backgroundColor: '#3D4C63',
        justifyContent:'center',
        alignItems: 'center'

    },
    textFooter:{
        color:'white',
        fontWeight:'bold',
        fontSize: 18,
        fontStyle: 'normal',
    }
})