import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SCREENS } from '../../../navigation/Route/screens';


const ReferralEarningsScreen = ({ navigation }) => {
    const [selectedLevel, setSelectedLevel] = useState(1);

    const referralLevels = [
        { level: 1, label: 'LEVEL 1', commission: '10%' },
        { level: 2, label: 'LEVEL 2', commission: '20%' },
        { level: 3, label: 'LEVEL 3', commission: '30%' },
    ];

    const levelData = {
        1: Array(8).fill({
            name: 'Aman Singh',
            date: '2025-04-15',
            earnings: '₹50',
        }),
        2: Array(5).fill({
            name: 'Ravi Sharma',
            date: '2025-04-16',
            earnings: '₹75',
        }),
        3: Array(3).fill({
            name: 'Neha Verma',
            date: '2025-04-17',
            earnings: '₹100',
        }),
    };
    const referralData = levelData[selectedLevel];

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate(SCREENS.REFERRAL)}>
                    <Icon name="arrow-left" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Referral Earnings</Text>
                <TouchableOpacity onPress={() => console.log('Notifications')}>
                    <Icon name="bell-outline" size={24} color="#fff" />
                </TouchableOpacity>
            </View>


            {/* Card */}
            <View style={styles.card}>
                <View style={styles.levelContainer}>

                    {referralLevels.map((level) => {
                        const isActive = selectedLevel === level.level;
                        return (
                            <TouchableOpacity
                                key={level.level}
                                style={styles.levelItem}
                                onPress={() => setSelectedLevel(level.level)}
                            >
                                <View style={styles.levelContent}>
                                    <Text style={styles.levelLabel}>{level.label}</Text>
                                    <Text style={styles.commissionText}>
                                        {level.commission} Commission
                                    </Text>
                                </View>
                                {isActive && <View style={styles.activeUnderline} />}
                            </TouchableOpacity>
                        );
                    })}


                </View>

                {/* Table Header */}
                <View style={styles.tableHeader}>
                    <Text style={[styles.headerCell, { flex: 2 }]}>Name</Text>
                    <Text style={[styles.headerCell, { flex: 2 }]}>Joined On</Text>
                    <Text style={[styles.headerCell, { flex: 1 }]}>Earnings</Text>
                </View>

                {/* Table Body */}
                <FlatList
                    data={referralData}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.tableRow}>
                            <Text style={[styles.cell, { flex: 2 }]}>{item.name}</Text>
                            <Text style={[styles.cell, { flex: 2 }]}>{item.date}</Text>
                            <Text style={[styles.cell, { flex: 1 }]}>{item.earnings}</Text>
                        </View>
                    )}
                />
            </View>
        </SafeAreaView>
    );
};

export default ReferralEarningsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    header: {
        backgroundColor: '#34A853',
        paddingVertical: 16,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 80
    },

    headerText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        right: 50
    },

    levelContainer: {
        flexDirection: 'row',
        backgroundColor: '#d6f0d6',
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#cce5cc',
    },

    levelItem: {
        flex: 1,
        alignItems: 'center',
    },

    levelContent: {
        paddingVertical: 12,
        backgroundColor: '#84D299',
        width: '100%',
    },

    levelLabel: {
        fontWeight: '600',
        fontSize: 13,
        textAlign: 'center',
        color: '#FFFFFF',
    },

    commissionText: {
        fontSize: 11,
        color: '#FFFFFF',
        textAlign: 'center',
    },

    activeUnderline: {
        height: 6,
        backgroundColor: '#FF8800',
        width: '100%',
    },

    card: {
        backgroundColor: '#fff',
        marginHorizontal: 16,
        borderRadius: 6,
        borderWidth: 0.5,
        borderColor: '#00000036',
        elevation: 6,
        marginTop: 40,
        paddingBottom: 10,
        color: '#fff'
    },

    tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        paddingVertical: 8,
        paddingHorizontal: 15,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#ddd',
        marginHorizontal: 16,
        borderRadius: 4,
        elevation: 4,
        top: 30,
        marginBottom: 40
    },

    headerCell: {
        fontWeight: 'bold',
        color: '#333',
    },

    tableRow: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderBottomWidth: 0.9,
        borderColor: '#eee',
        marginHorizontal: 16,
    },

    cell: {
        color: '#333',
    },
});
