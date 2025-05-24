import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SCREENS } from "../Route/screens";
import WelcomeScreen from "../../screens/Auth/WelcomeScreen/WelcomeScreen";
import LoginScreen from "../../screens/Auth/LoginScreen/LoginScreen";
import SignUpScreen from "../../screens/Auth/SignupScreen/SignUpScreen";
import ReferralScreen from "../../screens/Referral/ReferralYourFriend/ReferralScreen";
import ReferralEarningsScreen from "../../screens/Referral/ReferralEarningsScreen/ReferralEarning";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={SCREENS.WELCOME} component={WelcomeScreen} />
            <Stack.Screen name={SCREENS.LOGIN} component={LoginScreen} />
            <Stack.Screen name={SCREENS.SIGNUP} component={SignUpScreen} />
            <Stack.Screen name={SCREENS.REFERRALEARNING} component={ReferralEarningsScreen} />
        </Stack.Navigator>
    );
};

const ReferralStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={SCREENS.REFERRAL} component={ReferralScreen} />
            <Stack.Screen name={SCREENS.REFERRALEARNING} component={ReferralEarningsScreen} />
        </Stack.Navigator>
    );
};

export default AuthStack;
export { ReferralStack };
