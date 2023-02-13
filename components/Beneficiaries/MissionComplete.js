import { useNavigation } from "@react-navigation/native";
import { Modal, StyleSheet, View, Text, Image } from "react-native";
import Button from "../Button";

function MissionComplete(props){
    const navigate = useNavigation();
    function finish(){
        props.showComplete(!props.complete);
        navigate.navigate('Benef');
    }
    return(
        <Modal
        animationType="fade"
        transparent={true}
        visible={props.finger}
        //onShow={()=>props.background('rgba(30, 50, 70, 0.9)')}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          props.showComplete(!props.complete);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.cont}>
                <Image source={require('./../../assets/complete.png')} style={styles.img}/>
                <Text style={styles.text}>Mission Complete</Text>
                <Text style={styles.des}>{props.msg}</Text>
            </View>
            <Button onPress={finish} style={styles.btn}>Finish</Button>
          </View>
        </View>
      </Modal>
    )
}
const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    //   justifyContent: 'flex-end',
    //   alignItems: 'flex-end',
      //marginTop: 22,
    //   position: 'absolute',
    //   bottom: 0,
    //   width: '100%'
    },
    modalView: {
      //margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 20,
      //alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modalText: {
      marginBottom: 12,
      fontFamily: 'Roboto-Bold',
      color: '#1C2437',
      fontSize: 20
    },
    modalSubText: {
        marginBottom: 20,
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        color: '#1C2437'
    },
    finger:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image:{
        width: 88,
        height: 88,
        marginBottom: 10
    },
    button: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 12
    },
    cont:{
        margin: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        color: '#34343F',
        fontFamily: 'Roboto-Bold',
        fontSize: 18,
        marginTop: 10
    },
    des:{
        color: '#34343F',
        fontFamily: 'Roboto-Regular',
        fontSize: 14,
        marginTop: 2,
        textAlign: 'center'
    },
    img:{
        width: 170,
        height: 170
    }
  });
export default MissionComplete;