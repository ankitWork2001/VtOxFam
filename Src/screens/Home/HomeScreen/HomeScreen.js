import React, { useRef, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    Image,
    Dimensions,
    TouchableOpacity,
    FlatList,
    NativeSyntheticEvent,
    NativeScrollEvent,
    Pressable
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import HomeHeader from '../../../components/Header/HomeHeader/HomeHeader';
import { SCREENS } from '../../../navigation/Route/screens';

const HomeScreen = () => {
    const { height, width } = Dimensions.get('window');
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();

    return (
        <ScrollView contentContainerStyle={[styles.scrollViewContent, { paddingBottom: insets.bottom + 100 }]}>
            <SafeAreaView>
                <View>
                    <View>
                        <HomeHeader />
                    </View>

                    <View style={styles.IconMainContaineer}>
                        <TouchableOpacity style={styles.IconDeposit}>
                            <Icon name='upload' size={26} color='#FFFFFF' />
                            <Text style={styles.IconText}>DEPOSIT</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('WithdrawScreen')} style={styles.IconWithdraw}>
                            <Icon name='download' size={26} color='#FFFFFF' />
                            <Text style={styles.IconText}>WITHDRAW</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Spin')}
                            style={styles.IconSpin}>
                            <Icon name='radar' size={26} color='#FFFFFF' />
                            <Text style={styles.IconText}>SPIN NOW</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.summaryCard}>
                        <View style={styles.summaryItem}>
                            <Text style={styles.label}>Today's Earnings</Text>
                            <Text style={[styles.value, { color: '#007BFF' }]}>₹120</Text>
                        </View>
                        <View style={styles.divider} />
                        <View style={styles.summaryItem}>
                            <Text style={styles.label}>Balance</Text>
                            <Text style={[styles.value, { color: '#fbc02d' }]}>₹3500.45</Text>
                        </View>
                        <View style={styles.divider} />
                        <View style={styles.summaryItem}>
                            <Text style={styles.label}>Frozen Amount</Text>
                            <Text style={[styles.value, { color: 'red' }]}>0</Text>
                        </View>
                    </View>

                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Today</Text>
                        <Text style={styles.seeAll}>See All</Text>
                    </View>

                    <View style={styles.todayCard}>
                        <View style={styles.todayRow}>
                            <Icon name='radar' size={30} color='red' />
                            <View>
                                <Text style={styles.todayLabel}>Latest Spin Reward</Text>
                                <Text>Rs.500</Text>
                            </View>
                        </View>
                        <View style={styles.separator} />
                        <View style={styles.todayRow}>
                            <Icon name='attach-money' size={30} color='skyblue' />
                            <View>
                                <Text style={styles.todayLabel}>Active Investment</Text>
                                <Text>Gold Plan | 2.5% Daily | Active</Text>
                            </View>
                        </View>
                        <View style={styles.separator} />
                        <View style={styles.todayRow}>
                            <Icon name='schedule' size={30} color='lightgreen' />
                            <View>
                                <Text style={styles.todayLabel}>Next Payout</Text>
                                <Text>12:45:30</Text>
                            </View>
                        </View>
                    </View>

                    <Text style={styles.recentTitle}>Recent Activity</Text>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingHorizontal: 15, marginBottom: 20 }} // adds space on both sides
                    >
                        <View style={styles.recentContainer}>
                            <View style={styles.recentCard}>
                                <View style={styles.activityTextContainer}>
                                    <Text style={styles.recentText}>Deposited{"\n"}Rs.500</Text>
                                    <Text style={styles.recentTime}>2h Ago</Text>
                                </View>
                                <View style={styles.recentContainerImageContainer}>
                                    <Image
                                        source={require('../../../assets/images/HomeScreen/homepageDepositedImage.png')}
                                        resizeMode="contain"
                                        style={styles.recentContainerImage}
                                    />
                                </View>
                            </View>

                            <View style={styles.recentCard}>
                                <View style={styles.activityTextContainer}>
                                    <Text style={styles.recentText}>Spin & Win{"\n"}Rs.100</Text>
                                    <Text style={styles.recentTime}>2h Ago</Text>
                                </View>
                                <View style={styles.recentContainerImageContainer}>
                                    <Image
                                        source={require('../../../assets/images/HomeScreen/homepageSipnAndWinImage.png')}
                                        resizeMode="contain"
                                        style={styles.recentContainerImage}
                                    />
                                </View>
                            </View>

                            <View style={styles.recentCard}>
                                <View style={styles.activityTextContainer}>
                                    <Text style={styles.recentText}>Withdraw{"\n"}Rs.200</Text>
                                    <Text style={styles.recentTime}>3h Ago</Text>
                                </View>
                                <View style={styles.recentContainerImageContainer}>
                                    <Image
                                        source={require('../../../assets/images/HomeScreen/homepageWithdrawImage.png')}
                                        resizeMode="contain"
                                        style={styles.recentContainerImage}
                                    />
                                </View>
                            </View>
                        </View>
                    </ScrollView>


                    <Text style={styles.recentTitle}>Play and Win Gift Hampers</Text>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={styles.horizontalScrollContainer}
                    >
                        <View style={styles.card}>
                            <Image source={require('../../../assets/images/HomeScreen/homepageBigWinImage.png')} style={styles.cardImage} />
                            <TouchableOpacity style={[styles.playButton, { top: height * 0.11, left: width * 0.13 }]}
                                onPress={() => navigation.navigate(SCREENS.SPINS)}
                            >
                                <Text style={styles.playButtonText}>Play Now</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.card}>
                            <Image source={require('../../../assets/images/HomeScreen/homepageGirlScrollImage.png')} style={styles.cardImage} />
                            <TouchableOpacity style={[styles.playButton, { top: height * 0.11, left: width * 0.13 }]}>
                                <Text style={styles.playButtonText}>Play Now</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.card}>
                            <Image source={require('../../../assets/images/HomeScreen/homepageLuckySpinImage.png')} style={styles.cardImage} />
                            <TouchableOpacity style={[styles.playButton, { top: height * 0.11, left: width * 0.13 }]}>
                                <Text style={styles.playButtonText}>Play Now</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

