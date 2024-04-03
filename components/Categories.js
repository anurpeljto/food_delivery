import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import {categories} from '../constants/index';
import { Image } from 'react-native';
import { useState } from 'react';

export default function Categories() {
  const [activeCategory, setActive] = useState(null);
  return (
    <View className="mt-4">
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="overflow-visible" contentContainerStyle={{
        paddingHorizontal:15
      }}>

        {
          categories.map((category, index) => {
            let isActive = category.id == activeCategory;
            let btn = isActive ? ' bg-gray-600 ' : ' bg-gray-200 ';
            let text = isActive ? ' font-semibold text-gray-600 ' : ' text-gray 400 ';
            return (
              <View key={index} className="flex justify-center items-center mr-6">
                <TouchableOpacity 
                  className={"p-1 rounded-full shadow bg-gray-200" + btn}
                  onPress={() => setActive(category.id)}>

                    <Image style={{width:45, height: 45}}
                    source={category.image} />

                </TouchableOpacity>
                <Text className={"text-sm" + text}>{category.name}</Text>
              </View>
            )
          })
        }

      </ScrollView>
      <Text></Text>
    </View>
  )
}