import { View, StyleSheet , Text, TextInput} from "react-native";
import Button from "./Button";
import Icon from "react-native-vector-icons/Entypo";
import Title from "./Title";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

function MobileNumber(props){
    const navigate = useNavigation();
    const[borderColor, setborderColor] = useState('white');
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
                    onChangeText={props.change}
                    onFocus={()=>setborderColor('#007236')}
                    onBlur={()=>setborderColor('white')}/>
                </View>
            </View>
        </View>
        <View style={styles.footer}>
            <Button onPress={()=>navigate.push('mobile', {x: 'code'})}>Next</Button>
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
    }
});
export default MobileNumber;