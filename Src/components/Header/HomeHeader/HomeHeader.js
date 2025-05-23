import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

const HomeHeader = () => {
    return (
        <ImageBackground
            source={require('../../../assets/images/HomeScreen/Vector.png')}
            style={styles.headerContainer}
            resizeMode="cover"
        >
            <View style={styles.row}>
                <View style={styles.textContainer}>
                    <Text style={styles.welcome}>Welcome , Rohan !</Text>
                    <Text style={styles.subtext}>Get Ready To Spin</Text>
                    <View style={styles.balanceContainer}>
                        <Text style={styles.balanceText}>Rs.3500.45 Balance</Text>
                    </View>
                </View>
                <Image
                    source={require('../../../assets/images/HomeScreen/homePageWomenImage.png')} // Replace with your illustration image
                    style={styles.character}
                />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({

    headerContainer: {
        padding: 30,
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    textContainer: {
        marginRight: 10,
        top: 20
    },

    welcome: {
        fontSize: 24,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },

    subtext: {
        color: 'white',
        fontSize: 14,
        marginVertical: 5,
    },

    balanceContainer: {
        backgroundColor: '#1d5632',
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 8,
        marginTop: 20,
        width: 160,
        height: 30
    },

    balanceText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },

    character: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        right: 50
    },

});

export default HomeHeader;
