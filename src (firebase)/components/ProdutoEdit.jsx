import React from 'react';
import { useEffect, useState  } from 'react';
import { Text, StyleSheet,View, Button, TextInput} from "react-native";
import firebase from '../../../reactfrbs-main/firebase';


export default function ProdutoEdit({route, navigation}){

    const [ok,setOk] = useState(false);
    const key = route.params;
    const [state, setState] = useState ({
        nome:'',
        departamento:'',
        preco:'',
        fabricante:'',
        status: ''
    });

    useEffect(
        () => navigation.addListener('focus', () => {
            produtosById(key);
        }
    ), []
    )

    const produtosById = async (id) => {
        const produtos = firebase.db.collection('produtos');
        const doc = await produtos.doc(id).get();
        setState(doc.data());
    }
        //a função doc() iremos passar como paramentro o id do documentos
        //doc.data() mostrará os dados no formato de objeto
    
    const handleInputChange = (name, value) =>{
        setState({
            ...state, [name]:value
        })
    }

    const produtoEdit = async () =>{

    const produtos = firebase.db.collection('produtos');
        //o comando update() realiza a alteração no doc com a key. o state sera atuaizado com os dados do update
        //a função then vai mostrar o alerta dizendo edit
        await produtos.doc(key).update(state).then(
            () => {
                alert("edited");
                setOk(true);
            }
        ).catch(
            () =>alert ("não foi possivel editar")
        )
    }

    if(ok){
        navigation.popToTop();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.h1}>Editar produtos</Text>
            <TextInput style={styles.input} placeholder="Nome" defaultValue={state.nome} onChangeText={
                (value) => handleInputChange ('nome', value)
            }/>
            <TextInput style={styles.input} placeholder="Departamento" defaultValue={state.departamento} onChangeText={
                (value) => handleInputChange ('departamento', value)
            }/>
            <TextInput style={styles.input} placeholder="Fabricante" defaultValue={state.fabricante} onChangeText={
                (value) => handleInputChange ('fabricante', value)
            }/>
            <TextInput style={styles.input} placeholder="Preço" defaultValue={state.preco} onChangeText={
                (value) => handleInputChange ('preco', value)
            }/>
            <TextInput style={styles.input} placeholder="Status"  defaultValue={state.status} onChangeText={
                (value) => handleInputChange ('status', value)
            }/>

            <Button style={styles.input} title="Editar" onPress={produtoEdit}/>
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