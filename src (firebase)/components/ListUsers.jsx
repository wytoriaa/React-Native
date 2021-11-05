import React, { useEffect, useState } from 'react';
import firebase from '../../firebase';
import { StyleSheet, Button, Text, View, ActivityIndicator, Flatlist, FlatList } from 'react-native';

export default function ListUsers({ navigation }) {
    const [loading, setLoading] = useState(true);
    const [state, setState] = useState([]);

    useEffect(
        () => navigation.addListener('focus', () => {
            //focus faz a função voltar a funcionar com os dados atualizados
            pegaDados()
        }), [] //[] serve para evitar o looping no código
    )
    console.log(state);
        //recebendo todos os docs de users
    const pegaDados = async () => {
        const users = firebase.db.collection("users");
        //iniciando a referencia do firebase firestore, acessecando a collection do users( documento criado no firebase)
        const querySnapshot = await users.get();
        //constante que armazena o que querySnapshot esperando o retorno pela função awai.get()
        //essa função await retornara o valor para o querysnapshot
        const dados = querySnapshot.docs;
        //os dados estão recebendo os documentos alinhados no formato de array
        const listUsers = [];
        //forEach irá trazer doc por doc para receber e mostrar os dados organizados em object por meio do comando data()
        dados.forEach(
            doc => {
                listUsers.push({
                    ...doc.data(),
                    key: doc.id
                })
            })
        setState(listUsers);
        setLoading(false);
    }
    if (loading) {
        return <ActivityIndicator />
    }

    return (
        <View style={styles.container}>
            <Text style={styles.h1}>Lista de usuários</Text>
            <FlatList
                data={state}
                renderItem={({ item }) => (
                    <View style={styles.container}>
                        <Text>codigo: {item.key}</Text>
                        <Text>Nome: {item.nome}</Text>
                        <Text>Email: {item.email}</Text>
                        <Button
                            title="editar" color='yellow'
                            onPress={() => { navigation.navigate('EditUsers', item.key) }} />
                            {/**key tem a mesma função de id, ou seja, serve para identificar o que precisa ser alterado */}

                        <Button
                            title="excluir" color='red'
                            onPress={() => { navigation.navigate('DeleteUsers', item.key) }}
                        />
                        <Button
                            title="adicionar" color ='green'
                            onPress={() => { setLoading(true); navigation.navigate('AddUsers') }}/>
                    </View>
                )}/>
        </View>
    )}
    
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
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
    alert:{
        backgroundColor:'red',
    }

});