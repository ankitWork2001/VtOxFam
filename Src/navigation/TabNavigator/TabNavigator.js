import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SCREENS } from "../Route/screens";
import HomeScreen from "../../screens/Home/HomeScreen/HomeScreen";
import SpinScreen from "../../screens/SpinWheel/SpinScreen/SpinScreen";
import InvestmentScreen from "../../screens/Investment/InvestmentPlansScreen";
import ProfileScreen from "../../screens/Profile/ProfileScreen/ProfileScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ReferralStack } from "../AuthNavigator/AuthNavigator";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,


                tabBarStyle: {
                    backgroundColor: "#2c7a36",
                    height: 60,
                    borderBottomLeftRadius: 28,
                    borderBottomRightRadius: 28,
                    borderWidth: 1,
                },

                tabBarActiveTintColor: "black",
                tabBarInactiveTintColor: "white",

                tabBarLabelStyle: {
                    fontSize: 12,
                    marginBottom: 4,
                },
                tabBarIcon: ({ focused, color, size }) => {
                    switch (route.name) {
                        case SCREENS.HOMESCREEN:
                            return <Ionicons name={focused ? "home" : "home-outline"} size={24} color={color} />;
                        case SCREENS.SPINS:
                            return <MaterialCommunityIcons name="target" size={26} color={color} />

                        case SCREENS.INVESTMENT:
                            return <FontAwesome5 name="money-bill" size={20} color={color} />;
                        case SCREENS.REFERRAL:
                            return <Ionicons name={focused ? "people" : "people-outline"} size={24} color={color} />;
                        case SCREENS.PROFILE:
                            return <Ionicons name={focused ? "person" : "person-outline"} size={24} color={color} />;
                        default:
                            return null;
                    }
                }
            })}
        >
            <Tab.Screen name={SCREENS.HOMESCREEN} component={HomeScreen} />
            <Tab.Screen name={SCREENS.SPINS} component={SpinScreen} />
            <Tab.Screen name={SCREENS.INVESTMENT} component={InvestmentScreen} />
            <Tab.Screen name={SCREENS.REFERRAL} component={ReferralStack} />
            <Tab.Screen name={SCREENS.PROFILE} component={ProfileScreen} />
        </Tab.Navigator>
    );
};

export default TabNavigator;
