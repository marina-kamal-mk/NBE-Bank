import { Text, View, StyleSheet, Pressable, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import EyeIcon from 'react-native-vector-icons/Feather';
import { useState } from "react";

function Input(props){
    const {text, password_flag, icon_name, other } = props;
    //const Icon = MaterialIcons
    const[icon , setIcon] = useState("eye-off");
    const[style , setStyle] = useState(defaultStyle);
    const[secure , setSecure] = useState(true);
    const [color, setColor] = useState('white');
    const [iconColor, seticonColor] = useState('white');
    const [inputColor, setInputColor] = useState('white');
    const focus = {backgroundColor: 'white', borderColor: '#007236'};
    const defaultStyle = {backgroundColor: 'rgba(0, 0, 0, 0.3)', borderColor: 'rgba(255, 255, 255, 0.5)'};
    function ViewPassword(){
        if(icon === "eye")
        setIcon("eye-off");
        else setIcon("eye");
        setSecure(!secure);
    }
return(
    <View style={[styles.inputContainer, style]}>
        <View style={styles.inputText}>
            <Icon name={icon_name} size={30} style={[styles.icon, {color: iconColor}]}/>
            <View>
                <Text style={[styles.text, {color: color}]}>{text}</Text>
                <TextInput style={[styles.text, {color: inputColor}]}
                secureTextEntry={password_flag ? secure: false}
                onFocus={()=>{setStyle(focus); setColor('#007236'); seticonColor('#B7B7B7'); setInputColor('black')}}
                onBlur={()=>{setStyle(defaultStyle); setColor('white'); seticonColor('white'); setInputColor('white')}}
                {...other}
                />
            </View>
        </View>
        {
            password_flag ? 
            <Pressable onPress={ViewPassword}><EyeIcon name={icon} size={28} style={[styles.icon, {color: iconColor}]}/></Pressable>
            : ""
        }
    </View>
)
}
const styles=StyleSheet.create({
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
export default Input;