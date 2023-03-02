import { View, StyleSheet, Text, Pressable, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setCards } from "../../redux/Cards";

const data = [
    {
        id:1,
        name: 'Accounts',
        color: 'rgba(0, 201, 116, 0.15)',
        img: require('./../../assets/account.png')
    },
    {
        id:2,
        name: 'Cards',
        color: 'rgba(0, 173, 248, 0.15)',
        img: require('./../../assets/card.png')
    },
    {
        id:3,
        name: 'Utilities',
        color: 'rgba(246, 167, 33, 0.15)',
        img: require('./../../assets/utilities.png')
    },
    {
        id:4,
        name: 'History',
        color: 'rgba(255, 0, 46, 0.15)',
        img: require('./../../assets/history.png')
    }
]
function Options(){
    const dispatch = useDispatch();
    const card = useSelector(state=> state.Cards.cards);

    function showCards(id){
        if(id === 2) dispatch(setCards(!card));
    }

    return(
        <View style={styles.tabs}>
            {
                data.map(icon => 
                <View key={icon.id}>
                    <Pressable style={[styles.button, {backgroundColor: icon.color}]} 
                    onPress={()=>showCards(icon.id)}>
                        <Image source={icon.img}/>
                    </Pressable>
                    <Text style={styles.text}>{icon.name}</Text>
                </View>)
            }
            
        </View>
    )
}
const styles = StyleSheet.create({
    tabs:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        marginLeft: 20,
        marginRight: 20
    },
    button:{
        width: 60,
        height: 60,
        borderRadius: 13,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        color: '#1C2437',
        textAlign: 'center'
    }
})
export default Options;