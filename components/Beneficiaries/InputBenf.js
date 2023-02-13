import { useState } from "react";
import { TextInput, StyleSheet, Text, TouchableOpacity } from "react-native";

function InputBenf(props){
    const {title, other, width} = props;
    const [border, setBorder] = useState('white');
    const [text, setText] = useState('#1C2437');

    return(
        <TouchableOpacity style={[styles.cont, {borderColor: border, width: width,}]}
            activeOpacity={1} 
            onPressOut={() => {setDrop(false)}}>
            <Text style={[styles.title, {color: text}]} >{title}</Text>
            <TextInput {...other} 
            onFocus={()=> {setBorder('#007236'); setText('#007236');}}
            onBlur={()=> {setBorder('white'); setText('#1C2437');}}
            style={styles.input}/>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    cont:{
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1.5,
        margin: 15,
        marginTop: 10,
        marginBottom: 0.5,
        zIndex: 0,
        shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5,
    },
    title:{
        color: '#1C2437',
        fontFamily: 'Roboto-Bold',
        fontSize: 14,
        padding: 10,
        paddingBottom: 0
    },
    input:{
        padding: 10,
        paddingBottom: 0
    }
})
export default InputBenf;
