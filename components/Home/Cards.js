import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, FlatList, View, Text, Pressable } from "react-native";
import Back from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from "react-redux";
import { setCards } from "../../redux/Cards";

const cards = [
    {id: 1, card: require('./../../assets/cardGreen.png')},
    {id: 2, card: require('./../../assets/cardBlue.png')},
    {id: 3, card: require('./../../assets/cardRed.png')}
]
function Cards(){
    const dispatch = useDispatch();
    const card = useSelector(state=> state.Cards.cards);
    function back(){
        dispatch(setCards(!card));
    }
    return(
        <View  style={styles.list}>
            <Pressable style={styles.one} onPress={back}>
                <Back size={23} name="chevron-back" color="#1C2437"/>
                <Text style={styles.title}>Cards</Text>
            </Pressable>
            <FlatList horizontal={true}
            data={cards}
            renderItem={(item)=> {
                return(
                    <Image source={item.item.card} style={styles.card}/>
                )
            }}
            keyExtractor={item => item.item.id}/>
        </View>
    )
}
const styles = StyleSheet.create({
    list:{
        margin:20
    },
    title:{
        color: '#1C2437',
        fontFamily: 'Roboto-Bold',
        fontSize: 20,
        //marginBottom: 15
    },
    card:{
        width: 326,
        height: 196,
        marginRight: 10
    },
    one:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15
        //justifyContent:'center'
    },
    icon:{
        marginBottom: 15
    }
})
export default Cards;