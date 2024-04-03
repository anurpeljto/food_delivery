import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Icon from 'react-native-feather';
import { ThemeColors } from '../theme';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image } from 'react-native';

export default function RestaurantScreen() {
  const {params} = useRoute();
  const navigation = useNavigation();
  let item = params;
  // console.log('restaurant: ', item);
  return (
    <View>
      <ScrollView>
        <View className="relative">
          <Image className="w-full h-72" source={item.image} />
          <TouchableOpacity className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full"
          onPress={() => navigation.goBack()}>
            <Icon.ArrowLeft strokeWidth="3" stroke={ThemeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}