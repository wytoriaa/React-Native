import React, {useState, createContext} from 'react';
import {View} from "react-native";
import ExUseContext from './ExUseContext';
import PizzaPG from './PizzaPG'

export const Pizzaria = createContext(); //criei o contexto

export default function Pizza(){ //estipulei os valores
    const [pizza, setPizza] = useState({
        sabor:'Marguerita',
        ingredientes: 'tomate, mussarela, oregano',
        valor: 35.00,
        adicional:'adicionar borda recheada com catupiry',
        modoPagamento:'dinheiro'
    });

    return (
    <View>   
        <Pizzaria.Provider value={{pizza, setPizza}}>
            <PizzaPG/>
        </Pizzaria.Provider>
    </View> 
    )
}

/**
 * Criar um contexto que armazene um state de um Pizza (object) com as seguintes propriedades
 * (sabor, ingredientes, valor, adicional, modoPagamento).  (OK)
 * 
 * Providencie(Provider) esses dados para dois componentes: Pizza e Pagamento. 
 * Em Pizza mostre os dados (sabor, ingredientes e adicional) em Pagamento (valor e modoPagamento)
 * 
 */
