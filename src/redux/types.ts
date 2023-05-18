export interface WeatherData {
  temperature: number;
  humidity: number;
  windSpeed: number;
  description: string;
  icon: string;
}

export interface WeatherState {
  loading: boolean;
  weatherData: WeatherData | null;
  error: string | null;
  location: {
    latitude: number;
    longitude: number;
  } | null;
}

export interface RootState {
  weather: {
    loading: boolean;
    weatherData: WeatherData | null;
    error: string | null;
  };
}

export const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';

interface FetchWeatherRequestAction {
  type: typeof FETCH_WEATHER_REQUEST;
}

interface FetchWeatherSuccessAction {
  type: typeof FETCH_WEATHER_SUCCESS;
  payload: WeatherData;
}

interface FetchWeatherFailureAction {
  type: typeof FETCH_WEATHER_FAILURE;
  payload: string;
}

export type WeatherActionTypes =
  | FetchWeatherRequestAction
  | FetchWeatherSuccessAction
  | FetchWeatherFailureAction;
