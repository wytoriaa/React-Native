import React, {useReducer, useState} from 'react';
import {View, Text, Button, TextInput} from "react-native";
import {styles} from '../style/style'

//é necessário uma função redutora (reducer) > recebe um estaço de uma ação
//e um valor inicial 
//dispatch = vai despachar a função

//1) criar a função redutora;
//2) definir o valor inicial; 
//3) criar o hook;

//export default function UseReducer(){
    //function reducer(estado, acao){ //nós definimos as ações; tb é possivel criar ação
        //switch(acao){
            //case 'incrementar':
                //return estado + 1;
            //case 'decrementar':
               // return estado - 1;
            //case 'zerar': //toda vez q eu quiser um novo caso, criar um novo case
                //return 0;    
        //}
    //}
    //const valorInicial = 0;
    //const [quantidade, dispatch] = useReducer(reducer, valorInicial)

    //return <View style = {styles.container}>
        //<Text>{quantidade}</Text>
        //<Button title = 'Incrementar' onPress = {() => dispatch('incrementar')}/>
        //<Button title = 'Decrementar' onPress = {() => dispatch('decrementar')}/>
        //<Button title = 'Zerar' onPress = {() => dispatch('zerar')}/>

    //</View>
//}
// Exercício de useReducer // Crie o exemplo acima e adicione as ações de: multiplicar por 2, 
// elevar ao quadrado usando Math.pow, dividir por 5. // Talvez: generalize a ação para passar o valor para incrementar no estado, 
// e nas outras ações. 
// inc // dec // zerar // multiplicar por 2 // Math.pow ao quadrado (2) // dividir por 5 // Deixar dinamico passando objeto como ação.

export default function UseReducer(){

    function reducer(estado, acao){ //nós definimos as ações; tb é possivel criar ação
        switch(acao.tipo){
            case 'incrementar':
                return estado + 1;
            case 'decrementar':
               return estado - 1;
            case 'multiplicar':
                return estado * acao.valor;
            case 'dividir por 5':
                return estado/acao.valor;
            case 'ao quadrado':
                return Math.pow(estado, acao.valor);
            case 'zerar': //toda vez q eu quiser um novo caso, criar um novo case
                return 0;    
        }
    }
    const valorInicial = 0;
    const [quantidade, dispatch] = useReducer(reducer, valorInicial)

    return <View style = {styles.container}>

        <Text>{quantidade}</Text>
        <Button title = 'Incrementar' onPress = {() => dispatch({tipo: 'incrementar', valor:1})}/>
        <Button title = 'Decrementar' onPress = {() => dispatch({tipo: 'decrementar', valor:1})}/>
        <Button title = 'Multiplicar' onPress = {() => dispatch({tipo: 'multiplicar', valor:2})}/>
        <Button title = 'Dividir' onPress = {() => dispatch({tipo: 'dividir por 5', valor:5})}/>
        <Button title = 'Eleve ao quadrado' onPress = {() => dispatch({tipo: 'ao quadrado', valor:2})}/>
        <Button title = 'Zerar' onPress = {() => dispatch({tipo: 'zerar'})}/>

    </View>
}
/** [10:17, 29/07/2021] +55 11 98719-6698: import React, { useReducer } from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {styles} from '../style/style';


//! Esse Hook precisa de uma funçao redutora(reducer);
//! e um valor inicial

//! 1° criar função redutora;
//! 2° definir um valor inicial;
//! 3° Criar o Hook useReducer

//! {tipo: 'incrementar'} - posso passa um objeto

export default function ExUseReducer(){

    // esta função somos nós quem definimos as ações
    //! 1°
    function reducer(state, action) {

    //    switch(action) {

    //         case 'incrementar':
    //             return state + 1;
            
    //         case 'decremetar':
    //             return state - 1;

    //         case 'zerar':
    //             return 0;

    //    …

import React, { useReducer } from 'react';
import { useState } from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {styles} from '../style/style';

export default function ExUseReducer(){

   
    function reducer(state, action) {

           switch(action.tipo) {

            case 'inc':
                return state + action.valorA;
            
            case 'dec':
                return state - action.valorB;

            case 'limpa':
                return 0;

            case 'multiplicar':
                return (action.valorA * action.valorB)

            case 'exponencial':
                return (Math.pow(state, action.valor))

            case 'dividir':
                return (state / action.valor )   
        }
    }
           //CASO QUEIRA USAR IF: 
    // if (action.tipo === "inc") {
    //   return state + action.valor;
    // } else if (action.tipo === "dec") {
    //   return state - action.valor;
    // } else if (action.tipo === "zerar") {
    //   return 0;
    // } else if (action.tipo === "mult") {
    //   return state * action.valor;
    // } else if (action.tipo === "pot") {
    //   return Math.pow(state, action.valor);
    // } else if (action.tipo === "div") {
    //   return state / action.valor;
    // }


    // 2°
    const valorInicial = 0;
    
    const [valorA, setValorA] = useState(0);
    const [valorB, setValorB] = useState(0);

    // 3°
    const [quantidade, dispatch] = useReducer(reducer, valorInicial);
   
    return (
        <View style={styles.header}>

            <Text style={styles.titleLight}>Exemplo criando Redux ExUseRedux</Text>
            <TextInput placeholder='Digite o valor A' onChangeText={(value)=>setValorA (Number(value)) }></TextInput>
            <TextInput placeholder='Digite o valor B'onChangeText={(value)=>setValorB (Number(value)) }></TextInput>
            <Text>{quantidade}</Text>


            <Button title='incrementar'
                onPress={() => dispatch({tipo:'inc', valorA})}
            />

            <Button title='decrementar'
                onPress={() => dispatch({tipo:'dec', valorB})}
            />

            <Button title='limpa'
                onPress={() => dispatch({tipo:'limpa'})}
            />
            <Button title='multiplicação'
                onPress={() => dispatch({tipo:'multiplicar', valorA , valorB})}
            />

            <Button title='exponencial'
                onPress={() => dispatch({tipo:'exponencial', valor: 2})}
            />

            <Button title='dividir'
                onPress={() => dispatch({tipo:'dividir',valor: 5})}
            />

           
            

           
        </View>

    );
} */