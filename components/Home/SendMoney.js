import { FlatList, View, StyleSheet, Text, Pressable, Image } from 'react-native';
import Card from './Card';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { get_Benf } from "../../firebase/Firebase";
import { setBenf } from "../../redux/Benf";
// const data = [
//     {name: 'Mady', img: require('./../../assets/p1.png')},
//     {name: 'Hala', img: require('./../../assets/p2.png')},
//     {name: 'Alex', img: require('./../../assets/p3.png')},
//     {name: 'Megan', img: require('./../../assets/p4.png')},
//     {name: 'Helena', img: require('./../../assets/p2.png')},
//     {name: 'Lars', img: require('./../../assets/p1.png')},
// ];

// function card(item){
//     return(
//         <View style={styles.card}>
//             {/* <Image source={{uri: item.item.img}} style={styles.profile}/> */}
//             <Image source={item.item.img} style={styles.profile}/>
//             <Text style={styles.name}>{item.item.name}</Text>
//         </View>
//     )
// }
function SendMoney(){
    const [people, setPeople] = useState([]);
    const dispatch = useDispatch();
    const user = useSelector(state => state.User.currentUser);
    const benf = useSelector(state => state.Benf.benf);
    
    useEffect(()=>{ 
        const fetchData = async () => {
            const data = await get_Benf(user.localId);
            console.log(data);
            setPeople(data);
            dispatch(setBenf(data));
          }
        
          fetchData()
            .catch(console.error);
        
    },[])
    return(
        <View style={styles.cont}>
            <View style={styles.Title}>
                <Text style={styles.title}>Send money</Text>
                <Pressable>
                    <Text style={styles.viewBtn}>View All</Text>
                </Pressable>
            </View>
            <FlatList data={benf} renderItem={Card} horizontal={true}/>
        </View>
    )
}
const styles = StyleSheet.create({
    cont:{
        margin:20
        // marginLeft: 20,
        // marginRight: 20
    },
    Title:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title:{
        color: '#1C2437',
        fontSize: 20,
        fontFamily: 'Roboto-Bold'
    },
    viewBtn: {
        color: '#808080',
        fontSize: 14,
        fontFamily: 'Roboto-Regular',
        textDecorationLine: 'underline'
    },
    name:{
        color: '#1C2437',
        fontFamily: 'Roboto-Regular',
        fontSize: 14,
        padding: 5
    },
    card:{
        alignItems: 'center',
        backgroundColor: '#F8F9FC',
        borderRadius: 10,
        marginRight: 20,
        marginTop: 8,
        width: 86,
        height: 80,
        overflow: 'hidden' 
    },
    profile:{
        flex: 1,
    }
})
export default SendMoney;