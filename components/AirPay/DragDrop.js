import { View, StyleSheet, Text, Animated, PanResponder, ScrollView, Image, Dimensions, FlatList } from "react-native";
import React, {useRef} from 'react';
import Button from "../AirPay/Button";
const cards = [
    {id: 1, card: require('./../../assets/cardGreen.png')},
    {id: 2, card: require('./../../assets/cardBlue.png')},
    {id: 3, card: require('./../../assets/cardRed.png')}
]
const {height, width} = Dimensions.get('window');
function DragDrop(){

const position = new Animated.ValueXY();
const panResponder = PanResponder.create({
  onStartShouldSetPanResponder: (evt, gestureState) => true,
  onPanResponderGrant: ()=>{
    position.setOffset({x:position.x._value,y:position.y._value})
  },
  onPanResponderMove: (evt, gestureState) => {
    if(gestureState.dy > 0)
    position.setValue({x: gestureState.dx, y: gestureState.dy});
  },
  onPanResponderRelease: (evt, gestureState) => {
  //Muffin is in the like area
  position.flattenOffset();
  console.log(position.x._value, position.y._value)
  console.log(gestureState.dy)
  if ( 
    //position.x._value < -50 && 
    // position.y._value > height / 2 - 150 && 
    //position.y._value < height / 2 
    position.y._value > 100 && 
    position.y._value < 300
  ) {
      Animated.spring(position, {
         toValue: {x: 10, y: 225},
        //toValue: {x: 10, y: 225},
        //friction: 10,
        useNativeDriver: true
      }).start(() => {
        // position.setValue({x: 10, y: 0});
        position2.setValue({x: 0, y: 0});
        position3.setValue({x: 0, y: 0});
      });
  }
  
  else {
    Animated.spring(position, {
      toValue: {x: 0, y: 0},
      //friction: 10,
      useNativeDriver: true
    }).start();
  }
},
});

const position2 = new Animated.ValueXY();
const panResponder2 = PanResponder.create({
  onStartShouldSetPanResponder: (evt, gestureState) => true,
  onPanResponderGrant: ()=>{
    position2.setOffset({x:position2.x._value,y:position2.y._value})
  },
  onPanResponderMove: (evt, gestureState) => {
    if(gestureState.dy > 0)
    position2.setValue({x: gestureState.dx, y: gestureState.dy});
  },
  onPanResponderRelease: (evt, gestureState) => {
  //Muffin is in the like area
  console.log(position2.x._value, position2.y._value)
  if ( 
    //position2.x._value < -50 && 
    // position.y._value > height / 2 - 150 && 
    //position2.y._value < height / 2 
    position2.y._value > 100 && 
    position2.y._value < 300
  ) {
      Animated.spring(position2, {
        toValue: {x: 10, y: 225},
        friction: 10,
        useNativeDriver: true
      }).start(() => {
        position.setValue({x: 0, y: 0});
        position3.setValue({x:0,y:0});
      });
  }
  else {
    Animated.spring(position2, {
      toValue: {x: 0, y: 0},
      friction: 10,
      useNativeDriver: true
    }).start();
  }
},
});

const position3 = new Animated.ValueXY();
const panResponder3 = PanResponder.create({
  onStartShouldSetPanResponder: (evt, gestureState) => true,
  onPanResponderGrant: ()=>{
    position3.setOffset({x:position3.x._value,y:position3.y._value})
  },
  onPanResponderMove: (evt, gestureState) => {
    if(gestureState.dy > 0)
    position3.setValue({x: gestureState.dx, y: gestureState.dy});
  },
  onPanResponderRelease: (evt, gestureState) => {
  //Muffin is in the like area
  console.log(position3.x._value, position3.y._value)
  if ( 
    //position3.x._value < -50 && 
    // position.y._value > height / 2 - 150 && 
    //position3.y._value < height / 2 
    position3.y._value > 100 && 
    position3.y._value < 300
  ) {
      Animated.spring(position3, {
        toValue: {x: -width - 10, y: position3.y._value},
        friction: 10,
        useNativeDriver: true
      }).start(() => {
        position2.setValue({x: 0, y: 0});
        position.setValue({x:0,y:0});
      });
  }
  //Muffin is neither in the like nor the dislike area
  else {
    Animated.spring(position3, {
      toValue: {x: 0, y: 0},
      friction: 10,
      useNativeDriver: true
    }).start();
  }
},
});

    return(
        <View style={styles.page}>
            <Text style={styles.title}>Cards</Text>
            {/* <FlatList style={styles.cards} horizontal={true} data={cards} renderItem={
                ({item, index})=>{
                    return(
                        <Animated.View
                            style={{
                            transform: [{translateX: item.id ===1 ? position.x: (item.id===2 ? position2.x : position3.x)}
                                , {translateY: item.id ===1 ? position.y: (item.id===2 ? position2.y : position3.y)}],
                            elevation: 1, zIndex: 1
                            }}
                            {...panResponder.panHandlers}
                            >
                            <Image source={item.card} style={styles.card}/>
                        </Animated.View>
                    )
                }
            }/> */}
        <ScrollView horizontal={true} style={styles.cards}>
            <Animated.View
            style={[{
            transform: [{translateX: position.x}, {translateY: position.y}],
            elevation: 1, zIndex: 1
            }, styles.card]}
            {...panResponder.panHandlers}>
                <Image source={require('./../../assets/cardGreen.png')} style={styles.card}/>
            </Animated.View>
            <Animated.View
            style={[{
            transform: [{translateX: position2.x}, {translateY: position2.y}],
            elevation: 1, zIndex: 1
            }, styles.card]}
            {...panResponder2.panHandlers}>
                <Image source={require('./../../assets/cardBlue.png')} style={styles.card}/>
            </Animated.View>
            <Animated.View
            style={[{
            transform: [{translateX: position3.x}, {translateY: position3.y}],
            elevation: 1, zIndex: 1
            }, styles.card]}
            {...panResponder3.panHandlers}>
                 <Image source={require('./../../assets/cardRed.png')} style={styles.card}/>
            </Animated.View>
            
        </ScrollView>
        <View style={styles.cont}>
            <Text style={styles.Text}>Touch & hold a card then drag it to this box</Text>
        </View>
        {/* <Button>Pay Now </Button> */}
        </View>
    )

}
const styles = StyleSheet.create({
    page:{
        margin: 17,
        flex: 1,
        //position: 'absolute',
        marginTop: 10,
    },
    cards:{
        marginBottom: 50,
        //flex:1,
        zIndex: 1,
        elevation: 1,
        paddingBottom: 15,
        height: '150%'
    },
    cont:{
        borderColor: '#007236',
        borderRadius: 27,
        borderStyle: 'dashed',
        width: 346,
        height: 216,
        borderWidth: 2,
       // margin: 17,
       marginTop: '70%',
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        elevation: -1,
        zIndex: -1,
        flex:1
    },
    Text:{
        fontFamily: 'Roboto-Bold',
        color:'rgba(0, 114, 54, 0.77)',
        fontSize: 20,
        width:'80%',
        textAlign: 'center'
        
    },
    card:{
        width: 326,
        height: 196,
        marginRight: 10,
    },
    title:{
        color: '#1C2437',
        fontFamily: 'Roboto-Bold',
        fontSize: 20,
        marginLeft: 10,
        marginBottom: 15
    },
})
export default DragDrop;

