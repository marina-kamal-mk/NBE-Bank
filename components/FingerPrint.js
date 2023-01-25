import { Modal, StyleSheet, View, Text, Pressable, Image } from "react-native";

function FingerPrint(props){
    return(
        <Modal
        animationType="fade"
        transparent={true}
        visible={props.finger}
        //onShow={()=>props.background('rgba(30, 50, 70, 0.9)')}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          props.showFinger(!props.finger);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Fingerprint for NBE Mobile</Text>
            <Text style={styles.modalSubText}>Log in with your fingerprint</Text>
            <View style={styles.finger}>
                <Image source={require('./../assets/print.png')} style={styles.image}/>
                <Text style={[styles.modalSubText, {color: '#B7B7B7'}]}>Touch the fingerprint sensor</Text>
            </View>
            <Pressable
            style={styles.button}
              onPress={() => props.showFinger(!props.finger)}>
              <Text style={[styles.modalText, {color: '#007236'}]}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    )
}
const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
    //   justifyContent: 'flex-end',
    //   alignItems: 'flex-end',
      //marginTop: 22,
      position: 'absolute',
      bottom: 0,
      width: '100%'
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
    }
  });
export default FingerPrint;