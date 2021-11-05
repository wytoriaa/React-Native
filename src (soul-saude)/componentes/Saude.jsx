import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity, StyleSheet, styles, Button} from 'react-native';
export default function Calculator(){
    //const [texto, setTexto] = useState('')
    const [valores, setValores] = useState({
        a: 0,
        p: 0
    });
    const [result, setResult] = useState(0);
    console.log(valores);
    return(
        <View style = {css.borderView}>
            <Text style = {css.textTitle}>Você sabe seu IMC?</Text>
            <TextInput
            keyboardType = 'numeric' 
            style = {css.input}
            placeholder = "Ex: 80kg"
            onChangeText = {
                (valor) => setValores({
                    ...valores, p: parseFloat(valor)
            
                })
            }
            ></TextInput>

            <TextInput 
            keyboardType = 'numeric'
            style = {css.input}
            placeholder = "Ex: 1,70 m"
            onChangeText = {
                (valor) => setValores({
                    ...valores, a: parseFloat(valor)
                })
            }
            ></TextInput>

            <Button title="Calcule seu IMC" style={css.button} onPress = {() => 
                setResult (valores.p /( valores.a * valores.a))}></Button>

            
            <Text style = {css.textTitle}>O resultado é {result}</Text>

            </View>
    )
}
const css = StyleSheet.create({
    input:{
        padding: 10,
        borderWidth:2,
        fontSize: 16,
        borderColor: "#10006B",
        borderRadius: 5, 
        backgroundColor: 'white',
        textAlign: 'center',
    },
    borderView:{
        borderWidth:1,
        borderColor:'#748FBD',
        backgroundColor: '#748FBD',
        margin: 3,
        borderRadius: 10
    },

    textTitle:{
        color:'black',
        fontWeight:'bold',
        fontSize: 18,
        fontStyle: 'normal',
        textAlign: 'center'
    },
    button:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 2,
        margin: 5,
        
    },
    textButton:{
        textAlign: 'center',
    },
    line:{
        width: 300,
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        //justifyContent:'space-around',
        //justifyContent: 'center',
        textAlign: 'center'
    }    
})
