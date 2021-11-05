import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {styles} from '../style/style'

export default function Header (){
    return (
        <View style = {styles.header}>
            <Text style = {styles.titleLight}>React Hooks</Text>
        </View>
    )
}