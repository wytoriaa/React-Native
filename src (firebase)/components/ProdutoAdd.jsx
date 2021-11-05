import React, {useState} from 'react';
import { Text, StyleSheet,View, Button, TextInput} from "react-native";
import firebase from '../../../reactfrbs-main/firebase';


export default function ProdutoAdd({navigation}){

    const [ok,setOk] = useState(false);
    //essa const ok servira como verificação que sera usada para realizar o retorno ao app.js
    //se for false, redenrização confirmada; se for true direciona ao inicio 
    const [state, setState] = useState ({
        nome:'',
        departamento:'',
        preco:'',
        fabricante:'',
        status: ''
    });
    //state/useState receberão as informações do firebase
    const handleInputChange = (name, value) => {
        setState({
            ...state, [name]:value
        })
    }
    //essa função servirá para mudança automatica no state(estado)
    const ProdutoAdd = async () => {
        await firebase.db.collection('produtos').add(state).then(
            () => {
                alert('salved');
                //para quando a deleção do setOk for alterado para true e renderizado
                setOk(true);
            }
        ).catch(
            () => alert ("não foi possivel inserir")
        )
    }
    //inserir uma collection. atraves dessa função assincrona (async) com await sera acionado o comando de add()
    //o add ira inserir o objeto dentro da collection users; criará um doc com uma id aleatoria com as informações
    //a função then() vai mostrar a mensagem de alerta dizendo q foi valdo, caso n consiga inserir, sera acionado o catch (pegar)
    if(ok){
        alert('entrou');
        navigation.popToTop();
    }
    //qnd ocorrer a renderização por conta da exclusao, por ok ser true o if é ativado e retorna
    //para a pagina inicial 
    return (
        <View style={styles.container}>
            <Text style={styles.h1}>Adicionar Produtos</Text>
            <TextInput style={styles.input} placeholder="Nome" defaultValue={state.nome} onChangeText={
                (value) => handleInputChange ('nome', value)
            }/>
            <TextInput style={styles.input} placeholder="Departamento" defaultValue={state.departamento} onChangeText={
                (value) => handleInputChange ('departamento', value)
            }/>
            <TextInput style={styles.input} placeholder="Fabricante" defaultValue={state.fabricante} onChangeText={
                (value) => handleInputChange ('fabricante', value)
            }/>
            <TextInput style={styles.input} placeholder="Preço"  defaultValue={state.preco} onChangeText={
                (value) => handleInputChange ('preco', value)
            }/>
            <TextInput style={styles.input} placeholder="Status" defaultValue={state.status} onChangeText={
                (value) => handleInputChange ('status', value)
            }/>

            <Button style={styles.input} title="Adicionar" onPress={ProdutoAdd}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding:12
    },

    h1:{
        fontSize:20,
        fontWeight:'bold',
        padding:12
    },

    input:{
        height:60,
        width:'90%',
        borderWidth:1,
        padding:10,
        marginTop:5
    },

});