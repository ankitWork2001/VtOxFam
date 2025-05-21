import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../Gaming/Src/redux/store/store';
import AppNavigator from './Src/navigation/AppNavigator/AppNavigator';

export default function App() {
    return (
        <Provider store={store}>
            <AppNavigator />
        </Provider>
    );
}
