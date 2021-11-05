import React from 'react';
import {View, Text, StyleSheet,ScrollView} from 'react-native';

export default function Informativo (props){

        return (
            <View style = {flex.box}>
                 <Text style = {flex.titulo} >{props.titulo}</Text>
                 <Text style = {flex.textoQuadro}>{props.conteudo}</Text>
                 <Text style = {flex.textoQuadro}>{props.autor}</Text>
            </View>
        )
    }

const flex = StyleSheet.create ({
    box: {
        width: 400,
        height:200,
        margin: 3,
        marginHorizontal: 5,
        backgroundColor: '#748FBD',
        //flexDirection: 'column',
        display: 'flex',
        borderRadius: 10,
        alignContent: 'center'

    },
    titulo: {
        margin: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        justifyContent:'center',
        alignItems: 'center'
    },
    textoQuadro: {
        textAlign: 'center',
        fontWeight: 'normal',
        color: 'white',
        textAlign: 'center',
        justifyContent:'center',
        alignItems: 'center'
    }
})