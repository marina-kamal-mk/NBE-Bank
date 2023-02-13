import { View, StyleSheet, Image, Pressable } from "react-native";
import Back from 'react-native-vector-icons/Ionicons';

function HeaderBenf(props){
    return(
        <View style={styles.header}>
            <View style={styles.btns}>
                <Pressable style={styles.button} onPress={props.press}>
                    <Back size={30} color="white" name="chevron-back"/>
                </Pressable>
                <Pressable style={[styles.button, {backgroundColor: '#E5E5E5'}]}>
                    <Image source={require('./../../assets/bell.png')}/>
                </Pressable>
            </View>
            <Image source={require('./../../assets/logogreen.png')} style={styles.logo}/>
        </View>
    )
}
const styles=StyleSheet.create({
    header:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 25,
        margin: 12
    },
    logo:{
        width: 166,
        height: 39
    },
    button: {
        borderRadius: 10,
        backgroundColor: '#007236',
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },
    btns: {
        display: 'flex',
        flexDirection: 'row'
    }
})
export default HeaderBenf;