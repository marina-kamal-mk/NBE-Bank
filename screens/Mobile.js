import { View , StyleSheet, TouchableWithoutFeedback, Keyboard} from "react-native";
import Header from "../components/Header";
import Icon from "react-native-vector-icons/Ionicons";
import MobileNumber from "../components/MobileNumber";
import Verification from "../components/Verification";
import Password from "../components/Password";

function Mobile({route}){
    // const [mob, setmob] = useState('');
    // function onchangeHandler(number){
    //     setmob(number);
    // }
    const x = route.params.x;
    const msg = route.params.msg;
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Header icon={<Icon name="chevron-back" size={30} color='white'/>} />
                {
                    x === 'mob' ? <MobileNumber/> : 
                    (x==='code' ? <Verification msg={msg}/> : <Password/>)
                }
            </View>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    icon:{
        backgroundColor: '#007236'
    },
    container:{
        backgroundColor: '#E5E5E5',
        flex: 1
    }
});
export default Mobile;