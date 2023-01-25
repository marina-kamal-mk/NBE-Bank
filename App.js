import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar} from "react-native";
import Welcome from "./screens/Welcome";
import Mobile from "./screens/Mobile";
import Congrats from "./screens/Congrats";
import Splash from "./screens/Splash";


const Stack = createNativeStackNavigator();

function App(){
  return(
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent={true} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="main" component={Welcome} options={{headerShown: false}}/>
          <Stack.Screen name="mobile" component={Mobile} options={{headerShown: false}}/>
          <Stack.Screen name="final" component={Congrats} options={{headerShown: false}}/>
          <Stack.Screen name="splash" component={Splash} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
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
