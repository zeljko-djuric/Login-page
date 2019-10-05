import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window')
class MyApp extends Component {
  render() {
    return (
     <View style ={{flex: 1, backgroundColor: 'white', justifyContent: 'flex-end'}}>
       <View style = {{...StyleSheet.absoluteFill}}>
         <Image 
          source = {require('../img/bg.jpg')}
          style = {{flex: 1, height: null, width: null }}
          />
       </View>
       <View style = {{height: height/3, backgroundColor: 'white'}}>

       </View>
     </View>
    );
  }
}
export default MyApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
