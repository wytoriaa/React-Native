import React, {useState} from 'react';
import firebase from '../../firebase';
import { StyleSheet, TextInput, Text, View, Button, ActivityIndicator} from 'react-native';
import { useEffect, useContext } from 'react';
import {UserContext} from './UserContext';


export default function Login(){

    const {logado, deslogado} = useContext(UserContext);
    const [loading, setLoading] = useState(true);
    const[state, setState] = useState({
        email:'',
        senha:'',
        msg:''
    })


    // verifica se é um novo newUser
    const [newUser, setNewUser] =useState(false);


    const handleInputChange = (name,value) => {
        setState ({
            ...state, [name]:value
        })
    }

    useEffect(
        () => {
            const auth = firebase.auth;
            const unsubscribed = auth.onAuthStateChanged(
                user => {
                    if(user){
                        if(user.emailVerified){
                            logado(user);
                        }else{
                            auth.signOut();
                            deslogado();
                            setLoading(false);
                        }
                    }else{
                        setLoading(false);
                    }
                }
            )

            return () => {
                unsubscribed();
            }
        },[]
    )
    const login = async () => {
        const auth = firebase.auth;
        const {email, senha} = state;
        try{
            const resposta = await auth.signInWithEmailAndPassword(email, senha);
        }catch(error){
            setState({
                ...state, msg: 'email ou senha inválidos'
            })
        }
    }
    const cadastrar = async () =>{
        const auth = firebase.auth;
        const {email, senha} = state;
        if(senha.length >= 6) {
            try{
                const resposta = await auth.createUserWithEmailAndPassword (email, senha);
                auth.currentUser.sendEmailVerification();
                setNewUser(false);
                setState({
                    ...state, msg: "Verifique sua conta de email"
                })
            }catch(error){
                setState({
                    ...state, msg: "não foi possível cadastrar o usuário"
                })
            }
        }else{
            setState({
                ...state, msg: "senha deve conter no mínimo 6 caracteres"
            })
        }
    }

    if(loading){
        return <ActivityIndicator/>
    }
    return(
        <View style={styles.loginView}>
            <View style={styles.formView}>
                <Text>{newUser ? "Novo Usuário" : "Login"}</Text>
                {/* newUser é falso ele mostra o login se for verdadeiro mostra novo usuário */}
                <TextInput style={styles.input} 
                    placeholder='email'
                    defaultValue={state.email}
                    onChangeText={(value)=>handleInputChange('email', value)}/>
                    {/* handleInputChange para fazer alteração de estado */}

                <TextInput style={styles.input} 
                    placeholder='senha'
                    defaultValue={state.senha}
                    onChangeText={(value)=>handleInputChange('senha', value)}
                    secureTextEntry={true}/>
                    {/* secureTextEntry - serve para dizer que o campo não pode mostrar as informações  */}

                {newUser ?
                <Button title='Cadastrar' onPress={cadastrar}/>:
                <Button title='Logar' onPress={login}/>
                }

                {/* newUser se sim Cadastrar se não login */}
                <Text style={styles.msg}>{state.msg}</Text>
                <Text onPress={() => setNewUser(true)}>Cadastre-se</Text>   

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    loginView:{
        width:'100%',
        flex:1, 
        justifyContent:'center',
        alignItems:'center',
    },

    button:{
        marginBottom:50,
        backgroundColor:'yellow',
    },

    formView:{
        width:'80%',
    },

    input:{
        color: 'red',
        fontSize:16,
        padding:5,
        margin:5
    },

    msg:{
        color:'red'
    },



})