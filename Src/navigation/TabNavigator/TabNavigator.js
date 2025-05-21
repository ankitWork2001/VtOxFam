import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SCREENS } from "../Route/screens";
import HomeScreen from "../../screens/Home/HomeScreen/HomeScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name={SCREENS.HOMESCREEN} component={HomeScreen} />
        </Tab.Navigator>
    );
};

export default TabNavigator;
