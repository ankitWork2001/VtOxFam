import React, { useRef, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const OtpScreen = () => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const inputs = useRef([]);

    const handleChange = (text, index) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        if (text && index < 3) {
            inputs.current[index + 1].focus();
        }
    };

    return (
        <SafeAreaView style={styles.container}>

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity>
                    <Icon name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.title}>Enter OTP</Text>
            </View>

            {/* OTP Input Boxes */}
            <View style={styles.otpContainer}>
                {otp.map((digit, index) => (
                    <TextInput
                        key={index}
                        ref={(ref) => (inputs.current[index] = ref)}
                        value={digit}
                        onChangeText={(text) => handleChange(text, index)}
                        style={styles.otpBox}
                        keyboardType="numeric"
                        maxLength={1}
                    />
                ))}
            </View>

            {/* Submit Button */}
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Verify & Withdraw</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 40,
        backgroundColor: '#fff',
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },

    otpContainer: {
        flexDirection: 'row',
        marginBottom: 50,
        gap: 25,
        top: 20,
        left: 40
    },

    otpBox: {
        borderWidth: 0.5,
        borderColor: '#ddd',
        borderRadius: 6,
        width: 43,
        height: 42,
        textAlign: 'center',
        fontSize: 20,
        borderColor: '#00000036',
    },

    button: {
        backgroundColor: '#FF8800',
        paddingVertical: 6,
        borderRadius: 6,
        alignItems: 'center',
        marginTop: 10,
        width: 198,
        height: 35,
        left: 40
    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },

});

export default OtpScreen;
