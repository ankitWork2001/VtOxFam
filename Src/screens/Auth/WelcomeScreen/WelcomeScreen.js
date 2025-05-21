import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity,
    SafeAreaView
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/FontAwesome";
import Entypo from 'react-native-vector-icons/Entypo';
import { SCREENS } from "../../../navigation/Route/screens";

const WelcomeScreen = ({ navigation }) => {
    const { width, height } = Dimensions.get('window');

    return (
        <View>
            <SafeAreaView >
                <View>
                    <TouchableOpacity
                        style={styles.closeIcon}
                        onPress={() => {
                            console.log("Close icon pressed");
                        }}
                    >
                        <Entypo name="cross" size={24} color="white" />
                    </TouchableOpacity>
                </View>

                <View style={styles.mainContainer}>
                    <Image
                        source={require('../../../assets/images/Welcome.png')}
                        style={styles.image}
                    />

                    <View style={[styles.overlay, { top: height * 0.05 }]}>
                        <Text style={styles.welcomeText}>Welcome to the Spin &{'\n'} Win Adventure!</Text>
                        <Text style={styles.spinTheWheelText}>Spin the wheel, invite friends, and unlock exciting rewards with every turn!</Text>
                    </View>

                    <View style={[styles.spinImageOverlay, { top: height * 0.14 }]}>
                        <Image
                            style={styles.spinImage}
                            source={require('../../../assets/images/WelcomeSpin.png')}
                        />
                    </View>
                </View>

                <View style={[styles.buttonContainer, { top: height * 0.79 }]}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate(SCREENS.SIGNUP)}>
                        <Text style={styles.signupText}>Sign Up</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.loginbutton}
                        onPress={() => navigation.navigate(SCREENS.LOGIN)}>
                        <Text style={styles.loginText}>Log In</Text>
                    </TouchableOpacity>

                    <Text style={styles.agreePolicyText}>
                        By clicking Login or Signup, you agree to our
                        <Text style={styles.linkText}> Privacy Policy </Text>{"\n"}
                        And
                        <Text style={styles.linkText}> Terms of Services</Text>.
                    </Text>
                </View>

            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
    },

    image: {
        resizeMode: 'contain',
        marginTop: -50,
    },

    overlay: {
        position: 'absolute',
        width: '100%',
        alignItems: 'center',
    },

    welcomeText: {
        fontSize: RFValue(24, 600),
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },

    spinTheWheelText: {
        color: 'white',
        fontSize: 8,
    },

    spinImageOverlay: {
        position: 'absolute',
    },

    spinImage: {
        resizeMode: 'contain',
        width: 391,
        alignSelf: 'center',
        top: 10
    },

    buttonContainer: {
        position: "relative",
        display: "flex",
        gap: 15,
        alignItems: 'center',
    },

    button: {
        alignItems: 'center',
        backgroundColor: "#FF8800",
        padding: 10,
        marginHorizontal: 25,
        borderRadius: 6,
        elevation: 5,
        width: '85%',
    },

    loginbutton: {
        alignItems: 'center',
        backgroundColor: "#fff",
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginHorizontal: 25,
        borderRadius: 6,
        elevation: 5,
        width: '85%',
    },

    signupText: {
        fontSize: RFValue(14),
        fontWeight: '400',
        color: "white",
        textAlign: 'center'
    },

    loginText: {
        fontSize: RFValue(14),
    },

    agreePolicyText: {
        fontSize: RFValue(10),
        textAlign: 'center',
        marginTop: 10,
    },

    linkText: {
        color: "#34A853"
    },

    closeIcon: {
        position: 'absolute',
        top: 10,
        right: 15,
        zIndex: 10,
        borderRadius: 20,
        padding: 6,
    }

});

export default WelcomeScreen;
