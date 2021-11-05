import React from 'react';
import {SafeAreaView, View,  Image, StyleSheet} from "react-native";
import { ScrollView} from 'react-native-gesture-handler';
import Informativo from './Informativo';
import Imagem from './Imagem';
import Saude from './Saude';

export default function Content(){
    return(
        <SafeAreaView>
        <ScrollView>
            <Informativo titulo = 'Bem-vindo a SoulHeath' conteudo = 'Este aplicativo foi criado para que você tenha todas as informações necesária em relação aos cuidados com a sua saúde física e mental, para ter uma vida saudavel e equilibrada!'/>
            <Informativo titulo = 'OMS alerta para impactos da pandemia na saúde mental' conteudo = 'A pandemia da COVID-19 terá um impacto de longo prazo na saúde mental das populações, advertem especialistas da Organização Mundial da Saúde (OMS) (...)entra em concordância com estudos científicos mostrando aumento das taxas de distúrbios psiquiátricos, como depressão e ansiedade, ao longo da crise sanitária.' autor = 'Vilhena Soares - Correio Braziliense'/>
            <Informativo titulo = 'Por que você deve parar tudo e respirar fundo agora' conteudo = 'A cada inspiração e expiração, temos a capacidade de mudar, em segundos, a maneira como pensamos e sentimos. Controlar a respiração — o tempo em que inspiramos e a profundidade como o fazemos — também pode combater o estresse e até mesmo tornar nossa mente mais aguçada.' autor = 'Por Michael Mosley, BBC 24/07/2021'/>
            <Saude/>
            <Imagem/>
            <Informativo titulo = 'O que o IMC pode dizer sobre seu corpo?' conteudo = 'Abaixo do peso (IMC entre 17 a 18,4) Possiveis sintomas que a magreza excessiva pode trazer: fadiga,stress,ansiedade; Peso normal (IMC entre 18,5 a 24,9) Menor risco de doenças cardíacas e vasculares;                                                                                  Acima do peso (IMC entre 25 a 29,9) Possiveis problemas que o peso excesso pode causar: má circulação, desaceleração do metabolismo, disturbio do sono'/>
            <Informativo titulo = 'A importância do exercício físico para a saúde mental' conteudo = 'Os Brasil está entre os países mais ansiosos do mundo e segundo o IBGE, a obesidade atinge um em cada quatro adultos brasileiros. Para ter qualidade vida é necessário encontrar o equilíbrio entre o corpo e a mente. A prática regular de atividade física é essencial tanto para a saúde física quanto para a saúde mental, pois além de ajudar a prevenir doenças, proporciona a sensação de bem estar e relaxamento.' autor = 'UinovaFapi Centro Universitário'/>   
        </ScrollView>
        </SafeAreaView>
    
    )
}
const flex = StyleSheet.create({
    contentView:{
        alignItems:'center'
    }
})