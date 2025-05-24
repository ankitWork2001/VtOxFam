import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SCREENS } from '../../../navigation/Route/screens';

export default function WithdrawScreen({ navigation }) {
    const [amount, setAmount] = useState('');
    const [method, setMethod] = useState(null);

    const methods = [
        { name: 'Bank', icon: require('../../../assets/images/Withdraw/noto_bank.png') },
        { name: 'UPI', icon: require('../../../assets/images/Withdraw/Upi.png') },
        { name: 'Crypto', icon: require('../../../assets/images/Withdraw/token-branded_crypto-com.png') },
    ];

    return (
        <View style={styles.container}>

            {/* Header Section*/}
            <View style={styles.header}>
                <Icon name="arrow-back" size={24} color="#fff" />
                <Text style={styles.greeting}>Hi rohan sharma, cash out your {'\n'} rewards fast and safe!</Text>
                <Text style={styles.balance}>Balance : ₹5,250</Text>
                <Image
                    source={require('../../../assets/images/ProfileScreen/WithdrawImg.png')}
                    style={styles.illustration}
                />
                <Icon name="notifications-outline" size={22} color="#fff" style={styles.bellIcon} />
            </View>

            {/* Withdraw Box */}
            <View style={styles.card}>
                <Text style={styles.title}>Withdraw</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter amount (₹100 min)"
                    keyboardType="numeric"
                    value={amount}
                    onChangeText={setAmount}
                />
                <Text style={styles.feeText}>Select (2% fee, ₹10 min)</Text>

                <View style={styles.methodRow}>
                    {methods.map((item) => (
                        <TouchableOpacity
                            key={item.name}
                            style={[
                                styles.methodButton,
                                method === item.name && styles.selectedMethod
                            ]}
                            onPress={() => setMethod(item.name)}
                        >
                            <View style={styles.methodContent}>
                                <Image source={item.icon} style={styles.methodIcon} />
                                <Text style={styles.methodText}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>

                    ))}
                </View>

                <TouchableOpacity onPress={() => navigation.navigate(SCREENS.OTPSCREEN)} style={styles.otpButton}>
                    <Text style={styles.otpText}>Sent OTP</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },

    header: {
        backgroundColor: '#34A853',
        padding: 20,
        paddingTop: 30,
        position: 'relative',
        height: 208,
    },

    greeting: {
        color: '#F0F5F5',
        fontSize: 16,
        marginTop: 15,
    },

    balance: {
        color: '#F0F5F5',
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 25,
    },

    illustration: {
        height: 169,
        width: 203,
        position: 'absolute',
        right: 2,
        top: 64,
    },

    bellIcon: {
        position: 'absolute',
        right: 20,
        top: 35,
    },

    card: {
        backgroundColor: '#fff',
        margin: 20,
        padding: 20,
        borderRadius: 6,
        elevation: 4,
        borderWidth: 0.5,
        borderColor: '#00000036',
        top: 30
    },

    title: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 10,
    },

    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 12,
        borderRadius: 8,
        marginBottom: 10,
    },

    feeText: {
        fontSize: 13,
        marginBottom: 10,
        color: '#444',
    },

    methodRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },

    methodButton: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        width: '30%',
        alignItems: 'center',
    },

    selectedMethod: {
        backgroundColor: '#e6f9f0',
        borderColor: '#2E8B57',
    },

    methodIcon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },

    otpButton: {
        backgroundColor: '#FF8800',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
    },

    otpText: {
        color: '#fff',
        fontWeight: 'bold',
    },


});
