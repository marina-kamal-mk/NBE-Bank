import { useState } from "react";
import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
import CheckBox from "./CheckBox";
import Button from "./Button";
import Input from "./Input";
import { useNavigation } from "@react-navigation/native";
import FingerButton from "./FingerButton";
import { SignIn, getUsersByMob } from "../firebase/Firebase";
import { setUser } from "../redux/User";
import { useDispatch, useSelector } from "react-redux";
import { welcome } from "../language";

function InputForm(){
    const navigate = useNavigation();
    const dispatch = useDispatch();
    const language = useSelector(state => state.Lang.lang);
    const [remember, setRemember] = useState(false);    

    const [userData, setuserData] = useState({username:'', password:''});
    function getData(name, value){
        //const {value, name} = e.target;
        setuserData({...userData, [name]: value});
    }

    async function Login(){
        //setuserData(...userData, {[name:]})
        console.log(userData);
        try {
            
            const res = await SignIn({email: userData.username+'@nbeBank.com', password: userData.password, returnSecureToken: true});
            console.log(res);
            const r = await getUsersByMob(userData.username);
            dispatch(setUser({...res, ...r[0]}));
            setuserData({username:'', password:''});
            navigate.push('home');
        } catch (error) {
            console.log(error.message);
            if(error.message === 'Request failed with status code 400'){
                Alert.alert('Please, Try again', 'Incorrect Credentials !!', [
                    {
                      text: 'OK',
                      onPress: () => setuserData({username:'', password:''}),
                      style: 'cancel',
                    },
                  ]);
            }
           
        }
    }

    return(
                <View style={{flex: 1}}>
                    <Input text={language ? welcome.en.input1: welcome.ar.input1} icon_name="alternate-email" 
                    other={{onChangeText: getData.bind(this, 'username'),
                    value: userData.username}}/>
                    <Input text={language ? welcome.en.input2: welcome.ar.input2} icon_name="lock-outline"  password_flag="true" 
                    other={{onChangeText: getData.bind(this, 'password'),
                    value: userData.password}}/>
                    <View style={[styles.control, language ? {flexDirection: 'row'}:{flexDirection: 'row-reverse'}]}>
                    <CheckBox
                        onPress={() => setRemember(!remember)}
                        title={language ? welcome.en.options1 : welcome.ar.options1}
                        isChecked={remember}
                    />
                    <Pressable>
                        <Text style={[styles.text, {color: 'white'}]}>{language ? welcome.en.options2 : welcome.ar.options2}</Text>
                    </Pressable>
                    </View>
                    <View style={[styles.btnContainer, language ? {flexDirection: 'row'}:{flexDirection: 'row-reverse'}]}>
                        <Button style={{width: '75%'}} onPress={Login}>{language ? welcome.en.btn : welcome.ar.btn}</Button>
                        <FingerButton text={'Log in with your fingerprint'} size={35}/>
                    </View>
                    <View style={styles.line}>
                        <Text style={styles.account}>{language ? welcome.en.signup : welcome.ar.signup}  
                            <Pressable onPress={()=>navigate.push('mobile', {x: 'mob'})} >
                                <Text style={[styles.account, {color: '#F6A721', textDecorationLine: 'underline', fontFamily: 'Roboto-Bold'}]}> {language ? welcome.en.signup2 : welcome.ar.signup2}</Text>
                            </Pressable>
                        </Text>
                    </View>
                </View>
    );
}
const styles = StyleSheet.create({
    text:{
        fontSize: 16,
        padding: 4,
        fontFamily: 'Roboto-Regular'
    },
    icon:{
        margin: 10
    },
    control:{
        display: 'flex',
        //flexDirection: 'row',
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
        //flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 0,
        margin: 20,
    },
    account:{
        //textAlign: 'center',
        color: 'white',
        fontFamily: 'Roboto-Regular',
        fontSize: 16
    },
    line: {
        justifyContent: 'center', 
        alignItems: 'center'
    }
})
export default InputForm;