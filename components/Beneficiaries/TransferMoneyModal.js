import { Modal, StyleSheet, View, Text, Pressable, Image, TouchableOpacity } from "react-native";
import Delete from 'react-native-vector-icons/AntDesign';
import Edit from 'react-native-vector-icons/FontAwesome5';
import Money from 'react-native-vector-icons/MaterialCommunityIcons';
import Phone from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from "@react-navigation/native";

function TransferMoneyModal(props){
  const navigate = useNavigation();
    return(
        <Modal
        animationType="fade"
        transparent={true}
        visible={props.transfer}
        //onShow={()=>props.background('rgba(30, 50, 70, 0.9)')}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          props.setTransfer(!props.finger);
        }}>
        <TouchableOpacity activeOpacity={1} 
            onPressOut={() => {props.setTransfer(false)}} style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.data}>
                <View style={styles.cont1}>
                      <Image source={{uri: props.data.image}} style={styles.profile} />
                      <View>
                          <Text style={styles.name}>{props.data.name}</Text>
                          <View style={styles.one}>
                              <View style={styles.iconCont}>
                                  <Phone name="phone-alt" size={12} color="#B7B7B7" style={styles.icon}/>
                              </View>
                              <Text>+2{props.data.phone}</Text>
                          </View>
                          <View style={styles.one}>
                              <View style={styles.iconCont}>
                                  <Money name="email" size={13} color="#B7B7B7" style={styles.icon}/>
                              </View>
                              <Text>{props.data.email}</Text>
                          </View>
                      </View>
                  </View>
                </View>
                  
                  <Pressable style={styles.cont} onPress={()=> navigate.push('Transfer')}>
                    <View style={styles.icon3}>
                      <Money name="credit-card-check" size={20} color="#B7B7B7" style={styles.img}/>
                    </View>
                    <View>
                      <Text style={styles.option}>Transfer</Text>
                      <Text style={styles.sub}>Transfer money to {props.data.name.split(' ')[0]}</Text>
                    </View>
                  </Pressable>
                  <Pressable style={styles.cont}>
                    <View style={styles.icon3}>
                      <Edit name="user-edit" size={20} color="#B7B7B7" style={styles.img}/>
                    </View>
                    <View>
                      <Text style={styles.option}>Edit</Text>
                      <Text style={styles.sub}>Edit {props.data.name.split(' ')[0]}'s data</Text>
                    </View>
                  </Pressable>
                  <Pressable style={styles.cont}>
                    <View style={styles.icon2}>
                      <Delete name="delete" size={20} color="red" style={styles.img}/>
                    </View>
                    <View>
                      <Text style={styles.option}>Delete {props.data.name.split(' ')[0]}</Text>
                      <Text style={styles.sub}>Delete {props.data.name.split(' ')[0]} & all transactions history</Text>
                    </View>
                  </Pressable>
              </View>
        </TouchableOpacity>
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
    option:{
      fontFamily: 'Roboto-Regular',
      fontSize: 16,
      color: '#1C2437'
    },
    sub:{
      fontFamily: 'Roboto-Regular',
      color: '#848484',
      fontSize: 12
    },
    cont:{
      display: 'flex',
      flexDirection: 'row',
      margin: 10,
      marginLeft: 2
    },
    icon3:{
      backgroundColor: 'rgba(0, 0, 0, 0.09)',
      borderRadius: 50,
      marginRight: 7
    },
    img:{
      padding: 10,
    },
    icon2:{
      backgroundColor: 'rgba(235, 0, 27, 0.2)',
      borderRadius: 50,
      marginRight: 7
    },
    cont1:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
  },
  name:{
      fontFamily: 'Roboto-Bold',
      fontSize: 14,
      color:'#1C2437',
      marginBottom: 5
  },
  profile:{
      width: 80,
      height: 80,
      margin: 10,

  },
  iconCont: {
      backgroundColor: 'rgba(0, 0, 0, 0.09)',
      borderRadius: 50,
      marginRight: 4,
      marginBottom: 3
  },
  icon:{
      padding: 5,
  },
  one:{
      display: 'flex',
      flexDirection: 'row',
  },
  data:{
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  }
  });
export default TransferMoneyModal;