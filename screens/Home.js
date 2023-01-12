import { StackRouter } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform, TouchableOpacity, ImageBackground, StatusBar, Image } from 'react-native';
import { step0 } from 'react-native/Libraries/Animated/Easing';

export default class HomeScreen extends Component {
    render() {
        return (
            <View
                style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/bg.png')} style={styles.backgroundImage}>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>App rastreador EEI!</Text>
                    </View>
                    <TouchableOpacity style={styles.routeCard} onPress={() => this.props.navigation.navigate('IssLocation')}>
                        <Text style={styles.routeText}>
                            Localização da EEI
                        </Text>
                        <Text style={styles.knowMore}>{"Saiba Mais --->"}</Text>
                        <Text style={styles.bgDigit}>1</Text>
                        <Image source={require("../assets/iss_icon.png")} style={styles.iconImage}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.routeCard} onPress={() => this.props.navigation.navigate('Meteors')}>
                        <Text style={styles.routeCard}>
                            Meteoros da EEI
                        </Text>
                        <Text style={styles.knowMore}>{"Saiba Mais --->"}</Text>
                        <Text style={styles.bgDigit}>2</Text>
                        <Image source={require("../assets/meteor_icon.png")} style={styles.iconImage}></Image>
                    </TouchableOpacity>

                </ImageBackground>

            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    titleBar: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    routeCard: {
        flex: 0.25,
        marginTop: 50,
        marginLeft: 50,
        marginRight: 50,
        borderRadius: 30,
        backgroundColor: 'white'
    },
    titleText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    },
    bgDigit: {
        position: "absolute",
        color: "rgba(183, 183, 183, 0.5)",
        fontSize: 150,
        right: 20,
        bottom: -15,
        zIndex: -1
    },
    iconImage: {
        position: "absolute",
        height: 200,
        width: 200,
        resizeMode: "contain",
        right: 20,
        top: -80
    },
    knowMore: {
        paddingLeft: 30,
        color: "red",
        fontSize: 15
    },
})
