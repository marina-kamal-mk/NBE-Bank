import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import {useState, useEffect} from 'react';
import EmptyHistory from "./EmptyHistory";
import { get_history } from "../../firebase/Firebase";
import Row from "./Row";
import Header from "./../Home/Header";
import TransferMoneyModal from "./TransferMoneyModal";

// const history = [
//     {title: 'Flat Rent', amount: '892,48.0', date: '15-12-2021'},
//     {title: 'New Laptop', amount: '764,92.0', date: '20-5-2021'},
//     {title: 'College Expenses', amount: '563,62.0', date: '12-02-2021'},
// ]
function card(item){
    return(
        <View style={styles.card}>
            <View style={styles.sub}>
                <View>
                    <Text style={styles.name}>{item.item.title}</Text>
                    <Text style={styles.date}>{item.item.date}</Text>
                </View>
            </View>
            <Text style={styles.amount}>${item.item.amount}</Text>
        </View>
    )
}
function TransactionHistory(){
    const benf = useSelector(state => state.Benf.benf);
    const user = useSelector(state => state.User.currentUser);
    const personId = useSelector(state=> state.History.id);
    console.log(personId)
    const person = benf.filter(item => item.id === personId);
    console.log(person, "pppppppp")
    const [hist, setHist] = useState([]);

    const [transfer, setTransfer] = useState(false);

    useEffect(()=>{ 
        const fetchData = async () => {
            const data = await get_history(user.localId+'+'+personId);
            console.log(data);
            setHist(data);
          }
        
          fetchData()
            .catch(console.error);
        
    },[])

    // const dispatch = useDispatch();
    // function close(){
    //     dispatch(setHistory(false));
    // }

    return(
        <View style={styles.home}>
            <Header/>
            <Row item={person[0]} onPress={()=>setTransfer(true)}/>
            <Text style={styles.title}>Transactions History</Text>
            {hist.length !==0 ?
            <FlatList data={hist} renderItem={card} style={styles.list}/>:
            <EmptyHistory/>
            }
            {transfer ? <TransferMoneyModal setTransfer={setTransfer} transfer={transfer} data={person[0]}/>:''}
        </View>
    )
}
const styles=StyleSheet.create({
    title:{
        fontFamily: 'Roboto-Bold',
        fontSize: 20,
        color: '#1C2437',
        margin: 20
    },
    card:{
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#E5E5E5',
        borderBottomWidth: 1.8,
        padding: 5,
    },
    sub:{
        display: 'flex',
        flexDirection: 'row',
    },
    amount:{
        fontFamily: 'Roboto-Bold',
        fontSize: 18,
        color: '#1C2437'
    },
    name:{
        color: '#1C2437',
        fontFamily: 'Roboto-Regular',
        fontSize: 18
    },
    date:{
        color: '#B7B7B7',
        fontFamily: 'Roboto-Regular',
        fontSize: 14
    },
    list:{
        flex: 1,
        marginBottom: 5,
        margin: 15
    },
    home:{
        backgroundColor: ' #E5E5E5',
        flex: 1,
    },
})
export default TransactionHistory;