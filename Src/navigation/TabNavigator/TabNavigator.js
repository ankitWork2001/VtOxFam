import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SCREENS } from "../Route/screens";
import HomeScreen from "../../screens/Home/HomeScreen/HomeScreen";
import SpinScreen from "../../screens/SpinWheel/SpinScreen/SpinScreen";
import InvestmentScreen from "../../screens/Investment/InvestmentPlansScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ReferralStack } from "../AuthNavigator/AuthNavigator";
import { ProfileAuth } from "../AuthNavigator/AuthNavigator";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

// Helper to get tabBarStyle conditionally
const getTabBarStyle = (route, hideOnScreens = []) => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (hideOnScreens.includes(routeName)) {
        return { display: "none" };
    }

    return {
        backgroundColor: "#2c7a36",
        height: 60,
        borderBottomLeftRadius: 28,
        borderBottomRightRadius: 28,
        borderWidth: 1,
    };
};

const TabNavigator = () => {
    return (
        <Tab.Navigator

            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: "black",
                tabBarInactiveTintColor: "white",
                tabBarLabelStyle: {
                    fontSize: 12,
                    marginBottom: 4,
                },
                tabBarStyle: {
                    backgroundColor: "#2c7a36",
                    height: 60,
                    borderBottomLeftRadius: 28,
                    borderBottomRightRadius: 28,
                    borderWidth: 1,
                },
                tabBarIcon: ({ focused, color }) => {
                    switch (route.name) {
                        case SCREENS.HOMESCREEN:
                            return <Ionicons name={focused ? "home" : "home-outline"} size={24} color={color} />;
                        case SCREENS.SPINS:
                            return <MaterialCommunityIcons name="target" size={26} color={color} />;
                        case SCREENS.INVESTMENT:
                            return <FontAwesome5 name="money-bill" size={20} color={color} />;
                        case SCREENS.REFERRAL:
                            return <Ionicons name={focused ? "people" : "people-outline"} size={24} color={color} />;
                        case SCREENS.PROFILE:
                            return <Ionicons name={focused ? "person" : "person-outline"} size={24} color={color} />;
                        default:
                            return null;
                    }
                },
            })}

        >
            <Tab.Screen name={SCREENS.HOMESCREEN} component={HomeScreen} />
            <Tab.Screen name={SCREENS.SPINS} component={SpinScreen} />
            <Tab.Screen name={SCREENS.INVESTMENT} component={InvestmentScreen} />

            <Tab.Screen
                name={SCREENS.REFERRAL}
                component={ReferralStack}
                options={({ route }) => ({
                    tabBarStyle: getTabBarStyle(route, [
                        SCREENS.REFERRALEARNING,
                    ]),
                })}
            />

            <Tab.Screen
                name={SCREENS.PROFILE}
                component={ProfileAuth}
                options={({ route }) => ({
                    tabBarStyle: getTabBarStyle(route, [
                        SCREENS.PERSONALDETAILS,
                        SCREENS.WALLETSCREEN,
                        SCREENS.TRANSACTION,
                        SCREENS.SETTINGS,
                    ]),
                })}
            />
        </Tab.Navigator>
    );
};

export default TabNavigator;
