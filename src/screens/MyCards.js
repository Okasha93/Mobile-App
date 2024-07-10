import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function MyCards() {
    const navigation = useNavigation();

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>

            <View style={styles.container}>
                <Text style={styles.title}>Payment Cards</Text>
                <View style={{ margin: 15, paddingRight: 30, paddingLeft: 30 }}>
                    <Button title="Add Card" onPress={() => navigation.navigate('Add Card')} />
                </View>
            </View>

        </ScrollView>
    )
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
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
        // marginTop: 50,
        textAlign: 'center',
        color: "#0070c4",
        fontWeight: "bold",
    },
});

export default MyCards;