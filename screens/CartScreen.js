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

  // will make this screen take params later, once a DB or other form of data is implemented
  // will also make cart component use a new variable that will be sent by the function to this screen, per each selected item
  // based on that, this page will use .map or .forEach() to generate dynamic rows for each dish ordered.
  // SAME TYPE/ORDER ITEMS WILL BE GROUPED: EX. Stuffed crust pizza x2
  const navigation = useNavigation();
  return (
    <View>
        <SafeAreaView style={{backgroundColor: ThemeColors.bgColor(1)}}>

        <View className="pb-10 flex-row justify-center items-center">
          <Text className="px-5 text-2xl font-bold text-white">Cart</Text> 
        </View>
        <TouchableOpacity className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full" onPress={() => navigation.goBack()}>
            <Icon.ArrowLeft strokeWidth="3" stroke={ThemeColors.bgColor(1)} />
          </TouchableOpacity>

        <ScrollView className="bg-white flex py-2 w-full h-full">
          <View className="flex py-2 bg-white-700">
            <OrderedCard />
            <OrderedCard />
            <OrderedCard />
            <OrderedCard />
            <OrderedCard />
          </View>

          <View className="relative bottom-1 w-full z-50 pt-3 bg-white-700">
        <TouchableOpacity style={{backgroundColor : ThemeColors.bgColor(1)}} className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-md">
            <View className="p-2 px-4 rounded-full" style={{backgroundColor: 'rgba(255,255,255,0.3)'}}>
                <Text className="font-extrabold text-white text-lg">50</Text> 
            </View>

            <Text className="flex-1 text-center font-extrabold text-white text-lg">
                Pay now
            </Text>

            <Text className="font-extrabold text-white text-lg">{100}KM</Text>
        </TouchableOpacity>

    </View>
        </ScrollView>
        </SafeAreaView>

        </View>
  )
}