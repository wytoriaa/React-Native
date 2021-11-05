import React from 'react';
import { ScrollView ,Text, View } from 'react-native';
import AtividadeComponente from '../exemplos/Atividade1';
import ExCriandoContexto from '../exemplos/ExCriandoContexto';
import ExUseCallback from '../exemplos/ExUseCallback';
import ExUseEffect from '../exemplos/ExUseEffect';
import ExUseMemo from '../exemplos/ExUseMemo';
import ExUseReducer from '../exemplos/ExUseReducer';
import ExUseState from '../exemplos/ExUseState';
import ExUseState2 from '../exemplos/ExUseState2';
import Atividade1 from '../exemplos/Atividade1'
import Pizzaria from '../exemplos/Pizzaria';
import {styles} from '../style/style'

export default function Content (){
    return (
        <View style = {styles.header}>
            <ScrollView>
            <Text style = {styles.titleDark}>Área de Exemplos</Text>
            {/**<ExCriandoContexto/> */}
            <ExUseEffect/>
            {/**<ExUseState/>*/}
            {/**<Pizzaria/>*/}
            <ExUseReducer/>
            </ScrollView>
        </View>
    )
}