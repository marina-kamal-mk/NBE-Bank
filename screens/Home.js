import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import Header from "../components/Home/Header";
import Balance from "../components/Home/Balance";
import Options from "../components/Home/Options";
import SendMoney from "../components/Home/SendMoney";
import History from "../components/Home/History";
import Cards from "../components/Home/Cards";

function Home(){
    const card = useSelector(state=> state.Cards.cards);
    return(
        <View style={styles.home}>
            <Header/>
            {card ? 
            <Cards/>:
            <>
            <Balance/>
            <Options/>
            <SendMoney/>
            </>
        }
            <History/>
        </View>
    )
}
const styles = StyleSheet.create({
    home:{
        backgroundColor: ' #E5E5E5',
        flex: 1
    }
});
export default Home;