import { Image, StyleSheet, View } from "react-native";

//get the variable from redux
var dark = false;
function Splash(){

    return(

        <View style={styles.container}>
            {
                dark ? 
                (
                    <>
                    <Image source={require('./../assets/LogoDark.png')}
                    style={styles.logo}/>
                    <Image source={require('./../assets/FooterDark.png')} 
                    style={styles.footer}/></>
                ) :
                (
                    <>
                    <Image source={require('./../assets/GroupLogo.png')}
                    style={styles.logo}/>
                    <Image source={require('./../assets/SplashLogo.png')} 
                    style={styles.footer}/></>
                )
            }
            
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: dark ? '#1C2437':'#E5E5E5',
        flex: 1
    },
    footer:{
        position: 'absolute',
        bottom: 30,
        width: 170,
        height: 50
    },
    logo: {
        width: 180,
        height: 210,
    }
})
export default Splash;