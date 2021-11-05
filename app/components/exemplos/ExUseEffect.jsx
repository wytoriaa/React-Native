import React, {useState, useEffect} from 'react';
import {View, Text, Button} from "react-native";
import {styles} from '../style/style' 
 //para garantir sua ação o useEffect sempre terá uma função anonima dentro
export default function UseEffect(){
    const [count, setCount] = useState(0);
    const [verifica, setVerifica] = useState('Renderizou!')

    useEffect( //montagem e atualização
        () => {
            //alert (`estou sendo chamado!`)
            setVerifica (`Já foi renderizado ${count} vezes!`)
        }
    ), [count] //faz referencia ao estado que eu to usando no useEffect, essa indicação serve como proteção e evita erro de repetição em looping
    console.log(verifica)
    return(
        <View style= {styles.container}>
            <Text style={styles.subtitleDark}>Exemplo de useEffect</Text>
            <Text>{verifica}</Text>
            <Button title = 'Clique' onPress = {() => setCount (count + 10)} />
            {/**<Button title = 'Limpe' onPress = {() => setCount (0)} />*/}
        </View>
    )
}