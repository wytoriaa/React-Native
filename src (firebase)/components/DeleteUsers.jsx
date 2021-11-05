import React, {useState} from 'react';
import { Text, StyleSheet,View, Button, TextInput} from "react-native";
import firebase from '../../../reactfrbs-main/firebase';


export default function DeleteUsers({route, navigation}){

    const [ok,setOk] = useState(false);
    const key = route.params;
    const deleteUser = async () =>{
        const users = firebase.db.collection('users');
        await users.doc(key).delete()
        
        .then(
            ()=>{
                alert("deleted");
                setOk(true);
            }
        ).catch(
            ()=>alert ("não encontrado")
        )
    }

    if(ok){
        navigation.popToTop();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.h1}>Deseja excluir o User?</Text>
            <Button title="Sim" onPress={deleteUser}/> 
            {/**terá a função de excluir */}
            <Button title="Não" onPress={() => navigation.popToTop()}/>
            {/**aciona a função de remover todaas da pilha */}
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