import { View, StyleSheet, Text } from "react-native";
import FingerButton from "../FingerButton";

function Balance(){
    return(
        <View style={styles.card}>
            <View style={styles.title}>
                <Text style={styles.title_text}>Balance</Text>
                <View style={styles.finger}>
                    <FingerButton text='Show balance with your fingerprint' size={20} style={styles.finger}/>
                </View>
            </View>
            <View style={styles.balance_cont}>
                <Text style={styles.balance}>Press here to show balance</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    card:{
        margin: 20,
        borderRadius: 22,
        backgroundColor: '#003D1D',
    },
    title:{
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title_text: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        color: 'white',
        padding: 15
    },
    finger:{
        padding: 10,
    },
    balance:{
        fontSize: 22,
        fontFamily: 'Roboto-Bold',
        color: 'white'
    },
    balance_cont:{
        alignItems: 'center',
        padding: 5,
        marginBottom: 30
    }
})
export default Balance;