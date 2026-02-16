import { NewAppScreen } from '@react-native/new-app-screen';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNav';



const { width: screenWidth } = Dimensions.get('window');



const App = () => {
  

  return (
      <SafeAreaView style={styles.container}>
        <AppNavigator/>
      </SafeAreaView>
    );
};




const styles = StyleSheet.create({
  container: {
     flex: 1,
}});

export default App;
