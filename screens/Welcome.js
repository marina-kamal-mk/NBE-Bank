import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, View , ImageBackground, StyleSheet, Text, ScrollView} from "react-native";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InputForm from "../components/InputForm";

function Welcome(){
    return(
        <ImageBackground source={require('./../assets/person_backg.png')}
        resizeMode='stretch' imageStyle={styles.image_bg} style={styles.background}>
            <Header text='AR'/>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.cont}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ScrollView>
                        <Text style={styles.welcomeText}>Welcome to The National Bank of Egypt</Text>
                        <InputForm/>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
                        <Footer style={styles.foot}/>
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
    },
    foot:{
        justifyContent: 'flex-end',
    }
});
export default Welcome;