import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { ThemeColors } from '../theme/index';
import RestaurantCard from './RestaurantCard';
import { Restaurant } from '../constants/index';
import { categories } from '../constants/index';
import '../constants/index';

interface FeaturedRowProps {
  title: string;
  description: string;
  restaurants: Restaurant[];
  activeCategory: string | null;
}

const FeaturedRow: React.FC<FeaturedRowProps> = ({ title, description, restaurants, activeCategory }) => {
  const filteredRestaurants = activeCategory ? restaurants.filter(restaurant => restaurant.category === activeCategory) : restaurants;

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
          <Text style={{ color: ThemeColors.text }} className="font-bold">See all</Text>
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
        {filteredRestaurants.map((restaurant, index) => (
          <RestaurantCard
            item={restaurant}
            key={index}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
