import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import {styles} from './style/style';
export default function Calculator(){
    //const [texto, setTexto] = useState('')
    const [valores, setValores] = useState({
        x: 0,
        y: 0
    });
    const [result, setResult] = useState(0);

    console.log(valores);
    return(
        <View>
            <TextInput
            keyboardType = 'numeric' 
            style = {css.input}
            placeholder = "digite o valor de X"
            onChangeText = {
                (valor) => setValores({
                    ...valores, x: parseInt(valor)
            
                })
            }
            ></TextInput>

            <TextInput 
            keyboardType = 'numeric'
            style = {css.input}
            placeholder = "digite o valor de Y"
            onChangeText = {
                (valor) => setValores({
                    ...valores, y: parseInt(valor)
                })
            }
            ></TextInput>

            <View style = {styles.line}>
            <TouchableOpacity style = {styles.button}
            onPress = {() => setResult (valores.x + valores.y)}>
            <Text style={styles.textButton}> ➕ </Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.button}
            onPress = {() => setResult (valores.x - valores.y)}>
            <Text style={styles.textButton}> ➖ </Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.button}
            onPress = {() => setResult (valores.x * valores.y)}>
            <Text style={styles.textButton}> ✖ </Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.button}
            onPress = {() => setResult (valores.x / valores.y)}>
            <Text style={styles.textButton}> ➗ </Text>
            </TouchableOpacity>
            
            </View>
            <View style ={styles.textButton}>
            <Text>O resultado é {result}</Text>
            </View>

            </View>
    )
}
const css = StyleSheet.create({
    input:{
        padding: 10,
        borderWidth:2,
        margin:5,
        fontSize: 16,
        borderColor: "#10006B",
        borderRadius: 5, 
        backgroundColor: 'white',
        textAlign: 'center'
    },
    textFooter:{
        color:'white',
        fontWeight:'bold',
        fontSize: 18,
        fontStyle: 'normal',
        textAlign: 'center'
    }
})
