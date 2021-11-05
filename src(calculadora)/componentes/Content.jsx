import React from 'react';
import {View} from "react-native";
import {styles} from './style/style';
import Calculator from './Calculator';

export default function Content(){
    return(
        <View style = {styles.content}>
            <Calculator/>
        </View>
    
    )
}