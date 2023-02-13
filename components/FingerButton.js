import {View, Pressable, StyleSheet} from 'react-native';
import FingerPrint from './FingerPrint';
import FingerPrintIcon from 'react-native-vector-icons/FontAwesome5';
import { useState } from 'react';
function FingerButton(props){
    const [finger, showFinger] = useState(false);
    return(
        <View style={styles.finger}>
            <Pressable onPress={()=>showFinger(true)}>
                <FingerPrintIcon name='fingerprint' style={styles.fingerIcon} size={props.size}/>
                {finger ? <FingerPrint finger={finger} showFinger={showFinger} text={props.text}/> : ""}
            </Pressable>
        </View>
    )
}
const styles= StyleSheet.create({
    finger: {
        padding: 10,
        borderColor: '#F6A721',
        borderWidth: 1.5,
        borderRadius: 12.5,
    },
    fingerIcon:{
        color: '#F6A721'
    },
})
export default FingerButton;