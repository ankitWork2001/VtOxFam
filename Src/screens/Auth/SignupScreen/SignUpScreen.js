import {
    Dimensions,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SignUpHeader from '../../../components/Header/SignUpHeader/SignUpHeader';
import { SCREENS } from '../../../navigation/Route/screens';


const SignUpScreen = ({ navigation }) => {
    const { height } = Dimensions.get('window');

    const [password, setPassword] = useState('');
    const [secureText, setSecureText] = useState(true);

    return (
        <SafeAreaView style={styles.container}>
            <SignUpHeader />

            <View style={styles.bodyWrapper}>
                <ScrollView
                    contentContainerStyle={styles.body}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    <Text style={styles.welcomeText}>Welcome Back!</Text>

                    <Text style={styles.label}>E-Mail Address / Phone Number</Text>
                    <TextInput style={styles.input} placeholder="Enter email or phone" />

                    <Text style={styles.label}>OTP</Text>
                    <View style={styles.passwordContainer}>
                        <TextInput
                            style={[styles.inputPassword, { flex: 1 }]}
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={secureText}
                            placeholder="Enter Otp"
                        />
                        <TouchableOpacity
                            onPress={() => setSecureText(!secureText)}
                            style={styles.eyeIcon}
                        >
                            <Icon
                                name={secureText ? 'visibility' : 'visibility-off'}
                                size={20}
                                color="#000"
                            />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.forgotPassword}>
                        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.loginButtonText}>Log In</Text>
                    </TouchableOpacity>

                    <View style={styles.signUpPromptContainer}>
                        <Text style={styles.signUpPrompt}>Don't Have Account?</Text>
                        <TouchableOpacity>
                            <Text style={styles.signInLink}
                                onPress={() => navigation.navigate(SCREENS.LOGIN)}
                            > Log In</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View >
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    bodyWrapper: {
        position: 'absolute',
        top: 180,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        zIndex: 10,
    },
    body: {
        padding: 30,
        paddingBottom: 50,
    },
    welcomeText: {
        fontSize: RFValue(20),
        fontWeight: 'bold',
        color: '#FF8800',
        marginBottom: 15,
    },
    label: {
        fontSize: RFValue(16),
        marginTop: 10,
        marginBottom: 10,
        color: '#1E1F21',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginBottom: 15,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },

    inputPassword: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 8,
    },

    eyeIcon: {
        position: 'absolute',
        right: 10,
        top: 10,
    },

    forgotPassword: {
        alignItems: 'flex-end',
        marginBottom: 20,
    },

    forgotPasswordText: {
        fontSize: RFValue(10),
        color: '#1E1F21',
    },

    loginButton: {
        backgroundColor: 'green',
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 10,
    },

    loginButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: RFValue(14),
        fontWeight: '400',
    },

    signUpPromptContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 20,
    },

    signUpPrompt: {
        fontSize: RFValue(12),
        color: '#000',
    },

    signInLink: {
        fontSize: RFValue(12),
        color: 'green',
        fontWeight: '600',
    },

});

export default SignUpScreen;
