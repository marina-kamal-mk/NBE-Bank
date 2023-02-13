import { Image, StyleSheet, FlatList, View, Text } from "react-native";

const cards = [
    {id: 1, card: require('./../../assets/cardGreen.png')},
    {id: 2, card: require('./../../assets/cardBlue.png')},
    {id: 3, card: require('./../../assets/cardRed.png')}
]
function Cards(){
    return(
        <View  style={styles.list}>
            <Text style={styles.title}>Cards</Text>
            <FlatList horizontal={true}
            data={cards}
            renderItem={(item)=> {
                return(
                    <Image source={item.item.card} style={styles.card}/>
                )
            }}
            keyExtractor={item => item.id}/>
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
        marginBottom: 15
    },
    card:{
        width: 326,
        height: 196,
        marginRight: 10
    }
})
export default Cards;