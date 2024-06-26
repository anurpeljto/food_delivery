import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ThemeColors } from '../theme';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import DishRow from './DishRow';
import { DishRowProps } from './DishRow';
import { useSelector } from 'react-redux';
import { selectCartTotal } from '../slices/cartSlice';
import { RootState } from '../store/store';

interface CartProps {
  navigation: NavigationProp<any, 'Cart'>;
  total: number;
  quantity: number;
}

export default function Cart({navigation, total, quantity}: CartProps) {
  total = useSelector((state: RootState) => selectCartTotal(state));
  return (
    <View className="absolute bottom-5 w-full z-50">
      <TouchableOpacity
        style={{ backgroundColor: ThemeColors.bgColor(1) }}
        className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg"
        onPress={() => navigation.navigate('Cart')}
      >
        <View className="p-2 px-4 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}>
          <Text className="font-extrabold text-white text-lg">{quantity}</Text>
        </View>

        <Text className="flex-1 text-center font-extrabold text-white text-lg">
          View Cart
        </Text>

        <Text className="font-extrabold text-white text-lg">{total}KM</Text>
      </TouchableOpacity>
      
    </View>
  );
}
