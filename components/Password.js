import { View, StyleSheet , Text, TextInput, Pressable} from "react-native";
import Button from "./Button";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import Dot from 'react-native-vector-icons/Octicons';
import Title from "./Title";
import EyeIcon from 'react-native-vector-icons/Feather';
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

function Password(){
    const navigate = useNavigation();

    const[border , setBorder] = useState("white");
    const[border1 , setBorder1] = useState("white");
    const[icon , setIcon] = useState("eye-off");
    const[icon2 , setIcon2] = useState("eye-off");
    const[secure , setSecure] = useState(true);
    const[secureConf , setSecure_Conf] = useState(true);

    const[dotColor, setDotColor] = useState({
        lowercase:'#B7B7B7', 
        uppercase: '#B7B7B7', 
        number:'#B7B7B7', 
        special:'#B7B7B7',
        length: '#B7B7B7'
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
        
        if(data.password.length >= 8) setDotColor(color=> {return{...color, length: '#007236'}});
        else if(data.password.length < 8) setDotColor(color=> {return{...color, length: '#B7B7B7'}});
        if(/[a-z]/.test(data.password)) setDotColor(color=> {return{...color, lowercase: '#007236'}});
        else if(!(/[a-z]/.test(data.password))) setDotColor(color=> {return{...color, lowercase: '#B7B7B7'}});
        if(/[A-Z]/.test(data.password)) setDotColor(color=> {return{...color, uppercase: '#007236'}});
        else if(!(/[A-Z]/.test(data.password))) setDotColor(color=> {return{...color, uppercase: '#B7B7B7'}});
        if(/[0-9]/.test(data.password)) setDotColor(color=> {return{...color, number: '#007236'}});
        else if(!(/[0-9]/.test(data.password))) setDotColor(color=> {return{...color, number: '#B7B7B7'}});
        if(specialChars.test(data.password)) setDotColor(color=> {return{...color, special: '#007236'}});
        else if(!(specialChars.test(data.password))) setDotColor(color=> {return{...color, special: '#B7B7B7'}});
    }

    function Submit(){
        if(data.password === '') {setBorder1('#ff0000'); return; }
        if(data.confirmPassword === '') {setBorder('#ff0000'); return; }
        if(data.password !== data.confirmPassword) {setError('Not Matching Passwords'); return;}
        if(dotColor.length !== '#007236' ||
        dotColor.lowercase !== '#007236' || dotColor.uppercase !== '#007236' || dotColor.number !== '#007236'
        || dotColor.special !== '#007236') return;
        navigate.push('final');
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
                    <Dot name="dot-fill" style={[{color: dotColor.lowercase}, {paddingRight: 10}]} size={23}/><Text style={styles.verf}>Lower case letter</Text>
                </View>
                <View style={styles.oneLine}>
                    <Dot name="dot-fill" style={[{color: dotColor.length}, {paddingRight: 10}]} size={23}/><Text style={styles.verf}>Minimum 8 characters</Text>
                </View>
                <View style={styles.oneLine}>
                    <Dot name="dot-fill" style={[{color: dotColor.special}, {paddingRight: 10}]} size={23}/><Text style={styles.verf}>Special character</Text>
                </View>
            </View>
            <View>
                <View style={styles.oneLine}>
                    <Dot name="dot-fill" style={[{color: dotColor.uppercase}, {paddingRight: 10}]} size={23}/><Text style={styles.verf}>Upper case letter</Text>
                </View>
                <View style={styles.oneLine}>
                    <Dot name="dot-fill" style={[{color: dotColor.number}, {paddingRight: 10}]} size={23}/><Text style={styles.verf}>Number</Text>
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
    }
});
export default Password;