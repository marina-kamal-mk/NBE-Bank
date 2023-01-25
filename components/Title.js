import { View, Text, StyleSheet } from "react-native";

function Title(props){
    return(
        <View>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.subTitle}>{props.subtitle} {props.mobile}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    title:{
        fontFamily: 'Roboto-Bold',
        fontSize: 20,
        color: 'black'
    },
    subTitle:{
        fontFamily: 'Roboto-Regular',
        color: '#B7B7B7',
        fontSize: 16
    },
})
export default Title;