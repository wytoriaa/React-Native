import React, {useContext} from 'react'
import { View, Text } from 'react-native';
import { AtividadeContext } from './Atividade1'

export default function Almir(){
    const {atividades, setAtividades} = useContext(AtividadeContext);

    return(
        <View>
            <Text>O Almir é bonzinho, só passou {atividades}... POR ENQUANTO </Text>
        </View>
    )
}