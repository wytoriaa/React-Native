import React, {useContext} from 'react'
import { View, Text } from 'react-native';
import { AtividadeContext } from './Atividade1'

export default function Filipe(){
    const {atividades, setAtividades} = useContext(AtividadeContext);

    return(
        <View>
            <Text>Hoje teremos: {atividades} </Text>
        </View>
    )
}