import { View, StyleSheet , Text, TextInput, Pressable} from "react-native";
import Button from "./Button";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import Dot from 'react-native-vector-icons/Octicons';
import Title from "./Title";
import EyeIcon from 'react-native-vector-icons/Feather';
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SignUp, Users } from "../firebase/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/User";

function Password(){
    const navigate = useNavigation();
    const dispatch = useDispatch();

    const[border , setBorder] = useState("white");
    const[border1 , setBorder1] = useState("white");
    const[icon , setIcon] = useState("eye-off");
    const[icon2 , setIcon2] = useState("eye-off");
    const[secure , setSecure] = useState(true);
    const[secureConf , setSecure_Conf] = useState(true);

    
    const[passFlag, setPassFlag] = useState({
        lowercase: false, 
        uppercase: false, 
        number: false, 
        special:false,
        length: false
    });
    
    const[error, setError] = useState('');

    function ViewPassword(){
        if(icon === "eye")
        setIcon("eye-off");
        else setIcon("eye");
        setSecure(!secure);
    }
    function ViewPassword_conf(){
        if(icon2 === "eye")
        setIcon2("eye-off");
        else setIcon2("eye");
        setSecure_Conf(!secure);
    }

    const [data, setData]=useState({password:'', confirmPassword: ''});
    function get_password(name, value){
        setError('');
        if(name === 'password' && border1 === '#ff0000')
        {setBorder('white'); setBorder1('#007236');}
        else if(name === 'confirmPassword' && border === '#ff0000')
        {setBorder1('white'); setBorder('#007236');}
        setData({...data, [name]: value});

        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        //console.log(!(/[a-z]/.test(data.password)))
        if(name === 'password'){

            if(value.length >= 8) setPassFlag(color=> {return{...color, length: true}});
            else if(value.length < 8) setPassFlag(color=> {return{...color, length: false}});
            if(/[a-z]/.test(value)) setPassFlag(color=> {return{...color, lowercase: true}});
            else if(!(/[a-z]/.test(value))) setPassFlag(color=> {return{...color, lowercase: false}});
            if(/[A-Z]/.test(value)) setPassFlag(color=> {return{...color, uppercase: true}});
            else if(!(/[A-Z]/.test(value))) setPassFlag(color=> {return{...color, uppercase: false}});
            if(/[0-9]/.test(value)) setPassFlag(color=> {return{...color, number: true}});
            else if(!(/[0-9]/.test(value))) setPassFlag(color=> {return{...color, number: false}});
            if(specialChars.test(value)) setPassFlag(color=> {return{...color, special: true}});
            else if(!(specialChars.test(value))) setPassFlag(color=> {return{...color, special: false}});
        }
    }

    const mobile = useSelector(state=> state.Mobile.mobile);
 
    async function Submit(){
        if(data.password === '') {setBorder1('#ff0000'); return; }
        if(data.confirmPassword === '') {setBorder('#ff0000'); return; }
        if(data.password !== data.confirmPassword) {setError('Not Matching Passwords'); return;}
        if(passFlag.length === false ||
        passFlag.lowercase === false || passFlag.uppercase === false || passFlag.number === false
        || passFlag.special === false) return;
        
        try {
            
            const res = await SignUp({email: '0'+mobile+'@nbeBank.com', password: data.password, returnSecureToken: true});
            console.log(res)
            dispatch(setUser(res));
            const r = await Users({phone: res.email.split('@')[0], 
            uid: res.localId});
            console.log("r", r);
            navigate.push('final');
        } catch (error) {
            console.log(error.message)

        }
    }
return(
    <View style={styles.container}>
        <Title title="Set your password" 
        subtitle= "Enter a strong password for your online banking account"
        />
        <View style={[styles.inputContainer, {borderColor: border1}]}>
            <View style={styles.inputText}>
                <Icon name="lock" size={30} style={styles.icon}/>
                <View>
                    <Text style={styles.text}>Password</Text>
                    <TextInput style={styles.password} 
                    secureTextEntry={secure}
                    onFocus={()=>setBorder1('#007236')} 
                    onBlur={()=>setBorder1('white')} 
                    onChangeText={get_password.bind(this, 'password')}/>
                </View>
            </View>
            <Pressable onPress={ViewPassword}><EyeIcon name={icon} size={28} style={styles.icon}/></Pressable>
        </View>
        <View style={[styles.inputContainer, {borderColor: border}]}>
            <View style={styles.inputText}>
                <Icon name="lock" size={30} style={styles.icon}/>
                <View>
                    <Text style={styles.text}>Password</Text>
                    <TextInput style={styles.password} placeholder="Re-Write your password here"
                    secureTextEntry={secureConf}
                    onFocus={()=>setBorder('#007236')} 
                    onBlur={()=>setBorder('white')}
                    onChangeText={get_password.bind(this, 'confirmPassword')} />
                </View>
            </View>
            <Pressable onPress={ViewPassword_conf}><EyeIcon name={icon2} size={28} style={styles.icon}/></Pressable>
        </View>
        <Text style={styles.error}>{error} </Text>
        <View style={styles.col}>
            <View>
                <View style={styles.oneLine}>
                    {passFlag.lowercase ? <Dot name="dot-fill" style={styles.lightDot} size={23}/>:
                    <Dot name="dot-fill" style={styles.dot} size={23}/>}
                    <Text style={styles.verf}>Lower case letter</Text>
                </View>
                <View style={styles.oneLine}>
                    {passFlag.length ? <Dot name="dot-fill" style={styles.lightDot} size={23}/>:
                    <Dot name="dot-fill" style={styles.dot} size={23}/>}
                    <Text style={styles.verf}>Minimum 8 characters</Text>
                </View>
                <View style={styles.oneLine}>
                    {passFlag.special ? <Dot name="dot-fill" style={styles.lightDot} size={23}/>:
                    <Dot name="dot-fill" style={styles.dot} size={23}/>}
                    <Text style={styles.verf}>Special character</Text>
                </View>
            </View>
            <View>
                <View style={styles.oneLine}>
                    {passFlag.uppercase ? <Dot name="dot-fill" style={styles.lightDot} size={23}/>:
                    <Dot name="dot-fill" style={styles.dot} size={23}/>}
                    <Text style={styles.verf}>Upper case letter</Text>
                </View>
                <View style={styles.oneLine}>
                    {passFlag.number ? <Dot name="dot-fill" style={styles.lightDot} size={23}/>:
                    <Dot name="dot-fill" style={styles.dot} size={23}/>}
                    <Text style={styles.verf}>Number</Text>
                </View>
            </View>
        </View>
        <Button style={styles.footer} onPress={Submit}>Submit</Button>
    </View>
)
}
const styles = StyleSheet.create({
    container:{
        margin: '5%',
        flex: 1
    },
    footer:{
        position: 'absolute',
        bottom: 0,
    },
    inputContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        //borderColor: '#007236',
        borderRadius: 10,
        borderWidth: 1.5,
        marginTop: 20,
        backgroundColor: 'white'
    },
    inputText: {
        display: 'flex',
        flexDirection: 'row',
    },
    text:{
        color: '#007236',
        fontSize: 16,
        padding: 4,
        fontFamily: 'Roboto-Bold'
    },
    password:{
        color: 'black',
        fontSize: 16,
        padding: 4,
        fontFamily: 'Roboto-Regular'
    },
    icon:{
        color: '#B7B7B7',
        margin: 10,
    },
    verf:{
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        color: '#1C2437'
    },
    oneLine:{
        display: 'flex',
        flexDirection: 'row'
    },
    col:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12
    },
    error: {
        color: '#ff0000',
        fontFamily: 'Roboto-Bold',
        fontSize: 16,
        marginTop: 15
    },
    dot:{
        paddingRight: 10,
        color: '#B7B7B7'
    },
    lightDot:{
        paddingRight: 10,
        color: '#007236'
    }

});
export default Password;