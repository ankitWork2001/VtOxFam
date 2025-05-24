import {
    Dimensions,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

const WalletInfoScreen = () => {
    const navigation = useNavigation();
    const { height, width } = Dimensions.get('window');

    return (
        <SafeAreaView style={styles.MainContainer}>
            <ScrollView>
                {/* Header */}
                <View style={styles.headerContentContainer}>
                    <View style={styles.headerTextContainer}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Icon name="arrow-back" size={20} color="#fff" />
                        </TouchableOpacity>
                        <Text style={styles.headerText}>Wallet Info</Text>
                    </View>
                    <TouchableOpacity>
                        <Icon name="settings" size={24} color="#fff" />
                    </TouchableOpacity>
                </View>

                {/* Withdraw Info */}
                <View style={styles.depositAndWithdrawContainer}>
                    <TouchableOpacity style={[styles.depositTextBox, { backgroundColor: '#FDBE00', borderTopLeftRadius: 6, borderBottomLeftRadius: 6 }]}>
                        <Text style={styles.depositText}>Pending Withdrawals ₹100 (processing)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.depositTextBox, { backgroundColor: '#2E7D32', borderTopRightRadius: 6, borderBottomRightRadius: 6 }]}>
                        <Text style={styles.depositText}>
                            Total Withdrawn{'\n'}<Text>₹1,150</Text>
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Wallet Card */}
                <Text style={styles.sectionTitle}>Wallet</Text>
                <View style={styles.card}>
                    <View style={styles.cardTextContainer}>
                        <Text style={styles.cardText}>Main Balance: ₹3500.45</Text>
                        <Text style={styles.cardText}>Locked Balance: ₹200.00</Text>
                        <Text style={styles.cardText}>Binance Wallet: 0x****1234</Text>
                        <Text style={styles.cardText}>Bonus Cash: ₹50 (expires on 2025-05-01)</Text>
                    </View>
                    <TouchableOpacity style={styles.Button}>
                        <Text style={styles.ButtonText}>Add/Update Wallet</Text>
                    </TouchableOpacity>
                </View>


                <Text style={[styles.sectionTitle, { marginTop: 10 }]}>
                    Coupons Available: <Text style={{ fontWeight: 'bold' }}>2</Text>
                </Text>

                <View style={styles.CuponCardContainer}>

                    <View style={styles.cuponCard}>
                        <Image
                            source={require('../../../assets/images/ProfileScreen/claimNowMan.png')}
                            style={styles.cardImage}
                        />
                        <TouchableOpacity style={[styles.playButton, { backgroundColor: '#34A853', }]}>
                            <Text style={styles.playButtonText}>Claim Now</Text>
                        </TouchableOpacity>
                        <Text style={styles.couponTitle}>₹50 Off Flipkart</Text>
                        <Text style={styles.couponSubtitle}>(Expires in 3 days)</Text>
                    </View>


                    <View style={styles.cuponCard}>
                        <Image
                            source={require('../../../assets/images/ProfileScreen/ClaimeNow.png')}
                            style={styles.cardImage}
                        />
                        <TouchableOpacity style={[styles.playButton, { backgroundColor: '#BDBDBD' }]}>
                            <Text style={[styles.playButtonText, { color: '#fff' }]}>Claimed</Text>
                        </TouchableOpacity>
                        <Text style={styles.couponTitle}>₹100 Amazon Voucher</Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },

    headerContentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#34A853',
        paddingVertical: 30,
        paddingHorizontal: 30,
    },

    headerTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },

    headerText: {
        fontSize: RFValue(20),
        fontWeight: '500',
        color: '#fff',
    },

    depositAndWithdrawContainer: {
        width: "80%",
        margin: 40,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    depositTextBox: {
        width: "50%",
        paddingVertical: 20,
    },
    depositText: {
        fontSize: RFValue(14),
        fontWeight: '400',
        color: '#fff',
        textAlign: 'center'
    },
    sectionTitle: {
        fontSize: RFValue(18),
        marginLeft: 20,
        fontWeight: '500',
        color: '#000'
    },
    card: {
        backgroundColor: '#fff',
        elevation: 5,
        borderRadius: 6,
        padding: 20,
        margin: 20,
        marginTop: 30
    },
    cardTextContainer: {
        gap: 2
    },
    cardText: {
        fontSize: RFValue(14),
        fontWeight: '400'
    },

    Button: {
        backgroundColor: '#FF8800',
        padding: 5,
        marginTop: 15,
        borderRadius: 4
    },
    ButtonText: {
        fontSize: RFValue(10),
        textAlign: 'center',
        color: '#fff'
    },
    CuponCardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 20,
    },
    cuponCard: {
        width: '48%',
        borderRadius: 8,
        backgroundColor: '#fff',
        elevation: 3,
        paddingBottom: 10,
    },

    cardImage: {
        width: '100%',
        height: 110,
        resizeMode: 'cover',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },

    playButton: {
        position: 'absolute',
        top: '50%',
        left: 46,
        paddingVertical: 6,
        paddingHorizontal: 20,
        borderRadius: 6,
    },


    playButtonText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: '600',
    },

    couponTitle: {
        fontSize: RFValue(12),
        fontWeight: '600',
        marginTop: 10,
        textAlign: 'center',
        color: '#000',
    },

    couponSubtitle: {
        fontSize: RFValue(10),
        textAlign: 'center',
        color: '#757575',
    }

});


export default WalletInfoScreen;
