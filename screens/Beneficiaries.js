import { View, StyleSheet, Text, Pressable } from "react-native";
import Header from "../components/Home/Header";
import EmptyBenf from "../components/Beneficiaries/EmptyBenf";
import GridBenf from "../components/Beneficiaries/GridBenf";
import ListBenf from "../components/Beneficiaries/ListBenf";
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

function Beneficiaries(){
    const navigate = useNavigation();

    const benf = useSelector(state => state.Benf.benf);
    console.log(benf)
    const [choosen, setChoosen] = useState({1:true, 2:false});

       return(
        <View style={styles.home}>
            <Header/>
            <View style={styles.title}>
                <Text style={styles.text}>Beneficiaries</Text>
                <View style={styles.options}>
                    <View style={styles.add}>
                        <Pressable style={[styles.press, choosen[1] ? {backgroundColor: '#007236'}: {backgroundColor:'white'} ]} 
                        onPress={()=> setChoosen({1:!choosen[1], 2:!choosen[2]})}>
                            <Icon name="grid" size={20} color={choosen[1] ? 'white': '#B7B7B7'} style={styles.iocn}/>
                        </Pressable>
                        <Pressable style={[styles.press, choosen[2] ? {backgroundColor: '#007236'}: {backgroundColor:'white'} ]} 
                         onPress={()=> setChoosen({1:!choosen[1], 2:!choosen[2]})}>
                            <Icon2 name="format-list-bulleted" size={20} color={choosen[2] ? 'white': '#B7B7B7'} style={styles.iocn}/>
                        </Pressable>
                    </View>
                    <Pressable style={styles.add}
                    onPress={()=> navigate.push('addBenf') }>
                        <Icon name="add-circle-outline" size={20} color='#007236' style={styles.iocn}/>
                        <Text style={styles.addText}>Add</Text>
                    </Pressable>
                </View>
            </View>
            {
                benf.length !== 0 ? (choosen[1] ? <GridBenf benf={benf}/>: <ListBenf benf={benf}/> ): <EmptyBenf/>
            }
            
            
        </View>
    )
}
const styles = StyleSheet.create({
    home:{
        backgroundColor: ' #E5E5E5',
        flex: 1,
    },
    title:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20
    },
    text:{
        fontFamily: 'Roboto-Bold',
        fontSize: 20,
        color: '#1C2437'
    },
    options:{
        display: 'flex',
        flexDirection: 'row',
    },
    add:{
        borderRadius: 50,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        marginRight: 10
    },
    addText:{
        color: '#007236',
        fontFamily: 'Roboto-Regular',
        fontSize: 14,
        padding: 8,
        paddingLeft: 0
    },
    iocn:{
        padding: 8,
    },
    press: {
        borderRadius: 20
    }
});
export default Beneficiaries;