import { Pressable, StyleSheet, Text, View } from "react-native";

function Button({children, style, onPress}){
    return(
        <View style={[styles.btnContainer, style]}>
            <Pressable onPress={onPress}>
                <Text style={styles.btnText}>{children}</Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    btnContainer:{
        padding: 10,
        backgroundColor: '#007236',
        borderRadius: 12.5,
        borderWidth: 1.5,
        borderColor: '#007236',
        width: '100%',
        alignItems: 'center'
    },
    btnText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Roboto-Bold',
    }
})
export default Button;