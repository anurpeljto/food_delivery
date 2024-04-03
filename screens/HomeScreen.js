import { View, Text, TextInput, ScrollView} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context';
import React from 'react'
import { StyleSheet } from 'react-native'
import * as Icon from 'react-native-feather';
import { StatusBar } from 'expo-status-bar';
import { ThemeColors } from '../theme';
import Categories from '../components/Categories';
import { featuredRestaurants } from '../constants';
import FeaturedRow from '../components/featuredRow';

  
  export default function HomeScreen() {
    return (
      <SafeAreaView className="bg-white">
        <StatusBar barStyle="dark-content" />
            <View className="flex-row items-center space-x-2 px-4 pb-2">
                <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
                    <Icon.Search height="25" width="25" stroke="gray"></Icon.Search>
                    <TextInput placeholder='Restaurants' className="ml-2 flex-1" />
                    <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
                      <Icon.MapPin height="20" width="20" stroke="gray" />
                      <Text className="text-gray-600">Sarajevo, FBiH</Text>
                    </View>
                </View>
                <View className="p-3 rounded-full" style={{backgroundColor: ThemeColors.bgColor(1)}}>
                  <Icon.Sliders height="20" width="20" strokeWidth={2.5} stroke="white"></Icon.Sliders>
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}
            contentContainerStyle= {{
              paddingBottom:20,

            }}>
              
              <Categories></Categories>

              <View className="mt-5">
                {
                  [featuredRestaurants, featuredRestaurants, featuredRestaurants].map((item, index) => {
                    return (
                      <FeaturedRow
                      key={index}
                      title={item.title}
                      restaurants={item.restaurants}
                      description={item.description}></FeaturedRow>
                    )
                  })
                }
              </View>
            </ScrollView>
      </SafeAreaView>
    )
  }