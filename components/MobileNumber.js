import { View, StyleSheet , Text, TextInput} from "react-native";
import Button from "./Button";
import Icon from "react-native-vector-icons/Entypo";
import Title from "./Title";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setMobile } from "../redux/Mobile";
import { getUsersByMob } from "../firebase/Firebase";

function MobileNumber(){
    const navigate = useNavigation();
    const dispatch = useDispatch();
    const [mob, setmob] = useState('');
    const [error, setError] = useState('');
    const[borderColor, setborderColor] = useState('white');
    function get_mob(number){
        setmob(number);
        setError('');
    }

    async function Submit(){
        if(mob === '') 
        {
            setborderColor('#ff0000');
            return;
        }
        else if(mob.length < 10) {
            setborderColor('#ff0000');
            return;
        }
        const r = await getUsersByMob(0+mob);
        if(r.length !== 0)
        {
            setError('Mobile number already exists.');
            return;
        }

        dispatch(setMobile(mob));
        setmob("");
        navigate.push('mobile', {x: 'code'});
    }
return(
    <View style={styles.container}>
        <Title title="Mobile number" 
        subtitle= "Enter the mobile number registred in the bank"
        />
        <View style={[styles.inputText, {borderColor: borderColor}]}>
            <Icon name="mobile" size={30} style={styles.icon}/>
            <View>
                <Text style={styles.text}>Mobile number</Text>
                <View style={styles.phone}>
                    <Text style={styles.number}>+20 </Text>
                    <TextInput style={styles.number} keyboardType='number-pad' maxLength={10}
                    onChangeText={get_mob} value={mob}
                    onFocus={()=>setborderColor('#007236')}
                    onBlur={()=>setborderColor('white')}/>
                </View>
            </View>
        </View>
        <Text style={styles.error}>{error}</Text>
        <View style={styles.footer}>
            <Button onPress={Submit}>Next</Button>
            <Text style={styles.footerText}>By signing up, you agree to our  
                <Text style={styles.boldText}> Terms of Service</Text> and acknowledge that you have read our
             <Text style={styles.boldText}> Privacy Policy</Text>.</Text>
        </View>
    </View>
)
}
const styles = StyleSheet.create({
    container:{
        margin: '5%',
        flex: 1
    },
    boldText: {
        fontFamily: 'Roboto-Bold',
        color: 'black'
    },
    footerText: {
        color: '#808080',
        fontFamily: 'Roboto-Regular',
        marginTop: 20,
        margin: '1%',
    },
    footer:{
        position: 'absolute',
        bottom: 0,
    },
    inputText: {
        display: 'flex',
        flexDirection: 'row',
        //borderColor: '#007236',
        borderRadius: 10,
        borderWidth: 1.5,
        marginTop: 20,
        backgroundColor: 'white'
    },
    text:{
        color: '#007236',
        fontSize: 16,
        padding: 4,
        fontFamily: 'Roboto-Bold'
    },
    number:{
        color: 'black',
        fontSize: 16,
        padding: 4,
        fontFamily: 'Roboto-Regular'
    },
    icon:{
        color: '#B7B7B7',
        margin: 10
    },
    phone:{
        display: 'flex',
        flexDirection: 'row'
    },
    error:{
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        color: 'red'
    }
});
export default MobileNumber;