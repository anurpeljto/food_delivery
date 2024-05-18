import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import * as Icon from 'react-native-feather';
import { ThemeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import OrderedCard from '../components/OrderedCard';
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../slices/restaurantSlice';
import { featuredRestaurants } from '../constants';
import { RootState } from '../store/store';
import { selectCartTotal } from '../slices/cartSlice';
import { selectCartItems } from '../slices/cartSlice';

export default function CartScreen() {  
  const restaurant = useSelector((state: RootState) => selectRestaurant(state));
  const navigation = useNavigation();
  const cartItems = useSelector((state: RootState) => selectCartItems(state));
  const cartTotal = useSelector((state: RootState) => selectCartTotal(state)); 
  return (
    <View style={{flex: 1}}>
        <SafeAreaView style={{backgroundColor: ThemeColors.bgColor(1)}}>

        <View className="pb-10 flex-column justify-center items-center">
          <Text className="px-5 text-2xl font-bold text-white">Cart</Text> 
          <Text className="px-5 text-1xl font-bold text-white">{restaurant.name}</Text> 
        </View>
        <TouchableOpacity className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full" onPress={() => navigation.goBack()}>
            <Icon.ArrowLeft strokeWidth="3" stroke={ThemeColors.bgColor(1)} />
          </TouchableOpacity>
          </SafeAreaView>

        <ScrollView className="bg-white flex py-2 w-full h-full">
          <View className="flex py-2 bg-white-700">
            {cartItems.map(item => (
              <OrderedCard key={item.id} item={item} />
            ))}
          </View>
        </ScrollView>

        <View style={{backgroundColor: ThemeColors.bgColor(0.2), position: 'absolute', bottom: 0, left: 0, right: 0}} className="p-6 px-8 rounded-t-3xl space-y-1">
          <View className="flex-row justify-between">
            <Text className="text-gray-700 ">Price</Text>
            <Text className="text-gray-700 ">{cartTotal}</Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-700 ">Fees</Text>
            <Text className="text-gray-700 ">2 KM</Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-700 text-xl font-extrabold">Total</Text>
            <Text className="text-gray-700 text-xl font-extrabold">{cartTotal} KM</Text>
          </View>

          <View>
            <TouchableOpacity style={{backgroundColor: ThemeColors.bgColor(1)}} className="p-3 rounded-full">
              <Text className="font-bold text-lg text-white text-center">Order now</Text>
            </TouchableOpacity>
          </View>
        </View>

    </View>
  )
}
