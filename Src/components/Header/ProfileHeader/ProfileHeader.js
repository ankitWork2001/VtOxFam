import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { RFValue } from 'react-native-responsive-fontsize';
import { SCREENS } from '../../../navigation/Route/screens';
import { useNavigation } from '@react-navigation/native';

const ProfileHeader = () => {
    const { height } = Dimensions.get('window');
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.MainContainer}>

            <View style={[styles.profileUppersideContainer, { backgroundColor: '#34A853' }]}>
                <View style={styles.IconMainContainer}>
                    <TouchableOpacity><Icon name='arrow-back' size={24} color='#fff' /></TouchableOpacity>
                    <View style={styles.IconSubContainer}>
                        <TouchableOpacity><Icon name='edit-square' size={24} color='#fff' /></TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate(SCREENS.SETTINGS)}>
                            <Icon name='settings' size={24} color='#fff' /></TouchableOpacity>

                    </View>
                </View>

                <View style={[styles.profileImageAndTextContainer, { bottom: height * 0.06 }]}>
                    <Image
                        source={require('../../../assets/images/ProfileScreen/profileScreeenProfileImage.png')}
                        style={styles.profileImage}
                        resizeMode='contain'
                    />
                    <Text style={styles.profileName}>Rohan Sharma</Text>
                    <Text style={styles.profileID}>ID: EMP12345</Text>
                    <View style={styles.balanceBox}>
                        <Text style={styles.BalanceText}>Rs.3500.45 Balance </Text>
                    </View>

                    <Icon style={styles.doubleArrowIcon}
                        color='#FFFFFF'
                        name='keyboard-double-arrow-down'
                        size={24}
                    />

                    <View style={styles.depositAndWithdrawContainer}>
                        <TouchableOpacity style={[styles.depositTextBox, { backgroundColor: '#0653D1', borderTopLeftRadius: 6, borderBottomLeftRadius: 6 }]}>
                            <Text style={styles.depositText}>Deposit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate(SCREENS.WITHDRAW)}
                            style={[styles.depositTextBox, { backgroundColor: '#FDBE00', borderTopRightRadius: 6, borderBottomRightRadius: 6 }]}>
                            <Text style={styles.depositText}>Withdraw{'\n'}
                                <Text style={styles.rulesText}>Rules: 24hr lock, Min ₹100</Text>
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={[styles.levelContainer, { bottom: height * 0.06 }]}>
                <TouchableOpacity style={styles.levelItem}>
                    <Icon name='diamond' size={22} color='#9747FF' />
                    <Text style={styles.levelText}>Level: 5 {'\n'}(Silver)</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.levelItem}>
                    <Icon name='emoji-events' size={22} color='#FFD700' />
                    <Text style={styles.levelText}>Total {'\n'}Wins: ₹560</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.levelItem}>
                    <Icon name='radar' size={22} color='#DB0004' />
                    <Text style={styles.levelText}>Spin Left {'\n'}Today: 2/5</Text>
                </TouchableOpacity>
            </View>


        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },

    profileUppersideContainer: {
        height: 430
    },

    IconMainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 30,
    },

    IconSubContainer: {
        flexDirection: 'row',
        gap: 10
    },

    profileImageAndTextContainer: {
        alignItems: "center"
    },

    profileName: {
        fontSize: RFValue(24),
        fontWeight: '400',
        color: '#fff',
        marginTop: 10
    },

    profileID: {
        color: '#fff',
        fontSize: RFValue(10),
        fontWeight: '500',
        marginTop: 2
    },

    balanceBox: {
        marginTop: 25,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        paddingVertical: 8,
        paddingHorizontal: 1,
        borderRadius: 4,
        width: 168
    },

    BalanceText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 300,
    },

    doubleArrowIcon: {
        marginVertical: 5,
    },

    depositAndWithdrawContainer: {
        width: "80%",
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
        height: 62
    },

    depositTextBox: {
        width: "50%",
        paddingVertical: 20,

    },

    depositText: {
        fontSize: RFValue(14),
        fontWeight: '500',
        color: '#fff',
        textAlign: 'center'
    },

    rulesText: {
        fontSize: RFValue(6),
    },

    levelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    levelItem: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderRadius: 20,
        width: 75,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 6,
        height: 65,
        top: 13
    },

    levelEmoji: {
        fontSize: RFValue(22)
    },

    levelText: {
        fontSize: RFValue(10),
        fontWeight: '400',
        textAlign: 'center'
    },

})

export default ProfileHeader