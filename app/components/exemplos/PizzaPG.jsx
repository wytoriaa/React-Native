import React, {useContext} from 'react'
import { View,  Text, Button } from 'react-native';
import { Pizzaria } from './Pizzaria';

export default function PizzaPG(){
    const {pizza, setPizza} = useContext(Pizzaria);

    return(
        <View>
            <Text>Aqui na SoulPizza temos a seguinte opção de sabores e pagamentos</Text>
            <Text>Sabor: {pizza.sabor}</Text>
            <Text>Ingredientes: {pizza.ingredientes}</Text>
            <Text>Valor: {pizza.valor} a pizza de tamanho médio</Text>
            <Text>Adicionar: {pizza.adicional}</Text>
            <Text>Pagamento: {pizza.modoPagamento} com 5% de desconto</Text>

            <Button
            title = 'Faça a troca'
            onPress = {() =>{
                setPizza ({
                    sabor: 'Quatro queijos',
                    ingredientes:'queijo mussarela, queijo de bufala, queijo gongorzola, queijo prato',
                    valor: 40.00 ,
                    adicionar: 'calabresa e camarão',
                    modoPagamento: 'Débito'
                })
            }}/>
        </View>
    )
}