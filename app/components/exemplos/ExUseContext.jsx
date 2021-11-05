import React, {useContext} from 'react';
import { View, Text, Button } from 'react-native';
import {styles} from '../style/style'
import {ExemploContext} from './ExCriandoContexto';

export default function ExUseContext(){
    const {dados, setDados} = useContext(ExemploContext);

    return (
        <View style = {styles.titleDark}>
            <Text style = {styles.titleDark}>Usando o useContext</Text>
            <Text>Nome: {dados.nome}</Text>
            <Text>Email: {dados.email}</Text>
            <Button title='clique aqui'
            onPress = {() =>  setDados({
                nome:'Filipe',
                email:'filipe@filipe.com'
            })}></Button>
        </View>
    )
}

/** exercício: 
 * // 1º Criar contexto do numero de atividades
// 2º Prover o valor do numero de atividades
// 3º Use/Consumo do contexto

// EXERCÍCIO DE useContext
// Crie um TextInput, ele lê um valor
// de número (quantidade de atividades hoje)
// Crie 3 componentes Leide, Filipe, Almir, e com useContext
// forneça para os 3 a quantidade de exercícios.
// (Use sua criatividade para mostrar como cada um anuncia
// a quantidade de exercícios).

 */
