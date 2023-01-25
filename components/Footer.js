import { View , StyleSheet, Text} from "react-native";

function Footer(){
    return(
        <View style={styles.footer}>
            {/* <View style={styles.rowOne}>
                <Text>Contact Us</Text>
                <Text> - </Text>
                <Text>FAQs</Text>
                <Text> - </Text>
                <Text>Help</Text>
            </View> */}
            <Text style={styles.text}>Contact Us - FAQs - Help</Text>
            <Text style={[styles.text, {color:'white', fontSize: 12, fontFamily: 'Roboto-Regular'}]}>Copyright © NBE 2021 All Rights Reserved - National Bank of Egypt</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    footer:{
        // display: 'flex',
        // flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        width: '100%',
        bottom: 0,
    },
    text:{
        color: '#F6A721',
        fontSize: 14,
        fontFamily: 'Roboto-Bold',
        paddingBottom: 10,
        paddingTop: 5,
    },
    
});
export default Footer;