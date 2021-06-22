import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { loadAsync } from 'expo-font';
import AppLoading from 'expo-app-loading';

import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';

import Routes from './src/routes';

import DefaultScreen from './src/components/DefaultScreen';

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const fonts = {
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  }

  const loadFontsAsync = () => {
    loadAsync(fonts)
      .then(() => {
        setFontsLoaded(true);
      })
  }

  useEffect(() => {
    loadFontsAsync();
  }, [])

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <DefaultScreen>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {/* <SignIn /> */}
      <Routes />
    </DefaultScreen>
  );
}

export default App;