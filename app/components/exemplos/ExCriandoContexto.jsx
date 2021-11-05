import React, {useState, createContext} from 'react';
import {View} from "react-native";
import ExUseContext from '../exemplos/ExUseContext';

//1º criar o contexto (OK)
//2º prover valores 
export const ExemploContext = createContext();

export default function ExCriandoContexto(){
    const [dados, setDados] = useState({
        nome: 'Wytoria Rodrigues',
        email: 'wytoria@wytoria.com.br',
    });

    return (
    <View>   
        <ExemploContext.Provider value={{dados, setDados}}>
            <ExUseContext/>
        </ExemploContext.Provider>
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
// export const ExemploContext = createContext ();
// export default function ExCriandoContexto(){
//     const [nomes, setNomes] = useState({
//         Leide: 0,
//         Almir: 1,
//         Filipe: 2
//     });
//     return (
//         <View>
//             <ExemploContext.Provider value ={{nomes, setNomes}}>
//                 <ExUseContext/>
//             </ExemploContext.Provider>
//         </View>
//     )
// }

