import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import * as Icon from 'react-native-feather';
import { ThemeColors } from '../theme';
import { useNavigation, useRoute } from '@react-navigation/native';
import DishRow from '../components/DishRow';
import Cart from '../components/cart';
import { Restaurant } from '../constants';
import { RouteProp } from '@react-navigation/native';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../slices/restaurantSlice';
import { useState } from 'react';
import { addToCart, removeFromCart } from '../slices/cartSlice';

interface RestaurantScreenProps {}
type RouteParams = {
  params: {
    item: Restaurant;
  };
};

export default function RestaurantScreen(props: RestaurantScreenProps) {
  const { params } = useRoute<RouteProp<RouteParams, 'params'>>();
  const navigation = useNavigation();
  let item = params.item;
  // console.log('restaurant: ', item);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const handleTotalChange = (newTotal: number) => {
    setTotalPrice(newTotal);
  }

  const handleTotalQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  }

  useEffect(() => {
    if(item && item.id){
      dispatch(setRestaurant({...item}))
    }
  }, [item, dispatch]);
  return (
    <View>
      <Cart navigation = {navigation} total={totalPrice} quantity={quantity}/>
      <ScrollView>
        <View className="relative">
          <Image className="w-full h-72" source={item.image} />
          <TouchableOpacity className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full" onPress={() => navigation.goBack()}>
            <Icon.ArrowLeft strokeWidth="3" stroke={ThemeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>
        <View style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }} className="bg-white -mt-12 pt-6 ">
          <View className="px-5">
            <Text className="text-3xl font-bold">{item.name}</Text>
            <View className="flex-row font-semibold space-x-2 my-2">
              <View className="flex-row items-center space-x-1">
                <Icon.Star className="h-4 w-4" fill="yellow" stroke="orange"></Icon.Star>
                <Text className="text-xs">
                  <Text className={item.stars > 3 ? ' text-green-700 ' : 'text-red-700'}>{item.stars} </Text>
                  <Text className="text-gray-500">
                    ({item.reviews} reviews) | <Text className="font-semibold">{item.category}</Text>
                  </Text>
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <Icon.MapPin color="red" width="15" height="15"></Icon.MapPin>
                <Text className="text-gray-700 text-xs ">{item.address}</Text>
              </View>
            </View>
            {/* add descritpion */}
            <Text className="text-gray-500 mt-2">{item.description}</Text>
          </View>
        </View>
        {/* menu */}
        <View className="pb-36 bg-white">
          <Text className="px-5 py-4 text-2xl font-bold">Menu</Text>
          {item.dishes.map((dish: any, index: number) => (
            <DishRow item={{ ...dish, quantity: 1 }} key={index} onTotalChange={handleTotalChange} onQuantityChange={handleTotalQuantityChange} addToCart={(item) => dispatch(addToCart(item))} removeFromCart = {(id) => dispatch(removeFromCart({id}))} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
