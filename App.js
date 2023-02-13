import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar} from "react-native";
import Welcome from "./screens/Welcome";
import Mobile from "./screens/Mobile";
import Congrats from "./screens/Congrats";
import Splash from "./screens/Splash";
import Home from "./screens/Home";
import Transfer from "./screens/Transfer";
import Beneficiaries from "./screens/Beneficiaries";
import AddBenf from "./components/Beneficiaries/AddBenf";
import TransactionHistory from "./components/Beneficiaries/TransactionHistory";
import AddHistory from "./components/Beneficiaries/AddHistory";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Image } from "react-native";
import { Provider } from "react-redux";
import store from "./redux/store";

const Stack = createNativeStackNavigator();
const benfStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Benf_screens(){
  return(
    <benfStack.Navigator>
      <benfStack.Screen name="Benef" component={Beneficiaries} options={{headerShown: false}}/>
      <benfStack.Screen name="addBenf" component={AddBenf} options={{headerShown: false}}/>
      <benfStack.Screen name="history" component={TransactionHistory} options={{headerShown: false}}/>
      <benfStack.Screen name="Transfer" component={AddHistory} options={{headerShown: false}}/>
    </benfStack.Navigator>
  )
}
function HomeNav() {
 
  return (
    <Tab.Navigator 
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color }) => {

        if (route.name === 'Home') {
          if(!focused) return <Ionicons name="home-outline" size={35} color={color} />;
          if(focused) return  <Ionicons name="home" size={35} color={color} />;
          
        } else if (route.name === 'Transfer') {
          return <FontAwesome name="send-o" size={35} color={color} />;
        }
        else if (route.name === 'Beneficiaries') {
          if(!focused) return <Image source={require('./assets/benf.png')}/>;
          if(focused) return <Image source={require('./assets/benf_f.png')}/>;
        }
        else if(route.name === 'ATMs') {
          return <Ionicons name="location-outline" size={35} color={color} />
        }
        else if(route.name === 'Air Pay') {
          if(!focused) return <Image source={require('./assets/airpay.png')}/>;
          if(focused) return <Image source={require('./assets/airpay_f.png')}/>;
        }
      },
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: '#B7B7B7',
      tabBarStyle:{
        backgroundColor:'white',
        height:80,
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        padding: 4
      },
      tabBarItemStyle:{
        margin:5,
        borderRadius:16,
        padding: 4
      },
      tabBarActiveBackgroundColor: '#007236',
      tabBarInactiveBackgroundColor: '#F1F3FB',
    })}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Tab.Screen name="Transfer" component={AddHistory} options={{headerShown: false}}/>
      <Tab.Screen name="Beneficiaries" component={Benf_screens} options={{headerShown: false}}/>
      <Tab.Screen name="ATMs" component={Transfer} options={{headerShown: false}}/>
      <Tab.Screen name="Air Pay" component={Transfer} options={{headerShown: false}}/>
    </Tab.Navigator>
  );
}


function App(){
  return(
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent={true} />
        <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="main" component={Welcome} options={{headerShown: false}}/>
            <Stack.Screen name="mobile" component={Mobile} options={{headerShown: false}}/>
            <Stack.Screen name="final" component={Congrats} options={{headerShown: false}}/>
            <Stack.Screen name="splash" component={Splash} options={{headerShown: false}}/>
            <Stack.Screen name="home" component={HomeNav} options={{headerShown: false}}/>
            <Stack.Screen name="addBenf" component={AddBenf} options={{headerShown: false}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
      // <>
      
      // <StatusBar
      // backgroundColor="transparent"
      // translucent={true} />
      // {/* <Welcome/> */}
      //  {/* <Mobile/> */}
      // {/* <Congrats/> */}
      // <Splash/>
    
      // </>
  );
}

// const styles = StyleSheet.create({

// })

export default App;
