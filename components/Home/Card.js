import { View, StyleSheet, Text, Image } from 'react-native';

function Card(item){
    return(
        <View style={styles.card}>
            {/* <Image source={{uri: item.item.img}} style={styles.profile}/> */}
            <Image source={{uri: item.item.image}} style={styles.profile}/>
            <Text style={styles.name}>{item.item.name.split(' ')[0]}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    name:{
        color: '#1C2437',
        fontFamily: 'Roboto-Regular',
        fontSize: 14,
        padding: 5
    },
    card:{
        alignItems: 'center',
        backgroundColor: '#F8F9FC',
        borderRadius: 10,
        marginRight: 20,
        marginTop: 8,
        width: 86,
        height: 80,
        overflow: 'hidden' 
    },
    profile:{
        flex: 1,
        width: 140,
        height: 100
    }
})
export default Card;