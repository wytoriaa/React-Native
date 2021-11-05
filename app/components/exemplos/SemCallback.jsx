import React, { useState } from "react"; 

import { View, TextInput, TouchableOpacity, Text } from "react-native"; 

 
 
 

export default function Depositar() { 

 
 

  const [valor, setValor] = useState({ 

      Deposito: 0, 

  }) 

 
 

    const [calcular, setCalcular] = useState({ 

        resultado : '', 

    }); 

     

    const handleInputChange = (parametro, value) => { 

        setValor({ 

            ...valor, [parametro]: value 

        }) 

    }  

     

        const deposito = () => { 

           

           let deposita = ( valor.Deposito * 1.7 ).toFixed(2) 

         

            if  (deposita){ 

                setCalcular({ 

                    ...calcular, resultado: `R$ ${deposita} , aqui na SoulMili seu dinheiro rende automaticamente 70% do valor inicial.` 

                }) 

 
 

            }             } 

         
 

    return ( 
        <View> 

            <TextInput placeholder="Seu nome" 

                keyboardType='' 

                onChangeText={(entrada) => handleInputChange("Deposito",entrada) 

                    } /> 

            <TextInput placeholder="Digite seu peso, ex: 74.5" 

                keyboardType='numeric' 

                onChangeText={(entrada) => handleInputChange("Deposito",entrada) 

                    }/> 
        </View> 
)}               