import React from 'react';
import { useEffect, useState  } from 'react';
import { Text, StyleSheet,View, Button, TextInput} from "react-native";
import firebase from '../../../reactfrbs-main/firebase';


export default function EditUsers({route, navigation}){

    const [ok,setOk] = useState(false);
    const key = route.params;
    const [state, setState] = useState ({
        nome:'',
        email:'',
    });

    useEffect(
        () => navigation.addListener('focus', () => {
            userById(key);
        }
    ), []
    )

    const userById = async (id) => {
        const users = firebase.db.collection('users');
        const doc = await users.doc(id).get();
        setState(doc.data());
    }
        //a função doc() iremos passar como paramentro o id do documentos
        //doc.data() mostrará os dados no formato de objeto
    
    const handleInputChange = (name, value) =>{
        setState({
            ...state, [name]:value
        })
    }

    const editarUser = async () =>{

    const users = firebase.db.collection('users');
        //o comando update() realiza a alteração no doc com a key. o state sera atuaizado com os dados do update
        //a função then vai mostrar o alerta dizendo edit
        await users.doc(key).update(state).then(
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
            <Text style={styles.h1}>Editar Usuários</Text>
            <TextInput style={styles.input} placeholder="Nome" defaultValue={state.nome} onChangeText={
                (value) => handleInputChange ('nome', value)
            }/>
            <TextInput style={styles.input} placeholder="Email" textContentType= 'emailAddress'defaultValue={state.email} onChangeText={
                (value) => handleInputChange ('email', value)
            }/>

            <Button style={styles.input} title="Editar" onPress={editarUser}/>
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