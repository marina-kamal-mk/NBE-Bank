import { useState } from "react";
import { View,ScrollView, KeyboardAvoidingView, StyleSheet, TouchableWithoutFeedback,
     Keyboard, Pressable, Image, Alert, Text } from "react-native";
import Header from "./HeaderBnef";
import Input from "./InputBenf";
import Button from "../Button";
import DropDown from "./DropDown";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { Add_History } from "../../firebase/Firebase";

const types=['Between your accounts'];
const accounts =['account - balance'];

function AddHistory(){
    const navigate = useNavigation();
    const dispatch = useDispatch();

    const user = useSelector(state => state.User.currentUser);
    const personId = useSelector(state=> state.History.id);

    const date = new Date();
    console.log(date)
    const [data, setData] = useState({type:'', from: '', 
    to:'', amount: '', reason:'', date: date});

    function get_data(name, value){
        setData({...data, [name]: value});
    }

   
    async function transfer(){
        if ((data.amount === '' ||
        data.reason === '' )) 
        {
            Alert.alert('All fields are required', 'Please enter missing fields', [
                {
                  text: 'OK',
                  style: 'cancel',
                },
              ]);
              return;
        }
        
        Add_History(user.localId+'+'+personId, data);
        // const z = await get_history(user.localId+'+'+personId);
        // dispatch(setBenf(z));
        setData({type:'', from: '', 
        to:'', amount: '', reason:''});
        navigate.push('mobile', {x: 'code', msg: 'Transfered successfully'});
    }


    function Back(){
        setData({type:'', from: '', 
        to:'', amount: '', reason:''});
        navigate.goBack();
    }
    return(
        <View>
            <Header press={Back}/>
        <ScrollView>
                <KeyboardAvoidingView behavior='padding' style={{flex:1}}>
             <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{flex:1}}>
                <Text style={styles.title}>Transfer</Text>
                <DropDown title='Type of Transfer' data={types} text={types[0]}/>
                <DropDown title='Transfer From' data={accounts} text={accounts[0]}/>
                <DropDown title='TRansfer To' data={accounts} text={accounts[0]}/>
                <Input title="Amount to Transfer" other={{onChangeText: get_data.bind(this, 'amount'),
                        value: data.amount, keyboardType:'number-pad'}}/>
                <Input title="Reason" other={{onChangeText: get_data.bind(this, 'reason'),
                        value: data.reason}}/>
            </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        </ScrollView>
                <View style={styles.btnCont}>
                    <Button onPress={transfer} style={styles.btn}>Transfer</Button>
                </View>
        </View>
                
        
        
    )
}
const styles = StyleSheet.create({
    camera: {
        borderRadius: 30,
        backgroundColor: 'white',
        width: 138,
        height: 138,
        justifyContent: 'center',
        alignItems: 'center',
        // margin: 1,
        shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          //elevation: 5,
    },
    cont:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    oneLine:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        //marginLeft: 20,
    },
    btnCont:{
       // flex: 1,
        justifyContent: 'flex-end'
    },
    btn:{
        // position: 'absolute',
        // bottom: 0,
        margin: 15,
        width: '92%',
    },
    error:{
        color: 'red',
        fontFamily: 'Roboto-Regular',
        fontSize: 16
    },
    title:{
        fontFamily: 'Roboto-Bold',
        fontSize: 20,
        color: '#1C2437',
        margin: 15
    }
})
export default AddHistory;