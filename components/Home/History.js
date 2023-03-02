import { FlatList, View, StyleSheet, Text, Pressable, Image } from 'react-native';

const data = [
    {name: 'Carrefour', date:'15-12-2021', amount: 250.21, img: require('./../../assets/carrefour.png')},
    {name: 'Amazon', date:'02-12-2021', amount: 3004.21, img: require('./../../assets/amazon.png')},
    {name: 'Jumia', date:'28-12-2021', amount: 2146.68, img: require('./../../assets/jumia.png')},
    {name: 'Helena', date:'02-01-2022', amount: 5140.00, img: require('./../../assets/p2.png')},
];

function card(item){
    return(
        <View style={styles.card}>
            <View style={styles.sub}>
                <View style={styles.img_cont}>
                    <Image source={item.item.img} style={styles.profile}/>
                </View>
                <View>
                    <Text style={styles.name}>{item.item.name}</Text>
                    <Text style={styles.date}>{item.item.date}</Text>
                </View>
            </View>
            <Text style={styles.amount}>${item.item.amount}</Text>
        </View>
    )
}
function History(){
    return(
        <View style={styles.cont}>
            <View style={styles.Title}>
                <Text style={styles.title}>History</Text>
                <Pressable>
                    <Text style={styles.viewBtn}>View All</Text>
                </Pressable>
            </View>
            <FlatList data={data} renderItem={card} style={styles.list}
            keyExtractor={item => item.id}/>
        </View>
    )
}
const styles = StyleSheet.create({
    cont:{
        marginLeft: 20,
        marginRight: 20,
        flex: 1
    },
    Title:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
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
    img_cont:{
        width: 50,
        height: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginRight: 10,
        overflow: 'hidden'
    },
    list:{
        flex: 1,
        marginBottom: 5
    }
    
})
export default History;