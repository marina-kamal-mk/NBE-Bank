import { View , ImageBackground, StyleSheet, Text} from "react-native";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InputForm from "../components/InputForm";

function Welcome(){
    return(
        <ImageBackground source={require('./../assets/person_backg.png')}
         resizeMode='stretch' imageStyle={styles.image_bg} style={styles.background}>
            <Header text='AR'/>
            <Text style={styles.welcomeText}>Welcome to The National Bank of Egypt</Text>
            <InputForm/>
            <Footer/>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background:{
        flex:1,
        backgroundColor: 'rgba(0,0,0,0.8)',
        //paddingHorizontal: 10
    },
    image_bg:{
        opacity:0.45,
    },
    welcomeText:{
        fontSize: 40,
        fontWeight: '700',
        color: 'white',
        margin: '5%',
        marginTop: '20%',
        fontFamily: 'Roboto-Regular'
    }
});
export default Welcome;