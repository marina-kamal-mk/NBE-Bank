import { View, StyleSheet , Text, TextInput, Pressable} from "react-native";
import Button from "./Button";
import Title from "./Title";
import { useNavigation } from "@react-navigation/native";
import { useState, useRef, useEffect} from "react";

function Verification(props){
    const navigate = useNavigation();

    const [code, setCode] = useState();
    const [counter, setCounter] = useState(30);
    
    useEffect(()=>{
        setCode(Math.floor(Math.random()*90000) + 10000);
    },[setCode])
    useEffect(()=>{

        counter > 0 && setTimeout(() => {
            if (counter<11) setCounter(`0${counter - 1}`); 
            else setCounter(counter -1);
        }, 1000);
    },[counter])
    console.log(code);
    const firstInput = useRef();
    const secondInput = useRef();
    const thirdInput = useRef();
    const fourthInput = useRef();
    const fifthInput = useRef();
    const [otp, setOtp] = useState({1: '', 2: '', 3: '', 4: '', 5:''});

    const [errorMsg, seterrorMsg] = useState("")
    const [borderColor, setborderColor] = useState('white');
    const [focus, setFocus] = useState({1:'white', 2: 'white', 3:'white', 4:'white', 5:'white'});
    function Submit(){
        if(otp[1] === '') {setFocus({...focus,1:'#ff0000'}); return};
        if(otp[2] === '') {setFocus({...focus,2:'#ff0000'}); return};
        if(otp[3] === '') {setFocus({...focus,3:'#ff0000'}); return};
        if(otp[4] === '') {setFocus({...focus,4:'#ff0000'}); return};
        if(otp[5] === '') {setFocus({...focus,5:'#ff0000'}); return};
        const x = otp[1]+otp[2]+otp[3]+otp[4]+otp[5];
        if(parseInt(x) !== code) 
        {
            console.log('wrong')
            seterrorMsg("Wrong Code");
            //new_Code(); 
            //setCode(Math.floor(Math.random()*90000) + 10000);
            setOtp({1: '', 2: '', 3: '', 4: '', 5:''});
            return;
        }
        setOtp({1: '', 2: '', 3: '', 4: '', 5:''});
        navigate.push('mobile', {x: 'password'});
    }
    function new_Code(){
        seterrorMsg('');
        setCode(Math.floor(Math.random()*90000) + 10000);
        setOtp({1: '', 2: '', 3: '', 4: '', 5:''});
        setCounter(30);
        counter > 0 && setTimeout(() => {
            if (counter<11) setCounter(`0${counter - 1}`); 
            else setCounter(counter -1);
        }, 1000);
    }

return(
    <View style={styles.container}>
        <Title title="Verification" 
        subtitle= "Enter 5 digit code we sent to"
        mobile={props.mobile}
        />
        <View style={styles.verifyCode}>
            <View style={[styles.inputText, {borderColor: focus[1]}]}>
                <TextInput maxLength={1} keyboardType='number-pad' style={styles.input}
                placeholder='_'
                onChangeText={text => {setOtp({...otp, 1:text}); text && secondInput.current.focus(); seterrorMsg(''); setborderColor('white');}}
                ref={firstInput} value={otp[1]}
                onFocus={()=> setFocus({...focus, 1:'#007236'})}
                onBlur={()=>setFocus({...focus, 1:'white'})}/>
            </View>
            <View style={[styles.inputText,  {borderColor: focus[2]}]}>
                <TextInput maxLength={1} keyboardType='number-pad' style={styles.input}
                placeholder='_'
                onChangeText={text => {setOtp({...otp, 2:text}); text && thirdInput.current.focus(); seterrorMsg(''); setborderColor('white');}} 
                ref={secondInput} value={otp[2]}
                onFocus={()=> setFocus({...focus, 2:'#007236'})}
                onBlur={()=>setFocus({...focus, 2:'white'})}/>
            </View>
            <View style={[styles.inputText,  {borderColor: focus[3]}]}>
                <TextInput maxLength={1} keyboardType='number-pad' style={styles.input}
                placeholder='_'
                onChangeText={text => {setOtp({...otp, 3:text}); text && fourthInput.current.focus(); seterrorMsg(''); setborderColor('white');}}
                ref={thirdInput} value={otp[3]}
                onFocus={()=> setFocus({...focus, 3:'#007236'})}
                onBlur={()=>setFocus({...focus, 3:'white'})}/>
            </View>
            <View style={[styles.inputText, {borderColor: focus[4]}]}>
                <TextInput maxLength={1} keyboardType='number-pad' style={styles.input}
                placeholder='_'
                onChangeText={text => {setOtp({...otp, 4:text}); text && fifthInput.current.focus(); seterrorMsg(''); setborderColor('white');}}
                ref={fourthInput} value={otp[4]}
                onFocus={()=> setFocus({...focus, 4:'#007236'})}
                onBlur={()=>setFocus({...focus, 4:'white'})}/>
            </View>
            <View style={[styles.inputText, {borderColor: focus[5]}]}>
                <TextInput maxLength={1} keyboardType='number-pad' style={styles.input}
                placeholder='_'
                onChangeText={text => {setOtp({...otp, 5:text}); text && fifthInput.current.blur(); seterrorMsg(''); setborderColor('white');}}
                ref={fifthInput} value={otp[5]}
                onFocus={()=> setFocus({...focus, 5:'#007236'})}
                onBlur={()=>setFocus({...focus, 5:'white'})}/>
            </View>
        </View>
        <View style={styles.control}>
            <Text style={styles.code}>Didn’t receive the code?</Text>
            {counter>0 ?
            <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text style={[styles.send, {textDecorationLine: 'none', color: '#ff0000'}]}>{errorMsg} </Text> 
            <Text style={styles.newrequest}>Request new one in 00:{counter}</Text></View>: 
            <Pressable onPress={new_Code} style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={[styles.send, {textDecorationLine: 'none', color: '#ff0000'}]}>{errorMsg} </Text>
                <Text style={styles.send}>Send a new one</Text>
            </Pressable>
            }
            
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
    verifyCode:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        marginTop: 20
    },
    inputText: {
        borderColor: 'white',
        borderRadius: 10,
        borderWidth: 1.5,
        backgroundColor: 'white',
        padding: 8
    },
    input:{
        textAlign: 'center',
        fontSize: 25,
        fontFamily: 'Roboto-Bold'
    },
    text:{
        color: '#007236',
        fontSize: 16,
        padding: 4,
        fontFamily: 'Roboto-Bold'
    },
    code:{
        color: '#B7B7B7',
        fontFamily: 'Roboto-Regular',
        fontSize: 16
    },
    newrequest:{
        fontFamily: 'Roboto-Bold',
        color: 'black',
        fontSize: 16
    },
    control:{
        marginTop: 15,
    },
    send:{
        color: 'black',
        fontFamily: 'Roboto-Bold',
        fontSize: 16,
        textDecorationLine: 'underline'
    }
});
export default Verification;