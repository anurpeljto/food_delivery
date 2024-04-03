import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import {ThemeColors} from '../theme/index.js';
import RestaurantCard from './RestaurantCard.js';

export default function FeaturedRow({title, description, restaurants}) {
  return (
    <View className="">
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-gray-500 text-xs">
            {description}
          </Text>
        </View>
        <TouchableOpacity>
          <Text style={{color: ThemeColors.text}} className="font-bold">See all</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingBottom: 15
      }}
      className="overflow-visible py-5"
      >

        {
          restaurants.map((restaurant, index) => {
            return (
              <RestaurantCard
              item={restaurant}
              key={index}>

              </RestaurantCard>
            )
          })
        }

      </ScrollView>
    </View>
  )
}