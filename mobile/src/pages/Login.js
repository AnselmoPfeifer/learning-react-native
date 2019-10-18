import React from 'react'
import { 
    View, Text, Image, StyleSheet, TextInput, 
    KeyboardAvoidingView, TouchableOpacity, Platform } from 'react-native'

import logo from '../assets/logo.png'

export default function Login() {
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
                />

                <Text style={styles.labels}>TECNOLOGIAS *</Text>
                <TextInput 
                    style={styles.imput}
                    placeholder='Techs (e.g: Java, React, Vue.js)'
                    placeholderTextColor='#999'
                    autoCapitalize='words'
                    autoCorrect={false}
                />

                <TouchableOpacity style={styles.button}>
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