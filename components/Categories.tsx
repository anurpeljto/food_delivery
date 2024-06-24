import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState, createContext, useContext } from 'react';
import { categories } from '../constants/index';
import { Image } from 'react-native';

interface Category {
  id: number;
  name: string;
  image: any;
}


interface CategoriesProps {
}

const Categories: React.FC<CategoriesProps> = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null);

  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        {categories.map((category, index) => {
          const isActive = category.id === activeCategoryId;
          const buttonClass = isActive ? 'bg-gray-600' : 'bg-gray-200';
          const textClass = isActive ? 'font-semibold text-gray-600' : 'text-gray-400';

          return (
            <View key={index} className="flex justify-center items-center mr-6">
              <TouchableOpacity
                className={`p-1 rounded-full shadow ${buttonClass}`}
                onPress={() => setActiveCategoryId(category.id)}
              >
                <Image
                  style={{ width: 45, height: 45 }}
                  source={(category.image)}
                />
              </TouchableOpacity>
              <Text className={`text-sm ${textClass}`}>{category.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;