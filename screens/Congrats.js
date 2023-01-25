import { View , StyleSheet, Text, ImageBackground, Image} from "react-native";
import Button from "../components/Button";
import Title from "../components/Title";
function Congrats(){
    
    return(
        
        // <ImageBackground source={require('./../assets/congrats.png')}
        // style={styles.bg} >
        <View style={styles.bg}>
            <ImageBackground source={require('./../assets/congrats.png')} style={styles.bg_img}>
            </ImageBackground>
            <View style={styles.bg_info}>
                    <Image source={require('./../assets/logo.png')} style={styles.image}/>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Congratulations</Text>
                        <Text style={styles.subTitle}>You have successfully registered in NBE online banking service</Text>
                    </View>
                    <Button style={styles.btn}>Finish</Button>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    bg:{
        backgroundColor: '#007236',
        flex: 1,
    },
    bg_img:{
        position: 'absolute',
        width :'100%',
        height: '100%',
        bottom: 0,
        top: '16%'
    },
    bg_info:{
        margin: '4%',
        flex: 1,
       marginTop: '10%'
    },
    image:{
        position: 'absolute',
        width: 175,
        height: 39,
        right: 0
    },
    btn:{
        position: 'absolute',
        bottom: 0
    },
    titleContainer:{
        marginTop: '16%'
    },
    title:{
        fontFamily: 'Roboto-Bold',
        fontSize: 30,
        color: '#F7F7F7'
    },
    subTitle:{
        fontFamily: 'Roboto-Medium',
        color: '#F7F7F7',
        fontSize: 16
    },
});
export default Congrats;