import { View , StyleSheet} from "react-native";
import Header from "../components/Home/Header";
import Cards from "../components/Home/Cards";
import DragDrop from "../components/AirPay/DragDrop";
import Button from "../components/AirPay/Button";

function AirPay(){
    return(
        <View style={styles.cont}>
            <Header/>
            {/* <Cards/> */}
            <DragDrop/>
            <Button>Pay Now </Button>
        </View>
        
    )

}
const styles = StyleSheet.create({
    cont:{
        flex:1
    }
})
export default AirPay;