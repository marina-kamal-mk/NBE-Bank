import { useState } from "react";
import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/Foundation';
import { useSelector } from "react-redux";
import SideBar from "./SideBar";
function Header(){
    const [showside, setShowside] = useState(false);
    const user = useSelector(state => state.User.currentUser);

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={()=>setShowside(true)}>
                    <Icon size={26} name="align-justify" color='black' style={styles.icon}/>
                    {showside ? <SideBar showside={showside} setShowside={setShowside}/> : ""}
                </Pressable>
                {user.profile ? <Image style={styles.profile} source={{uri: user.profile}} />: 
                <Image style={styles.profile} source={require('./../../assets/contact.png')} />
                }
                <View>
                    <Text style={styles.text}>Good Morning</Text>
                    <Text style={[styles.text, styles.name]}>{user.username}</Text>
                </View>
            </View>
            <Pressable  style={styles.profile}>
                <Image source={require('./../../assets/bell.png')}/>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 20,
        marginTop: 40,
        marginRight: 30
    },
    header:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon:{
        paddingLeft: 10,
        paddingRight: 10,
    },
    profile:{
        width: 40,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10
    },
    text:{
        fontFamily: 'Roboto-Regular',
        fontSize: 14,
        color: 'black',
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 0,
    },
    name:{
        fontFamily: 'Roboto-Bold',
    }
});
export default Header;