import React, {useState} from 'react';
import {View, Text, Button} from "react-native";
import {styles} from '../style/style'
export default function UseState(){
    //state contador para incrementar ou decrementar
    const[count, setCount] = useState(0); //count é uma variavel
    const addUm = () =>{
        setCount(count + 1) 
    }

    const removUm = () => {
        setCount (count - 1)
    }
    

    return(
        <View style = {styles.container}>
            <Text style = {styles.subtitleDark}>Exempo useState</Text> 
            <Text>{`\nValor de count: ${count} \n`}</Text>
            <Button
            onPress = {
                removUm
            }
            title = 'remova 1'/>
            
            <Button
            onPress = {
                addUm
            }
            title = 'adicione 1'/>

            <Button
            onPress = {
                () => setCount (0)
            }
            title = 'Zerar'/>
        </View>

    )
}