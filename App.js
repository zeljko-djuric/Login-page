import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Asset } from 'expo';


function cacheImages(images){
  return images.map(image =>{
    if(typeof image == 'string'){
      return Image.prefetch(image);
    }else{
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default class App extends React.Component {

  constructor(){
    super()
    this.state = {
      isReady: false
    }
  }
  return (
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
