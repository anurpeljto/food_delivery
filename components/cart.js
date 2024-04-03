import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ThemeColors } from '../theme'

export default function Cart() {
  return (
    <View className="absolute bottom-5 w-full z-50">
        <TouchableOpacity style={{backgroundColor : ThemeColors.bgColor(1)}} className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg">
            <View className="p-2 px-4 rounded-full" style={{backgroundColor: 'rgba(255,255,255,0.3)'}}>
                <Text className="font-extrabold text-white text-lg">1</Text> 
            </View>

        </TouchableOpacity>

    </View>
  )
}