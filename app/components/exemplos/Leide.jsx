import React, {useContext} from 'react'
import { View,  Text } from 'react-native';
import { AtividadeContext } from './Atividade1'

export default function Leide(){
    const {atividades, setAtividades} = useContext(AtividadeContext);

    return(
        <View>
            <Text>A Leide é malvada, passa {atividades} por dia </Text>
        </View>
    )
}