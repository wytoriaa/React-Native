import React from 'react';
import { Text, View, Button } from 'react-native';

export default function Detalhes({navigation}){
    return (
        <View style ={{flex: 1, alignItems:'center', justifyContent:'center'}}>
            <Text>Tela de detalhes</Text>
            <Button 
            title = 'Detalhes' onPress ={() => navigation.push('Detalhes')}/>
            <Button 
            title = 'Home' onPress ={() => navigation.goBack()}/>
        </View>
    )
}