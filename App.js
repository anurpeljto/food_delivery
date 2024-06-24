import React, { useState } from "react";
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Header from "./components/Header";
import RestaurantItem from './components/RestaurantItem';
import Navigation from './navigation';
import { store } from './store/store.tsx';
import { Provider } from 'react-redux';

export default function App(){
  return(
    <Provider store={store} >
      <Navigation />
    </Provider>
  );
}

