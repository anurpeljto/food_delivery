import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native';
import * as Icon from 'react-native-feather';
import { ThemeColors } from '../theme/index.js';
import { useNavigation } from '@react-navigation/native';

export default function RestaurantCard({item}) {
    const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
    onPress={() => navigation.navigate('Restaurant', {...item})}>
        <View className="mr-6 bg-white rounded-3xl shadow-lg"
        style={{
            shadowColor: "gray",
            shadowRadius: 7
        }}>
            <Image className="h-36 w-64 rounded-t-3xl" source={item.image} />
            <View className="px-1 pb-4 space-y-2">
                <Text className="text-lg font-bold pt-2 pl-0">{item.name}</Text>
                <View className="flex-row items-center space-x-1">
                    <Icon.Star className="h-4 w-4" fill="yellow" stroke="orange"></Icon.Star>
                    <Text className="text-xs">
                        <Text className={item.stars > 3 ? ' text-green-700 ' : 'text-red-700'}>{item.stars} </Text>
                        <Text className ="text-gray-500">
                            ({item.reviews} reviews) | <Text className="font-semibold">{item.category}</Text>
                        </Text>
                    </Text>
                </View>
                <View className="flex-row items-center space-x-1">
                    <Icon.MapPin color="red" width="15" height="15"></Icon.MapPin>
                    <Text className="text-gray-700 text-xs ">{item.address}</Text>
                </View>
            </View>
        </View>
    </TouchableWithoutFeedback>
  )
}