import React, {useEffect} from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import AppNavigation from './src/navigations/AppNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PermissionsAndroid, Platform} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {Provider} from 'react-redux';
import store from './src/redux/configureStore';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'App Location Permission',
            message: 'App needs access to your location.',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Location permission granted.');
          getCurrentLocation();
        } else {
          console.log('Location permission denied.');
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
      getCurrentLocation();
    }
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        console.log('Current location:', latitude, longitude);
      },
      error => {
        console.log('Error getting location:', error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <NativeBaseProvider>
            <AppNavigation />
          </NativeBaseProvider>
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
