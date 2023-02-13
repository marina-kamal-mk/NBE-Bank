import { FlatList, StyleSheet } from "react-native";
import Card from "../Home/Card";

function GridBenf(props){
    return(
        <FlatList data={props.benf} renderItem={Card} 
        numColumns={3} keyExtractor={item => item.id}
        style={styles.list}/>
    )
}
const styles=StyleSheet.create({
    list: {
        margin: 20
    }
})
export default GridBenf;