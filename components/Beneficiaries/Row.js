import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';
import Phone from 'react-native-vector-icons/FontAwesome5';
import Dollar from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
import {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setHistory, setID } from "../../redux/History";

function Row(props){
    const navigate = useNavigation();
    const dispatch = useDispatch();
    const {item, onPress} = props;
    const h = useSelector(state=> state.History.history);
   //const [flag, setFlag] = useState(false);
   function handleTouch(){
    dispatch(setHistory(!h));
    console.log(h)
    dispatch(setID(item.id));
    if(!h) navigate.push('history');
    else navigate.navigate('Benef');
}
    return(
        <Pressable style={styles.row} onPress={()=>handleTouch()}>
            <View style={styles.cont}>
                <Image source={{uri: item.image}} style={styles.profile} />
                <View>
                    <Text style={styles.name}>{item.name}</Text>
                    <View style={styles.one}>
                        <View style={styles.iconCont}>
                            <Phone name="phone-alt" size={12} color="#B7B7B7" style={styles.icon}/>
                        </View>
                        <Text>+2{item.phone}</Text>
                    </View>
                    <View style={styles.one}>
                        <View style={styles.iconCont}>
                            <Dollar name="dollar" size={17} color="#B7B7B7" style={styles.icon}/>
                        </View>
                        <Text>${item.balance}</Text>
                    </View>
                </View>
            </View>
            <Pressable onPress={onPress}>
                <Icon name="dots-three-horizontal" size={22} color="#B7B7B7" style={styles.icon}/>
            </Pressable>
        </Pressable>
    )

}
const styles = StyleSheet.create({
    row:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        //padding: 5,
        borderRadius: 18,
        margin: 10
    },
    cont:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    name:{
        fontFamily: 'Roboto-Bold',
        fontSize: 14,
        color:'#1C2437',
        marginBottom: 5
    },
    profile:{
        width: 80,
        height: 80,
        margin: 10
    },
    iconCont: {
        backgroundColor: 'rgba(0, 0, 0, 0.09)',
        borderRadius: 50,
        marginRight: 4,
        marginBottom: 3
    },
    icon:{
        padding: 5,
    },
    one:{
        display: 'flex',
        flexDirection: 'row',
    }
})
export default Row;