import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import CheckBox from "./CheckBox";
import FingerPrintIcon from 'react-native-vector-icons/FontAwesome5';
import Button from "./Button";
import Input from "./Input";
import { useNavigation } from "@react-navigation/native";
import FingerPrint from "./FingerPrint";

function InputForm(){
    const navigate = useNavigation();

    const [remember, setRemember] = useState(false);

    const [finger, showFinger] = useState(false);

    const [userData, setuserData] = useState({username:'', password:''});
    function getData(name, value){
        //const {value, name} = e.target;
        setuserData({...userData, [name]: value});
    }
    function Login(){
        //setuserData(...userData, {[name:]})
        console.log(userData);
        //navigate.push('mobile', {x: 'mob'});
    }

    return(
        <View>
            <Input text="Username" icon_name="alternate-email" 
            other={{onChangeText: getData.bind(this, 'username'),
            value: userData.username}}/>
            <Input text="Password" icon_name="lock-outline"  password_flag="true" 
             other={{onChangeText: getData.bind(this, 'password'),
             value: userData.password}}/>
            <View style={styles.control}>
            <CheckBox
                onPress={() => setRemember(!remember)}
                title="Remember me"
                isChecked={remember}
              />
              <Pressable>
                <Text style={[styles.text, {color: 'white'}]}>Forgot password?</Text>
              </Pressable>
            </View>
            <View style={styles.btnContainer}>
                <Button style={{width: '75%'}} onPress={Login}>Log In</Button>
                {/* <View style={styles.login}>
                    <Pressable >
                        <Text style={styles.loginText}>Log In</Text>
                    </Pressable>
                </View> */}
                <View style={styles.finger}>
                    <Pressable onPress={()=>showFinger(true)}>
                        <FingerPrintIcon name='fingerprint' style={styles.fingerIcon} size={35}/>
                        {finger ? <FingerPrint finger={finger} showFinger={showFinger}/> : ""}
                    </Pressable>
                </View>
            </View>
            <View>
                <Text style={styles.account}>Don't have an account?  
                    <Pressable onPress={()=>navigate.push('mobile', {x: 'mob'})} >
                        <Text style={[styles.account, {color: '#F6A721', textDecorationLine: 'underline', fontFamily: 'Roboto-Bold'}]}> Sign Up</Text>
                    </Pressable>
                </Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    inputText: {
        display: 'flex',
        flexDirection: 'row',
        // borderColor: 'rgba(255, 255, 255, 0.5)',
        // borderRadius: 10,
        // borderWidth: 1.5,
        // margin: 20,
        // backgroundColor: 'rgba(0, 0, 0, 0.3)',
        // marginTop: 5
    },
    text:{
        //color: 'white',
        fontSize: 16,
        padding: 4,
        fontFamily: 'Roboto-Regular'
    },
    icon:{
        //color: 'white',
        margin: 10
    },
    control:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
        marginTop: 5
    },
    login:{
        padding: 10,
        backgroundColor: '#007236',
        borderRadius: 12.5,
        borderWidth: 1.5,
        borderColor: '#007236',
        width: '75%',
        alignItems: 'center'
    },
    loginText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Roboto-Bold',
    },
    btnContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 0,
        margin: 20,
    },
    finger: {
        padding: 10,
        borderColor: '#F6A721',
        borderWidth: 1.5,
        borderRadius: 12.5
    },
    fingerIcon:{
        color: '#F6A721'
    },
    account:{
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Roboto-Regular',
        fontSize: 16
    },
    inputContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        //borderColor: '#007236',
        // borderRadius: 10,
        // borderWidth: 1.5,
        // marginTop: 20,
        // backgroundColor: 'white'
        borderColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 10,
        borderWidth: 1.5,
        margin: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        marginTop: 5
    },
})
export default InputForm;