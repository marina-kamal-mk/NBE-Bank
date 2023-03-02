import { View, StyleSheet, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { changeLang } from "../redux/Lang";

function Header(props){
    const navigate = useNavigation();
    const dispatch = useDispatch();
    const language = useSelector(state => state.Lang.lang);
    console.log(language)
    var bg_color = 'white';
    if(props.icon){bg_color = '#007236';}
    
    return(
        <View style={styles.header}>
            {
                props.icon ? <Image source={require('./../assets/logogreen.png')} style={styles.image}/>:
                <Image source={require('./../assets/logo.png')} style={styles.image}/>
            }
            
            <View style={[{backgroundColor: bg_color},styles.button]}>
                <Pressable android_ripple={{color: '#F5F5DC'}}
                onPress={()=>{props.text ? dispatch(changeLang(!language)): navigate.goBack();}}>
                    {
                        props.icon ? props.icon : <Text style={styles.buttonText}>{language ? 'AR':'EN'}</Text>
                    }
                    
                </Pressable>
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    header:{
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent:'space-between',
        margin: '4%',
        marginTop: '8%'
    },
    image:{
        width: 175,
        height: 39
    },
    button:{
       // backgroundColor: bg_color,
        borderRadius: 10,
        padding: 10
    },
    buttonText:{
        fontSize: 16,
        color: '#007236',
        fontWeight: '700'

    }
})
export default Header;