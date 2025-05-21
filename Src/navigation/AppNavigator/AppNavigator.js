import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import AuthNavigator from '../AuthNavigator/AuthNavigator';
import TabNavigator from '../TabNavigator/TabNavigator';

const AppNavigator = () => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    return (
        <NavigationContainer>
            {isLoggedIn ? <TabNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
};

export default AppNavigator;
