import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import HomeScreen from './screens/HomeScreen'
import HomeScreen from './screens/HomeScreen.tsx';
import RestaurantScreen from "./screens/RestaurantScreen";
import CartScreen from "./screens/CartScreen";

const Stack = createNativeStackNavigator();

export default function Navigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
                <Stack.Screen name="Restaurant" component={RestaurantScreen}></Stack.Screen>
                <Stack.Screen name="Cart" component={CartScreen}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}