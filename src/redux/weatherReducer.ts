import {
  WeatherActionTypes,
  RootState,
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
} from './types';

const initialState: RootState['weather'] = {
  loading: false,
  weatherData: null,
  error: null,
  location: null,
};

const weatherReducer = (
  state = initialState,
  action: WeatherActionTypes,
): RootState['weather'] => {
  switch (action.type) {
    case FETCH_WEATHER_REQUEST:
      return {
        ...state,
        loading: true,
        weatherData: null,
        error: null,
      };
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        weatherData: action.payload,
        error: null,
      };
    case FETCH_WEATHER_FAILURE:
      return {
        ...state,
        loading: false,
        weatherData: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default weatherReducer;
