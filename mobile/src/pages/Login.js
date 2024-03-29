import React, { useState, useEffect } from 'react'
import { 
    View, Text, Image, StyleSheet, TextInput, AsyncStorage,
    KeyboardAvoidingView, TouchableOpacity, Platform } from 'react-native'

import Api from '../services/api'
import logo from '../assets/logo.png'

export default function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [techs, setTechs] = useState('')

    useEffect(() => {
        AsyncStorage.getItem('user').then(user => {
            if (user) {
                navigation.navigate('List')
            }
        }, [])
    })
    async function handleSubmit() {
        const response = await Api.post('/sessions', { email })
        const { _id } = response.data
        await AsyncStorage.setItem('user', _id)
        await AsyncStorage.setItem('techs', techs)

        navigation.navigate('List')
    }

    return (
        <KeyboardAvoidingView 
            enabled={Platform.OS === 'ios'} 
            behavior='padding' 
            style={styles.container}>

            <Image source={logo} />

            <View style={styles.form}>
                <Text style={styles.labels}> SEU EMAIL! *</Text>
                <TextInput 
                    style={styles.imput}
                    placeholder='Your e-mail'
                    placeholderTextColor='#999'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={email}
                    onChangeText={setEmail}
                />

                <Text style={styles.labels}>TECNOLOGIAS *</Text>
                <TextInput 
                    style={styles.imput}
                    placeholder='Techs (e.g: Java, React, Vue.js)'
                    placeholderTextColor='#999'
                    autoCapitalize='words'
                    autoCorrect={false}
                    value={techs}
                    onChangeText={setTechs}
                />

                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>Find some Spot</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }, 

    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30
    },

    labels: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8
    }, 

    imput: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2
    },

    button: {
        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2
    },

    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold'
    }
})