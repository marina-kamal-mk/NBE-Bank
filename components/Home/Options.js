import { View, StyleSheet, Text, Pressable, Image } from "react-native";

const data = [
    {
        name: 'Accounts',
        color: 'rgba(0, 201, 116, 0.15)',
        img: require('./../../assets/account.png')
    },
    {
        name: 'Cards',
        color: 'rgba(0, 173, 248, 0.15)',
        img: require('./../../assets/card.png')
    },
    {
        name: 'Utilities',
        color: 'rgba(246, 167, 33, 0.15)',
        img: require('./../../assets/utilities.png')
    },
    {
        name: 'History',
        color: 'rgba(255, 0, 46, 0.15)',
        img: require('./../../assets/history.png')
    }
]
function Options(){

    return(
        <View style={styles.tabs}>
            {
                data.map(icon => 
                <View>
                    <Pressable style={[styles.button, {backgroundColor: icon.color}]}>
                        <Image source={icon.img}/>
                    </Pressable>
                    <Text style={styles.text}>{icon.name}</Text>
                </View>)
            }
            
        </View>
    )
}
const styles = StyleSheet.create({
    tabs:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        marginLeft: 20,
        marginRight: 20
    },
    button:{
        width: 60,
        height: 60,
        borderRadius: 13,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        color: '#1C2437',
        textAlign: 'center'
    }
})
export default Options;