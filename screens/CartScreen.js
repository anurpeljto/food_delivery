import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import * as Icon from 'react-native-feather';
import { TouchableOpacity } from 'react-native';
import { ThemeColors } from '../theme';
import { useNavigation, useRoute } from '@react-navigation/native';
import DishRow from '../components/DishRow';
import OrderedCard from '../components/OrderedCard';
import { ScrollView } from 'react-native';
import Cart from '../components/cart';

export default function CartScreen() {  
  // forgot to change to branch, adding this comment to be able to pull request

  // will make this screen take params later, once a DB or other form of data is implemented
  // will also make cart component use a new variable that will be sent by the function to this screen, per each selected item
  // based on that, this page will use .map or .forEach() to generate dynamic rows for each dish ordered.
  // SAME TYPE/ORDER ITEMS WILL BE GROUPED: EX. Stuffed crust pizza x2
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
        <SafeAreaView style={{backgroundColor: ThemeColors.bgColor(1)}}>

        <View className="pb-10 flex-row justify-center items-center">
          <Text className="px-5 text-2xl font-bold text-white">Cart</Text> 
        </View>
        <TouchableOpacity className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full" onPress={() => navigation.goBack()}>
            <Icon.ArrowLeft strokeWidth="3" stroke={ThemeColors.bgColor(1)} />
          </TouchableOpacity>
          </SafeAreaView>

        <ScrollView className="bg-white flex py-2 w-full h-full">
          <View className="flex py-2 bg-white-700">
            <OrderedCard />
            <OrderedCard />
            <OrderedCard />
            <OrderedCard />
            <OrderedCard />
          </View>
        </ScrollView>

        <View style={{backgroundColor: ThemeColors.bgColor(0.2), position: 'absolute', bottom: 0, left: 0, right: 0}} className="p-6 px-8 rounded-t-3xl space-y-1">
          <View className="flex-row justify-between">
            <Text className="text-gray-700 ">Price</Text>
            <Text className="text-gray-700 ">100 KM</Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-700 ">Fees</Text>
            <Text className="text-gray-700 ">2 KM</Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-700 text-xl font-extrabold">Total</Text>
            <Text classname="text-gray-700 text-xl font-extrabold">2 KM</Text>
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