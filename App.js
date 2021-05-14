import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
} from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';



const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
