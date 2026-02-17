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
import AppNavigator from './src/app/navigation/AppNav';
import { Provider } from 'react-redux';
import { store } from './src/app/store';




const { width: screenWidth } = Dimensions.get('window');



const App = () => {


  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <AppNavigator />
      </SafeAreaView>
    </Provider>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
