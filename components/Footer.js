import { View , StyleSheet, Text} from "react-native";
import { useSelector } from "react-redux";
import { footer } from "../language";

function Footer(){
    const language = useSelector(state => state.Lang.lang);
    
    return(
        <View style={{flex:1,justifyContent:'flex-end' }}>        
            <View style={styles.footer}>
                <Text style={styles.text}>{language ? footer.en.one: footer.ar.one}</Text>
                <Text style={[styles.text, {color:'white', fontSize: 12, fontFamily: 'Roboto-Regular'}]}>{language ? footer.en.two: footer.ar.two}</Text>
            </View>
        </View>

    );
}
const styles = StyleSheet.create({
    footer:{
        // display: 'flex',
        // flexDirection: 'column',
        // flex:1,
        alignItems: 'center',
        // justifyContent: 'flex-end',
        //position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        width: '100%',
        //bottom: 0,
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