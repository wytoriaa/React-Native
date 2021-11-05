import React from 'react';
import { Text, View, Button, Image, StyleSheet} from 'react-native';

export default function Produtos({navigation}){
    return (
        <View style ={{flex: 1, alignItems:'center', justifyContent:'center'}}>
            <View>
            <Text>Tela de produtos</Text>
            {/**<Image style={styles.tinyLogo}
                source={require ('../imagem/1.png')}/>*/}
            </View>
            <View>
            <Image style={styles.tinyLogo}
                source={{
                uri: 'https://conteudo.imguol.com.br/c/entretenimento/f9/2021/05/21/cafe-1621622952265_v2_900x506.jpg.webp',
                }}/>
            </View> 

            <Button 
            title = 'Detalhes' onPress ={() => navigation.navigate('Detalhes')}/>
            <Button 
            title = 'Home' onPress ={() => navigation.goBack()}/>
        </View>

        
    )
}
const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      display: 'flex',
      flexDirection:'row',  
      margin:5,  
      width: 100,
      height: 100,
    }
})