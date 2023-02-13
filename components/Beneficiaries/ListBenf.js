import { FlatList, StyleSheet } from "react-native";
import Row from "./Row";


function ListBenf(props){

    return(
        <FlatList data={props.benf} renderItem={(item)=>{
            return(
                <Row item={item.item}/>
            )
        }}
        style={styles.list} keyExtractor={(item)=> item.id}/>
    )
}
const styles = StyleSheet.create({
    list:{
        margin: 20
    }
})
export default ListBenf;