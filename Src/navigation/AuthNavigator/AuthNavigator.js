import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SCREENS } from "../Route/screens";
import WelcomeScreen from "../../screens/Auth/WelcomeScreen/WelcomeScreen";
import LoginScreen from "../../screens/Auth/LoginScreen/LoginScreen";
import SignUpScreen from "../../screens/Auth/SignupScreen/SignUpScreen";
import ReferralScreen from "../../screens/Referral/ReferralYourFriend/ReferralScreen";
import ReferralEarningsScreen from "../../screens/Referral/ReferralEarningsScreen/ReferralEarning";
import PersonalDetails from "../../screens/Profile/PersonalDetailsScreen/PersonalDetailsScreen";
import ProfileScreen from "../../screens/Profile/ProfileScreen/ProfileScreen";
import WalletInfoScreen from "../../screens/Profile/WalletScreen/WalletScreen";
import TransactionHistoryScreen from "../../screens/Transactions/Transactions";
import SettingsScreen from "../../screens/Settings/SettingScreen";
import WithdrawScreen from "../../screens/Profile/WithdrawScreen/WithdrawScreen";
import OtpScreen from "../../screens/Profile/OTP/Otp";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={SCREENS.WELCOME} component={WelcomeScreen} />
            <Stack.Screen name={SCREENS.LOGIN} component={LoginScreen} />
            <Stack.Screen name={SCREENS.SIGNUP} component={SignUpScreen} />
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

const ProfileAuth = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={SCREENS.PROFILE} component={ProfileScreen} />
            <Stack.Screen name={SCREENS.PERSONALDETAILS} component={PersonalDetails} />
            <Stack.Screen name={SCREENS.WALLETSCREEN} component={WalletInfoScreen} />
            <Stack.Screen name={SCREENS.SETTINGS} component={SettingsScreen} />
            <Stack.Screen name={SCREENS.TRANSACTION} component={TransactionHistoryScreen} />
            <Stack.Screen name={SCREENS.WITHDRAW} component={WithdrawScreen} />
            <Stack.Screen name={SCREENS.OTPSCREEN} component={OtpScreen} />
        </Stack.Navigator>
    );
};



export default AuthStack;
export { ReferralStack };
export { ProfileAuth };