export default HomeScreen;


const styles = StyleSheet.create({

    scrollViewContent: {
        flexGrow: 1,
        backgroundColor: '#fff',
    },

    headerContent: {
        backgroundColor: "#34A853",
        padding: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    welcomeText: {
        color: '#fff',
        fontSize: RFValue(26),
        fontWeight: 500,
    },

    subText: {
        color: '#fff',
        fontSize: 14,
        marginTop: 5,
        fontWeight: 200
    },

    notificationIcon: {
        backgroundColor: '#FFFFFF',
        borderRadius: 6,
        padding: 4
    },

    imageMainContainer: {
        marginVertical: 20,
    },

    imageContainer: {
        marginHorizontal: 10,
        height: 180,
        width: Dimensions.get('window').width * 0.9,

    },

    image: {
        width: '100%',
        height: '100%',
        borderRadius: 12,
    },

    dotContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },

    dot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: '#ccc',
        marginHorizontal: 4,
    },

    activeDot: {
        backgroundColor: '#34A853',
        width: 10,
        height: 10,
    },

    IconMainContaineer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        gap: 30,
        alignItems: 'center',
        marginBottom: 20
    },

    IconDeposit: {
        backgroundColor: '#FF8800',
        padding: 12,
        alignItems: 'center',
        borderRadius: 13,
        width: 70,
        height: 65,
        gap: 5,
        top: -50,
        right: 15
    },

    IconWithdraw: {
        backgroundColor: '#FF8800',
        padding: 12,
        alignItems: 'center',
        borderRadius: 13,
        width: 70,
        height: 65,
        gap: 5,
        top: -70
    },

    IconSpin: {
        backgroundColor: '#FF8800',
        padding: 12,
        alignItems: 'center',
        borderRadius: 13,
        width: 70,
        height: 65,
        gap: 5,
        top: -50,
        left: 15
    },

    IconText: {
        color: '#fff',
        fontSize: RFValue(6),
        fontWeight: '400'
    },

    summaryCard: {
        backgroundColor: "#fff",
        marginHorizontal: 16,
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        borderWidth: 1,
        borderColor: '#3771C866',
        shadowColor: '#00000040',
        elevation: 10,
    },

    summaryItem: {
        alignItems: 'center',
        flex: 1,
    },

    label: {
        fontSize: 14,
        color: '#000000',
        marginBottom: 6,
    },

    value: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    divider: {
        width: 1,
        height: '100%',
        backgroundColor: '#e0e0e0',
    },

    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 40,
    },

    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
    },

    seeAll: {
        color: 'green',
        fontWeight: '500',
        top: 30
    },

    todayCard: {
        backgroundColor: '#fff',
        margin: 16,
        padding: 16,
        borderRadius: 6,
        elevation: 4,
        top: 20,
        borderWidth: 0.5,
        shadowOffset: { width: 0, height: 2 },
        borderColor: '#00000036',
    },

    todayRow: {
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        marginBottom: 12
    },

    todayLabel: {
        fontWeight: '600',
        fontSize: RFValue(14),
        color: '#000000'

    },

    separator: {
        borderBottomWidth: 1,
        borderColor: '#eee',
        marginVertical: 6,
    },

    recentTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginLeft: 16,
        marginTop: 40,
        marginBottom: 10
    },

    recentContainer: {
        flexDirection: 'row',
        marginTop: 30,
        alignItems: 'center',
        gap: 15,
    },

    recentCard: {
        width: 180,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        elevation: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderWidth: 0.5,
        borderColor: '#8F8F8F69',

    },

    recentText: {
        fontSize: RFValue(14),
        fontWeight: '400',
        marginBottom: 20,
        color: '#000000'
    },

    recentTime: {
        fontSize: 12,
        color: '#000000',
    },

    recentContainerImageContainer: {
        width: 80,
        height: 80,
    },

    recentContainerImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },

    horizontalScrollContainer: {},
    card: {
        marginTop: 20,
        marginRight: 15,
        marginLeft: 20,
        width: 192,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#fff',
        elevation: 3,
    },
    cardImage: {
        width: '100%',
        height: 133,
        resizeMode: 'cover',
    },

    playButton: {
        backgroundColor: '#34A853',
        paddingVertical: 10,
        width: 100,
        alignItems: 'center',
        position: 'absolute',
        borderRadius: 6
    },

    playButtonText: {
        color: '#fff',
        fontSize: 8,
        fontWeight: 600,
    },
});
