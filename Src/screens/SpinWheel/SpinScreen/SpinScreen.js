import React, { useState, useRef } from 'react';
import {
    Modal,
    Dimensions,
    Image,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Animated,
    Easing,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SpinPageBackSide from '../../../components/Header/HomeHeader/SpinPageBackSide';

const SpinScreen = () => {
    const { height, width } = Dimensions.get('window');
    const [showModal, setShowModal] = useState(false);
    const spinAnim = useRef(new Animated.Value(0)).current;

    const startSpin = () => {

        spinAnim.setValue(0);

        Animated.timing(spinAnim, {
            toValue: 5,
            duration: 4000,
            easing: Easing.out(Easing.ease),
            useNativeDriver: true,
        }).start(() => {

            setShowModal(true);
        });
    };

    // Interpolate spinAnim value to degrees string for rotation
    const spin = spinAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('../../../assets/images/SpinWheel/SpinBackgroundImg.png')}
                style={styles.BGImage}
                resizeMode="cover"
            >
                <SpinPageBackSide />

                {/* Show spin wheel UI only when modal is not visible */}
                {!showModal && (
                    <View style={[styles.spinWheelImageContainer, { bottom: height * 0.07, left: width * 0.09 }]}>
                        <Animated.Image
                            source={require('../../../assets/images/SpinWheel/SpinWheel.png')}
                            style={[styles.spinWheelImage, { transform: [{ rotate: spin }] }]}
                        />

                        <Icon
                            name='keyboard-double-arrow-down'
                            size={RFValue(40)}
                            color='#FFFFFFA1'
                            style={[styles.DownIcon, { bottom: height * 0.15 }]}
                        />

                        <View style={[styles.signInButton, { bottom: height * 0.09 }]}>
                            <TouchableOpacity onPress={startSpin}>
                                <Text style={styles.signInButtonText}>Spin Now</Text>
                            </TouchableOpacity>
                        </View>

                        <Text style={[styles.freeSpinText, { bottom: height * 0.06 }]}>
                            Daily 3 Spins Free More spins via referral
                        </Text>
                    </View>
                )}
            </ImageBackground>

            {/* MODAL */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={showModal}
                onRequestClose={() => setShowModal(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Image
                            source={require('../../../assets/images/SpinWheel/spinPageGiftImage.png')}
                            style={{ width: 120, height: 120, marginBottom: 15, top: -70 }}
                            resizeMode='contain'
                        />
                        <Text style={{ fontSize: RFValue(30), fontWeight: 'bold', color: '#FF8800', top: -60 }}>Lucky Spin Star!</Text>
                        <Text style={{ fontSize: RFValue(22), fontWeight: '400', top: -30 }}>You’ve Won A Gift Pack</Text>
                        <Text style={{ fontSize: RFValue(12), marginBottom: 1 }}>Spin Now For Another Win!</Text>

                        <Icon name='keyboard-double-arrow-down' size={24} color="orange" style={{ marginBottom: 10 }} />

                        <View style={{ flex: 1 }} />

                        <TouchableOpacity
                            style={[styles.signInButton, { top: height * 0.31 }]}
                            onPress={() => setShowModal(false)}
                        >
                            <Text style={styles.signInButtonText}>Spin Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
};

export default SpinScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    BGImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    spinWheelImageContainer: {
        flex: 1,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        height: '85%',
        width: '85%',
        top: 40,
    },

    spinWheelImage: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
    },

    signInButton: {
        position: 'absolute',
        backgroundColor: 'green',
        width: "80%",
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 30,
        zIndex: 10,
        elevation: 10
    },

    signInButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: RFValue(14),
        fontWeight: '400'
    },

    DownIcon: {
        position: 'absolute',
    },
    freeSpinText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: RFValue(10),
        fontWeight: 'normal'
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        width: '80%',
        height: 350,
        alignItems: 'center',
        justifyContent: 'space-between',
        top: 5
    },
});
