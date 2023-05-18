import axios from 'axios';
import {Dispatch} from 'redux';
import {
  WeatherData,
  WeatherActionTypes,
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
} from './types';
import Geolocation from 'react-native-geolocation-service';
import {API_URL, API_KEY} from '@env';

export const fetchLocation = () => {
  return (dispatch: any) => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        dispatch(setLocation({latitude, longitude}));
      },
      error => {
        console.log('Error getting location:', error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };
};

export const setLocation = (location: {
  latitude: number;
  longitude: number;
}) => ({
  type: 'SET_LOCATION',
  payload: location,
});

export const fetchWeather = (city: string) => {
  return (dispatch: Dispatch<WeatherActionTypes>) => {
    dispatch({type: FETCH_WEATHER_REQUEST});

    axios
      .get(`${API_URL}/data/2.5/weather?q=${city}&appid=${API_KEY}`)
      .then(response => {
        dispatch({
          type: FETCH_WEATHER_SUCCESS,
          payload: response.data as WeatherData,
        });
      })
      .catch(error => {
        dispatch({
          type: FETCH_WEATHER_FAILURE,
          payload: error.message,
        });
      });
  };
};
