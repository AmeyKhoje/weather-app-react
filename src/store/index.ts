import { configureStore } from '@reduxjs/toolkit';
import WeatherSlice from './slice/WeatherSlice';
import { useDispatch, useSelector } from 'react-redux';

const createCustomStore = (options?: any) => {
  return configureStore({
    reducer: {
      weather: WeatherSlice,
    },
    ...options,
  });
};

export const store = createCustomStore();
export const useCustomDispatch = () => useDispatch();
export const useTypedSelector = useSelector;
