import { Pressable, StyleSheet, Text, View } from "react-native";
import FingerButton from "../FingerButton";

function Button({children, style, onPress}){
    return(
        <View style={[styles.btnContainer, style]}>
            <View style={styles.line}>
                <Pressable onPress={onPress}>
                    <Text style={styles.btnText}>{children}</Text>
                </Pressable>
                <FingerButton size={20} text={'Air Payment'}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    btnContainer:{
        padding: 7,
        backgroundColor: '#007236',
        borderRadius: 12.5,
        borderWidth: 1.5,
        borderColor: '#007236',
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        margin: 15,
        height: '8%'
    },
    btnText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Roboto-Bold',
    },
    line:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
})
export default Button;