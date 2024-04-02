import React, { useState } from "react";
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Header from "./components/Header";
import RestaurantItem from './components/RestaurantItem';
import Navigation from './navigation';

export default function App(){
  return(
    <Navigation />
  );
}

