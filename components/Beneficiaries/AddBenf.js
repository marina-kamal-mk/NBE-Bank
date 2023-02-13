import { useState } from "react";
import { View,ScrollView, KeyboardAvoidingView, StyleSheet, TouchableWithoutFeedback,
     Keyboard, Pressable, Image, Alert } from "react-native";
import Camera from 'react-native-vector-icons/Feather';
import Header from "./HeaderBnef";
import Input from "./InputBenf";
import Button from "../Button";
import DropDown from "./DropDown";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { setText } from "../../redux/Text";
import { launchImageLibrary } from 'react-native-image-picker';
import {storage} from './../../firebase/Images';
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { Add_Benf, get_Benf } from "../../firebase/Firebase";
import { setBenf } from "../../redux/Benf";

const branches = ['039 - Walk of Cairo', '040 - Downtown','041 - Aba El-Akad',
    '042 - Water Way Mall','043 - Mall of Arabia','044 - Arkan Plaza'];

function AddBenf(){
    const navigate = useNavigation();
    const dispatch = useDispatch();


    const user = useSelector(state => state.User.currentUser);
    const branch = useSelector(state => state.Text.text);
    const benf = useSelector(state => state.Benf.benf);

    const [data, setData] = useState({firstName:'', lastName: '', 
    branch: branch , accountNo:'', phoneNo: '', email:'', image:''});

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
        get_data('image', response.assets[0].uri);
        });
    };

    function get_data(name, value){
        setData({...data, [name]: value});
    }

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
            setData({...data, image: url});
        });
    }
    async function add(){
        get_data('branch', branch);
        if ((data.firstName === '' || data.lastName === '' || 
        data.accountNo === ''|| data.branch === '-- Select Branch' || data.email === '' ||
        data.phoneNo === '' || data.image === '')) 
        {
            Alert.alert('All fields are required', 'Please enter missing fields', [
                {
                  text: 'OK',
                  style: 'cancel',
                },
              ]);
              return;
        }
        
        uploadImage(filePath);
        Add_Benf(user.localId, data);
        const z = await get_Benf(user.localId);
        dispatch(setBenf(z));
        setData({firstName:'', lastName: '', 
        branch: branch , accountNo:'', phoneNo: '', email:''});
        dispatch(setText('-- Select Branch'));
        navigate.push('mobile', {x: 'code', msg: 'Contact was successfuly added to your beneficiaries list.'});
    }


    function Back(){
        setData({firstName:'', lastName: '', 
        branch: branch , accountNo:'', phoneNo: '', email:'', image:''});
        dispatch(setText('-- Select Branch'));
        navigate.goBack();
    }
    return(
        <View>
            <Header press={Back}/>
        <ScrollView>
                <KeyboardAvoidingView behavior='padding' style={{flex:1}}>
             <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{flex:1}}>
                <Pressable style={[styles.cont]}
                onPress={()=> {chooseFile('photo');}}>
                    {filePath ? 
                    <Image source={{uri: filePath.uri}} style={styles.camera}/> :
                    <View style={styles.camera}>
                        <Camera name="camera" size={30} color="#007236" />
                    </View>
                    }
                </Pressable>
                <View style={styles.oneLine}>
                    <Input title="First name" other={{onChangeText: get_data.bind(this, 'firstName'),
                        value: data.firstName}} width="42%"/>
                    <Input title="Last name" other={{onChangeText: get_data.bind(this, 'lastName'),
                    value: data.lastName}} width="42%"/>
                </View>
                <DropDown data={branches} title='Bank Branch' text={branch}/>
                <Input title="Account number" other={{onChangeText: get_data.bind(this, 'accountNo'),
                        value: data.accountNo}}/>
                <Input title="Phone number" other={{onChangeText: get_data.bind(this, 'phoneNo'),
                        value: data.phoneNo, keyboardType:'number-pad', maxLength: 10}}/>
                <Input title="Email" other={{onChangeText: get_data.bind(this, 'email'),
                        value: data.email}}/>
            </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        </ScrollView>
                <View style={styles.btnCont}>
                    <Button onPress={add} style={styles.btn}>Add Beneficiar</Button>
                </View>
        </View>
                
        
        
    )
}
const styles = StyleSheet.create({
    camera: {
        borderRadius: 30,
        backgroundColor: 'white',
        width: 138,
        height: 138,
        justifyContent: 'center',
        alignItems: 'center',
        // margin: 1,
        shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          //elevation: 5,
    },
    cont:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    oneLine:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        //marginLeft: 20,
    },
    btnCont:{
       // flex: 1,
        justifyContent: 'flex-end'
    },
    btn:{
        // position: 'absolute',
        // bottom: 0,
        margin: 15,
        width: '92%',
    },
    error:{
        color: 'red',
        fontFamily: 'Roboto-Regular',
        fontSize: 16
    }
})
export default AddBenf;