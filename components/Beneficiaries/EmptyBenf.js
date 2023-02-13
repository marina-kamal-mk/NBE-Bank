import {View, Image, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function EmptyBenf(){
    return(
    <View style={styles.cont}>
        <Image source={require('./../../assets/no_benf.png')} style={styles.img}/>
        <Text style={styles.text}>No Beneficiaries</Text>
        <Text style={styles.des}>You don’t have beneficiaries, add some so you can send money</Text>
        <View style={styles.add}>
            <Icon name="add-circle-outline" size={20} color='white' style={styles.iocn}/>
            <Text style={styles.addText}>Add</Text>
        </View>
    </View>
    )
}
const styles = StyleSheet.create({
    cont:{
        margin: 90,
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
        marginTop: 5
    },
    add:{
        borderRadius: 50,
        backgroundColor: '#007236',
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10
    },
    addText:{
        color: 'white',
        fontFamily: 'Roboto-Regular',
        fontSize: 14,
        padding: 9,
        paddingLeft: 0
    },
    iocn:{
        padding: 8,
    },
    img:{
        width: 200,
        height: 140
    }
})
export default EmptyBenf;