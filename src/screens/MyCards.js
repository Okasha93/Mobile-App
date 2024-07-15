import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function MyCards() {
    const navigation = useNavigation();

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>

            <View style={styles.container}>
                <Text style={styles.title}>Payment Cards</Text>
                <View style={{ margin: 30, paddingRight: 150 }}>
                    <Button title="Add Card" onPress={() => navigation.navigate('Add Card')} />
                </View>

                <View style={styles.cardContainer}>
                <Image source={require('../../assets/Visa.png')} style={styles.cardImage} />
                <Text style={styles.cardNumber}>65438...</Text>
                <TouchableOpacity >
                    <Text style={styles.changeText}>Change</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cardContainer}>
                <Image source={require('../../assets/Visa.png')} style={styles.cardImage} />
                <Text style={styles.cardNumber}>65438...</Text>
                <TouchableOpacity >
                    <Text style={styles.changeText}>Change</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cardContainer}>
                <Image source={require('../../assets/Visa.png')} style={styles.cardImage} />
                <Text style={styles.cardNumber}>65438...</Text>
                <TouchableOpacity >
                    <Text style={styles.changeText}>Change</Text>
                </TouchableOpacity>
            </View>
            {/* <View style={styles.cardContainer}>
                <Image source={require('../../assets/Visa.png')} style={styles.cardImage} />
                <Text style={styles.cardNumber}>65438...</Text>
                <TouchableOpacity >
                    <Text style={styles.changeText}>Change</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cardContainer}>
                <Image source={require('../../assets/Visa.png')} style={styles.cardImage} />
                <Text style={styles.cardNumber}>65438...</Text>
                <TouchableOpacity >
                    <Text style={styles.changeText}>Change</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cardContainer}>
                <Image source={require('../../assets/Visa.png')} style={styles.cardImage} />
                <Text style={styles.cardNumber}>65438...</Text>
                <TouchableOpacity >
                    <Text style={styles.changeText}>Change</Text>
                </TouchableOpacity>
            </View> */}

            </View>

            

        </ScrollView>
    )
};

const styles = StyleSheet.create({
    scrollContainer: {
        // flexGrow: 1,
        justifyContent: 'center',
        // marginTop: 40,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        // backgroundColor: "#ffffff",
        // paddingBottom: 70,
        // paddingTop: 70,
    },
    title: {
        fontSize: 25,
        // marginBottom: 50,
        marginTop: 30,
        textAlign: 'center',
        color: "#0070c4",
        fontWeight: "bold",
        // marginBottom: 150,
    },
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#333',
        padding: 20,
        marginBottom: 10,
        borderRadius: 8,
    },
    cardImage: {
        width: 40,
        height: 25,
        resizeMode: 'contain',
    },
    cardNumber: {
        color: '#fff',
        fontSize: 16,
    },
    changeText: {
        color: '#4A90E2', 
        fontSize: 16,
    },
});

export default MyCards;