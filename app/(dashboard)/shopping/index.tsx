import { TextInput, View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import Categories from "../../../components/categories";
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';

import ShoppingCard from "../../../components/ShoppingCard";

export interface ingredientsItem {
  id: number;
  vendorId: string;
  name: string;
  desc: string;
  category: string;
  foodType: string;
  price: number;
  rating: number;
  image: any;
}

export const ingredientsData: ingredientsItem[] = [
  {
    id: 1,
    vendorId: "v1",
    name: "Spaghetti Bolognese",
    desc: "Classic Italian dish with meat sauce.",
    category: "Pasta",
    foodType: "Non-Vegetarian",
    price: 120999,
    rating: 4.8,
    image: require("../../../assets/images/dishes/pizza-3.jpg"),
  },
  {
    id: 2,
    vendorId: "v1",
    name: "Chicken Alfredo",
    desc: "Creamy pasta with grilled chicken.",
    category: "Pasta",
    foodType: "Non-Vegetarian",
    price: 14.99,
    rating: 4.5,
    image: require("../../../assets/images/dishes/burger-1.jpg"),
  },
  {
    id: 3,
    vendorId: "v2",
    name: "Vegetarian Stir-Fry",
    desc: "Colorful stir-fried vegetables with tofu.",
    category: "Vegetarian",
    foodType: "Vegetarian",
    price: 10.99,
    rating: 4.2,
    image: require("../../../assets/images/dishes/burger-1.jpg"),
  },
  {
    id: 4,
    vendorId: "v2",
    name: "Margherita Pizza",
    desc: "Simple pizza with tomato, mozzarella, and basil.",
    category: "Pizza",
    foodType: "Vegetarian",
    price: 11.99,
    rating: 4.6,
    image: require("../../../assets/images/dishes/burger-1.jpg"),
  },
  {
    id: 5,
    vendorId: "v3",
    name: "Lasagna",
    desc: "Layered pasta dish with meat sauce and cheese.",
    category: "Pasta",
    foodType: "Non-Vegetarian",
    price: 15.99,
    rating: 4.7,
    image: require("../../../assets/images/dishes/burger-1.jpg"),
  },
  {
    id: 6,
    vendorId: "v3",
    name: "Garlic Bread",
    desc: "Bread with a layer of garlic butter.",
    category: "Bread",
    foodType: "Vegetarian",
    price: 5.99,
    rating: 4.4,
    image: require("../../../assets/images/dishes/burger-1.jpg"),
  },
  {
    id: 7,
    vendorId: "v4",
    name: "Caesar Salad",
    desc: "Romaine lettuce with croutons, parmesan, and Caesar dressing.",
    category: "Salad",
    foodType: "Vegetarian",
    price: 7.99,
    rating: 4.3,
    image: require("../../../assets/images/dishes/burger-1.jpg"),
  },
  {
    id: 8,
    vendorId: "v4",
    name: "Chocolate Cake",
    desc: "Rich, moist cake with chocolate frosting.",
    category: "Dessert",
    foodType: "Vegetarian",
    price: 13.99,
    rating: 4.9,
    image: require("../../../assets/images/dishes/burger-1.jpg"),
  },
  {
    id: 9,
    vendorId: "v5",
    name: "Vanilla Ice Cream",
    desc: "Creamy ice cream with vanilla flavor.",
    category: "Dessert",
    foodType: "Vegetarian",
    price: 6.99,
    rating: 4.8,
    image: require("../../../assets/images/dishes/burger-1.jpg"),
  },
  // Additional items
  {
    id: 10,
    vendorId: "v5",
    name: "Chicken Noodle Soup",
    desc: "Comforting soup with chicken and noodles.",
    category: "Soup",
    foodType: "Non-Vegetarian",
    price: 8.99,
    rating: 4.0,
    image: require("../../../assets/images/dishes/burger-1.jpg"),
  },
  {
    id: 11,
    vendorId: "v6",
    name: "Greek Salad",
    desc: "Healthy salad with feta, olives, and tomatoes.",
    category: "Salad",
    foodType: "Vegetarian",
    price: 9.99,
    rating: 4.6,
    image: require("../../../assets/images/dishes/burger-1.jpg"),
  },
];



export default function Shopping() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <SafeAreaView className="bg-white">
      <View>
        <View className="flex-row items-center px-6 pt-6 space-x-2">
          <Ionicons name="ios-location-sharp" size={24} color="#ff9432" />
          <Text className="text-lg font-semibold">FT UI, Depok</Text>
          <MaterialIcons name="arrow-drop-down" size={24} color="#ff9432" />
        </View>
        <View className="flex-row items-center px-4 pt-2">
          <Text className="w-2/3 text-3xl font-bold">
            Order Your Ingredients Here
          </Text>
          <Image
            style={{ width: 100, height: 100 }}
            source={require("../../../assets/delivery-boy.png")}
            className="bg-white rounded-3xl"
          />
        </View>
        <View className="flex-row items-center p-4 space-x-2">
          <View className="flex-row items-center flex-1 p-3 border border-black rounded-xl">
            <Feather name="search" size={24} color="black" />
            <TextInput
              placeholder="Search"
              value={search}
              onChangeText={(text) => setSearch(text)}
              className="flex-1 ml-2"
            />
          </View>

        </View>
      </View>
      <View>

        <ScrollView
          contentContainerStyle={{
            paddingBottom: 1000,
          }}
        >
          <Text className="px-4 text-lg font-semibold">Categories</Text>
          <Categories />
          <View className="flex-row flex-wrap items-center justify-center flex-1 my-6">

            {ingredientsData.map((ingredients) => (
              <ShoppingCard key={ingredients.name} item={ingredients} />
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}