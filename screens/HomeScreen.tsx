import { View, Text, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { StyleSheet } from 'react-native';
import * as Icon from 'react-native-feather';
import { StatusBar } from 'expo-status-bar';
import { ThemeColors } from '../theme';
import Categories from '../components/Categories';
import { FeaturedRestaurant, featuredRestaurants } from '../constants';
import FeaturedRow from '../components/featuredRow';
import { useState, useEffect } from 'react';
import axios from 'axios';
import * as Location from 'expo-location';

interface HomeProps {}

export default function HomeScreen(props: HomeProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [userLocation, setUserLocation] = useState<string>('');

  useEffect(() => {
    fetchUserLocation();
  },[]);

  const fetchUserLocation = async() => {
    
    try {
      let {status} = await Location.requestForegroundPermissionsAsync();
      if(status !== 'granted'){
        setUserLocation('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const {latitude, longitude} = location.coords;  

      const apiKey ='AIzaSyBWfKAGAGUA-6DCI1oL_DOjBMgnMqGc5Qc';
      const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

      const response = await axios.get(url);
      if(response.data.results.length > 0){
        var streetName = '';
        var strt = '';
        var number: number = null;
        for (let result of response.data.results[0].address_components){
          if (result.types.includes("locality")){
            streetName = result.long_name;
          }
          if (result.types.includes('route')){
            strt = result.short_name;
          }
          if (result.types.includes('street_number')){
            number = result.short_name;
          }
        }

        var final = '';

        if (strt.length >1  && streetName != null){
          final = strt + ', ' + number + ', ' +streetName;
        }
        else {
          final = streetName;
        }
        setUserLocation(final);
      }
      // setUserLocation(`${latitude}, ${longitude}`);
    } catch (error){
      console.error('Failed while trying to fetch user location: ', error);
      setUserLocation('Error fetching location');
    }
  }

  const filteredRestaurants: FeaturedRestaurant[] = featuredRestaurants.map((category) => ({
    ...category,
    restaurants: category.restaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  }));

  return (
    <SafeAreaView className="bg-white">
      <StatusBar style="dark" />
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput
            placeholder="Restaurants"
            className="ml-2 flex-1"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <Icon.MapPin height="20" width="20" stroke="gray" />
            <Text className="text-gray-600">{userLocation}</Text>
          </View>
        </View>
        {/* <View className="p-3 rounded-full" style={{ backgroundColor: ThemeColors.bgColor(1) }}>
          <Icon.Sliders height="20" width="20" strokeWidth={2.5} stroke="white" />
        </View> */}
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
        <Categories setActiveCategory={setActiveCategory} activeCategory={activeCategory}> </Categories>

        <View className="mt-5">
          {filteredRestaurants.map((item: FeaturedRestaurant, index: number) => (
              <FeaturedRow
                key={index.toString()} 
                title={item.title}
                restaurants={item.restaurants}
                description={item.description}
                activeCategory={activeCategory}
              />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

