import { Modal, StyleSheet, View, Text, Pressable, Image, TouchableOpacity } from "react-native";
import Dark from 'react-native-vector-icons/FontAwesome5';
import Cal from 'react-native-vector-icons/AntDesign';
import Contact from 'react-native-vector-icons/Ionicons';
import Credit from 'react-native-vector-icons/FontAwesome';
import Offer from 'react-native-vector-icons/MaterialIcons';
import Bar from 'react-native-vector-icons/Entypo';
import Cert from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Entypo';
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/User";
import { useNavigation } from "@react-navigation/native";
import { launchImageLibrary } from 'react-native-image-picker';
import {storage} from './../../firebase/Images';
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import { setDarkMode } from "../../redux/DarkMode";
import { updateUser } from "../../firebase/Firebase";

function SideBar(props){
    const userData = useSelector(state => state.User.currentUser);
    console.log(userData)
    const darkMode = useSelector(state=> state.DarkMode.darkMode);

    const dispatch = useDispatch();
    const navigate = useNavigation();

    function Logout(){
        dispatch(setUser(null));
        navigate.navigate('main');
    }

    const [filePath, setFilePath] = useState('');

    const chooseFile = (type) => {
        let options = {
        mediaType: type,
        maxWidth: 300,
        maxHeight: 550,
        quality: 1,
        };
        launchImageLibrary(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
            alert('User cancelled camera picker');
            return;
        } else if (response.errorCode == 'permission') {
            alert('Permission not satisfied');
            return;
        } else if (response.errorCode == 'others') {
            alert(response.errorMessage);
            return;
        }
        setFilePath(response.assets[0]);
        uploadImage(response.assets[0]);
        //get_data('image', response.assets[0].uri);
        });
    };


    async function uploadImage(file){
        console.log(file)
        if(!file) return;
        console.log(file)
        const storageRef = ref(storage, `/files/Benf/${file.fileName}`);
        const img = await fetch(file.uri);
        const bytes = await img.blob();

        await uploadBytesResumable(storageRef, bytes);
        await getDownloadURL(storageRef)
        .then(url => {
            setFilePath(url);
            updateUser(userData.phone, userData.id, {...userData,'profile': url});
            dispatch(setUser({...userData, 'profile': url}))
        });
    }

    return(
        <Modal
        animationType="fade"
        transparent={true}
        visible={props.showside}
        animationIn="slideInLeft"
        animationOut="slideOutRight"
        //onShow={()=>props.background('rgba(30, 50, 70, 0.9)')}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          props.setShowside(!props.showside);
        }}>
            <TouchableOpacity activeOpacity={1} 
            onPressOut={() => {props.setShowside(false)}} style={styles.centeredView}>
                <View style={styles.header}>
                    <Image source={require('./../../assets/logogreen.png')} style={styles.image}/>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Ar</Text>
                    </Pressable>
                </View>
                <View>
                    <View style={styles.li}>
                        <View style={styles.img_cont}>
                            <Bar name="bar-graph" size={20} color="#1B1B1B" />
                        </View>
                        <Text style={styles.liText}>Account Summary</Text>
                    </View>
                    <View style={styles.li}>
                        <View style={styles.img_cont}>
                            <Cert name="file-certificate-outline" color="#1B1B1B" size={20} />
                        </View>
                        <Text style={styles.liText}>Open Certificates & Deposits</Text>
                    </View>
                    <View style={styles.li}>
                        <View style={styles.img_cont}>
                            <Bar name="credit-card" size={20} color="#1B1B1B" />
                        </View>
                        <Text style={styles.liText}>Payement Services</Text>
                    </View>
                    <View style={styles.li}>
                        <View style={styles.img_cont}>
                            <Credit name="credit-card-alt" size={15} color="#1B1B1B" />
                        </View>
                        <Text style={styles.liText}>Cards Services</Text>
                    </View>
                    <View style={styles.li}>
                        <View style={styles.img_cont}>
                            <Dark name="mobile-alt" size={20} color="#1B1B1B" />
                        </View>
                        <Text style={styles.liText}>Hard Token</Text>
                    </View>
                    <View style={styles.li}>
                        <View style={styles.img_cont}>
                            <Offer name="local-offer" size={20} color="#1B1B1B" />
                        </View>
                        <Text style={styles.liText}>Offers</Text>
                    </View>
                    <View style={styles.li}>
                        <View style={styles.img_cont}>
                            <Contact name="people" size={20} color="#1B1B1B"/>
                        </View>
                        <Text style={styles.liText}>Customer Services</Text>
                    </View>
                    <View style={styles.li}>
                        <View style={styles.img_cont}>
                            <Cal name="calculator" size={20} color="#1B1B1B" />
                        </View>
                        <Text style={styles.liText}>Calculators</Text>
                    </View>
                    <View>
                        <View style={styles.one}>
                            <View style={styles.li}>
                                <View style={styles.img_cont}>
                                    <Dark name="moon" size={20} color="#1B1B1B" />
                                </View>
                                <Text style={styles.liText}>Dark Mode</Text>
                            </View>
                            <Pressable style={styles.darkbtn} onPress={()=> dispatch(setDarkMode(!darkMode))}>
                                <View style={[styles.dot, darkMode ? {backgroundColor: 'white'}: {backgroundColor: '#B3B3B3'}]}></View>
                                <View style={[styles.dot, darkMode ? {backgroundColor: '#B3B3B3'}: {backgroundColor: 'white'}]}></View>
                                {/* <Dot name="dot-fill" size={30} color="black" style={styles.dot}/>
                                <Dot name="dot-fill" size={30} color="black" style={styles.dot}/> */}
                            </Pressable>
                        </View>
                    </View>
                </View>
                <View style={styles.bottom}>
                    <Pressable style={styles.li} onPress={Logout}>
                        <View style={[styles.img_cont, {backgroundColor: 'rgba(225, 7, 33, 0.2)'}]}>
                            <Image source={require('./../../assets/logout.png')}/>
                        </View>
                        <Text style={[styles.liText, {color: '#EB001B'}]}>Log Out</Text>
                    </Pressable>
                    <View style={styles.row}>
                        <View style={styles.cont}>
                            <Pressable onPress={()=> {chooseFile('photo');}}>
                                {userData.profile ? 
                                <Image source={{uri: userData.profile}} style={styles.profile} /> :
                                (filePath ? <Image source={{uri: filePath.uri}} style={styles.profile} /> :
                                <Image source={require('./../../assets/contact.png')} style={styles.profile} />)}
                            </Pressable>
                            <View>
                                <Text style={styles.name}>UserName</Text>
                                <Text style={styles.number}>+2{userData.phone} </Text>
                            </View>
                        </View>
                        <Icon name="dots-three-vertical" size={22} color="black" style={styles.icon}/>
                    </View>
                </View>
            </TouchableOpacity>
      </Modal>
    )
}
const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      position: 'absolute',
      bottom: 0,
      top: 0,
      width: '75%',
      height: '100%',
      backgroundColor: '#F1F3FB',
      padding: 10,
      borderRadius: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    image:{
        width: 166,
        height: 40,
        marginBottom: 10
    },
    button:{
        backgroundColor: 'white',
         borderRadius: 10,
         padding: 10
     },
    buttonText:{
        fontSize: 16,
        color: '#007236',
        fontWeight: '700'

    },
    header:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 25
    },
    li:{
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 7,
        paddingTop: 7
    },
    img_cont:{
        //backgroundColor: '#1B1B1B',
        backgroundColor: 'rgba(27,27,27,0.3)',
        //opacity: 0.2,
        marginRight: 5,
        width: 30,
        height: 30,
        borderRadius: 11,
        justifyContent: 'center',
        alignItems: 'center'
    },
    liText:{
        fontFamily: 'Roboto-Regular',
        fontSize: 18,
        color: '#1B1B1B'
    },
    bottom:{
        position: 'absolute',
        bottom: 0,
        padding: 15
    },
    icon: {
        color: 'black'
    },

    row:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 18,
        marginTop: 10,
        width: "96%"
    },
    cont:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    name:{
        fontFamily: 'Roboto-Bold',
        fontSize: 18,
        color:'#1B1B1B',
        marginBottom: 5
    },
    profile:{
        width: 50,
        height: 50,
        margin: 10
    },
    number:{
        color: '#4D4D4D',
        fontFamily: 'Roboto-Regular',
        fontSize: 14
    },
    one:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    darkbtn:{
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 13,
        backgroundColor: 'white',
        shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      width: 45,
      height: 27,
      
    },
    dot:{
       //backgroundColor: '#B3B3B3',
       borderRadius: 50,
       width: 20,
       height: 20
    }
  });
export default SideBar;