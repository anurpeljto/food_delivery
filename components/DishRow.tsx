import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ThemeColors } from '../theme';
import * as Icon from 'react-native-feather';

export interface DishRowProps {
  item: {
    name: string;
    description: string;
    price: number;
    image: any; 
  };
  onTotalChange : (total: number) => void;
  onQuantityChange: (quantity: number) => void;
}

const DishRow: React.FC<DishRowProps> = ({ item, onTotalChange, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(1);

  const decrementQuantity = () => {
    if(quantity > 1){
      setQuantity(quantity-1);
      onTotalChange(item.price * (quantity-1));
      onQuantityChange(quantity - 1);
    }
  }

  const incrementQuantity = () => {
    setQuantity(quantity+1);
    onTotalChange(item.price * (quantity + 1));
    onQuantityChange(quantity + 1);
  }


  return (
    <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
      <Image className="rounded-3xl" style={{ height: 100, width: 100 }} source={item.image} />
      <View className="flex flex-1 space-y-3">
        <View className="pl-3">
          <Text className="text-xl">{item.name}</Text>
          <Text className="text-l text-gray-700">{item.description}</Text>
        </View>
        <View className="flex-row justify-between pl-3 items-center">
          <Text className="text-gray-700 text-lg font-bold">
            {item.price} KM
          </Text>
          <View className="flex-row items-center">
            <TouchableOpacity onPress = {decrementQuantity} className="p-1 rounded-full" style={{ backgroundColor: ThemeColors.bgColor(1) }}>
              <Icon.Minus strokeWidth="2" height="20" width="20" stroke="white" />
            </TouchableOpacity>
          </View>

          <Text className="px-3">
            {quantity}
          </Text>

          <View className="flex-row items-center">
            <TouchableOpacity onPress={incrementQuantity} className="p-1 rounded-full" style={{ backgroundColor: ThemeColors.bgColor(1) }}>
              <Icon.Plus strokeWidth="2" height="20" width="20" stroke="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DishRow;
