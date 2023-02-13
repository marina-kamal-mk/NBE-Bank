import { View, FlatList, Text, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { setText } from "../../redux/Text";


function Menu(props){
    const dispatch = useDispatch();

    function list(item){
        return(
            <Pressable style={styles.list} onPress={()=>{props.setDrop(!props.drop); dispatch(setText(item.item));}}>
                <Text style={styles.text}>{item.item}</Text>
            </Pressable>
        )
    }
    return(
        <View style={styles.menu}>
            <TouchableOpacity activeOpacity={1} 
            onPressOut={() => {props.setDrop(false)}} >
                <FlatList data={props.data} renderItem={list}/>
            </TouchableOpacity>
        </View>
    )
    
}
const styles = StyleSheet.create({
    list:{
        borderBottomColor: '#E5E5E5',
        borderBottomWidth: 1.8,
    },

    menu: {
        marginTop: -14,
        marginRight: 15,
        marginLeft: 15,
        paddingLeft:10,
        borderColor: 'white',
        backgroundColor: 'white',
        borderRadius: 20,
        zIndex: 2,
        flex: 1,
        shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5,
          height: 100
    },
    text:{
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        color: '#1C2437',
        padding: 5
    }
})
export default Menu;