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
import LoginHeader from '../../../components/Header/LoginHeader/LoginHeader';
import { SCREENS } from '../../../navigation/Route/screens';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../../redux/slices/authScreen/authScreens';

const LoginScreen = ({ navigation }) => {
    const { height } = Dimensions.get('window');
    const [password, setPassword] = useState('');
    const [secureText, setSecureText] = useState(true);
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();

    const handleLogin = () => {
        const dummyUser = {
            email: email,
            name: 'Murtaza',
        };
        dispatch(loginSuccess(dummyUser));
    };

    return (
        <SafeAreaView style={styles.container}>
            <LoginHeader />

            <View style={styles.bodyWrapper}>
                <ScrollView
                    contentContainerStyle={styles.body}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    <Text style={styles.welcomeText}>Welcome Back!</Text>

                    <Text style={styles.label}>E-Mail Address / Phone Number</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter email or phone"
                        value={email}
                        onChangeText={setEmail}
                    />

                    <Text style={styles.label}>Password</Text>
                    <View style={styles.passwordContainer}>
                        <TextInput
                            style={[styles.inputPassword, { flex: 1 }]}
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={secureText}
                            placeholder="Enter password"
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

                    <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                        <Text style={styles.loginButtonText}>Log In</Text>
                    </TouchableOpacity>

                    <Text style={styles.orText}>Or</Text>

                    <View style={styles.dividerContainer}>
                        <View style={styles.divider} />
                        <Text style={styles.loginWith}>Log In With</Text>
                        <View style={styles.divider} />
                    </View>

                    <View style={styles.socialIconContainer}>
                        <TouchableOpacity style={styles.button}>
                            <Image
                                style={styles.socialIcon}
                                source={require('../../../assets/images/g-logo.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Image
                                style={styles.socialIcon}
                                source={require('../../../assets/images/appleLogo.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Image
                                style={styles.socialIcon}
                                source={require('../../../assets/images/Facebook_Logo.png')}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.signUpPromptContainer}>
                        <Text style={styles.signUpPrompt}>Don't Have Account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate(SCREENS.SIGNUP)}>
                            <Text style={styles.signInLink}> Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
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
    orText: {
        textAlign: 'center',
        marginTop: 25,
        marginBottom: 10,
        fontSize: RFValue(12),
        fontWeight: '600',
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: '#ccc',
    },
    loginWith: {
        marginHorizontal: 10,
        fontSize: RFValue(12),
        color: '#888',
    },
    socialIconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
        marginTop: 20,
    },
    button: {
        backgroundColor: '#E7E7E7',
        padding: 10,
        borderRadius: 7,
    },
    socialIcon: {
        width: 35,
        height: 35,
        resizeMode: 'contain',
    },
    signUpPromptContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
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

export default LoginScreen;
