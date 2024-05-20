import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ThemeColors } from '../theme'
import * as Icon from 'react-native-feather';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native';

interface OrderedCardProps {
  item: {id: Number, name: String, price: number, description: string, quantity: number};
}

const OrderedCard: React.FC<OrderedCardProps> = ({item}) => {
    // will take some sort of input later
    // currently hardcoded
  return (
    <View>
    <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-xl mb-3 mx-2 border" style={{borderColor: ThemeColors.bgColor(1)}}>
      <View className="flex flex-1 space-y-3">
        <View className="pl-3">
            <Text className="text-xl">{item.name}</Text>
            <Text className="text-l text-gray-700">{item.description}</Text>
        </View>
        <View className="flex-row justify-between pl-3 items-center">
            <Text className="text-gray-700 text-lg font-bold">
             {item.quantity} x {item.price} KM 
            </Text>
            
        </View>

      </View>
      </View>
      </View>
  )
}

export default OrderedCard;