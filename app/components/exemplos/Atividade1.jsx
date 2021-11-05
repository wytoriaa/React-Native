import React, {createContext, useState} from 'react';
import {TextInput} from 'react-native'
import Filipe from './Filipe'
import Leide from './Leide';
import Almir from './Almir';
export const AtividadeContext = createContext();

export default function AtividadeComponente(){
    const[atividades, setAtividades] = useState('0');
    return ( 
    <AtividadeContext.Provider value={{atividades, setAtividades}}>
        <TextInput value={atividades} onChangeText={(valor) => setAtividades(parseInt(valor))}/>
        <Filipe/>
        <Leide/>
        <Almir/>
    </AtividadeContext.Provider>
    )
}