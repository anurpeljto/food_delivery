import { View, Text, TextInput} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context';
import React from 'react'
import { StyleSheet } from 'react-native'
import * as Icon from 'react-native-feather';
import { StatusBar } from 'expo-status-bar';

  
  export default function HomeScreen() {
    return (
      <SafeAreaView className="bg-white">
        <StatusBar barStyle="dark-content" />
            <View className="flex-row items-center space-x-2 px-4 pb-2">
                <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
                    <Icon.Search height="25" width="25" stroke="gray"></Icon.Search>
                    <TextInput placeholder='Restaurants' className="ml-2 flex-1" />
                </View>
            </View>
      </SafeAreaView>
    )
  }