import {View, Image, StyleSheet, Text} from 'react-native';

function EmptyHistory(){

    return(
    <View style={styles.cont}>
        <Image source={require('./../../assets/no_history.png')} style={styles.img}/>
        <Text style={styles.text}>No History</Text>
        <Text style={styles.des}>Not a single transaction was made to this account.</Text>
    </View>
    )
}
const styles = StyleSheet.create({
    cont:{
        margin: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        color: '#34343F',
        fontFamily: 'Roboto-Bold',
        fontSize: 18,
        marginTop: 10
    },
    des:{
        color: '#34343F',
        fontFamily: 'Roboto-Regular',
        fontSize: 14,
        marginTop: 2,
        textAlign: 'center'
    },
    img:{
        width: 170,
        height: 200
    }
})
export default EmptyHistory;