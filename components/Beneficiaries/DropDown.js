import {View, Pressable, StyleSheet, Text} from 'react-native';
import { useState } from 'react';
import Button from 'react-native-vector-icons/Entypo';
import Menu from './Menu';


function DropDown(props){
    const [drop, setDrop] = useState(false);
    
    return(
        <>
            <Pressable style={[styles.cont, drop ? {borderColor: '#007236'}: {borderColor: 'white'} ]} 
            onPress={()=>{setDrop(!drop);}}>
                <View style={styles.line}>
                    <Text style={[styles.title, drop ? {color: '#007236'}: {color: '#1C2437'}]} >{props.title}</Text>
                    {drop ? <Button color="#B7B7B7" size={25} name="chevron-up"/> :
                    <Button color="#B7B7B7" size={25} name="chevron-down"/>}
                </View>
                <Text style={styles.branch}>{props.text}</Text>
            </Pressable>
            {drop ? <Menu drop={drop} setDrop={setDrop} style={styles.menu} data={props.data}/> :""}
        </>
    )
}
const styles = StyleSheet.create({
    cont:{
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1.5,
        margin: 15,
        paddingRight: 10,
        marginTop: 10,
        marginBottom: 0.5,
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
    },
    line:{
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    branch:{
        padding: 10,
        color: '#1C2437',
        fontSize: 16,
        fontFamily: 'Roboto-Regular',
    },
    menu:{
        zIndex: 1
    }
})
export default DropDown;