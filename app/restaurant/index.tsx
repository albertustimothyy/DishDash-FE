import { TextInput, View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import Categories from "../../components/categories";
import Foods from "../../components/foods";
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';

import ShoppingCard from "../../components/ShoppingCard";

interface RecipeItem {
  name: string;
  desc: string;
  price: number;
  rating: number;
  image: string;
}

const data: RecipeItem[] = [
  {
    name: "Spaghetti Bolognese",
    desc: "Classic Italian dish with meat sauce.",
    price: 120.999,
    rating: 4.8,
    image: require("../../assets/images/dishes/burger-1.jpg"),
  },
  {
    name: "Chicken Alfredo",
    desc: "Creamy pasta with grilled chicken.",
    price: 14.99,
    rating: 4.5,
    image: require("../../assets/images/dishes/burger-1.jpg"),
  },
  {
    name: "Vegetarian Stir-Fry",
    desc: "Colorful stir-fried vegetables with tofu.",
    price: 10.99,
    rating: 4.2,
    image: require("../../assets/images/dishes/burger-1.jpg"),
  },
  {
    name: "Margherita Pizza",
    desc: "Simple pizza with tomato, mozzarella, and basil.",
    price: 11.99,
    rating: 4.6,
    image: require("../../assets/images/dishes/burger-1.jpg"),
  },
  {
    name: "Lasagna",
    desc: "Layered pasta dish with meat sauce and cheese.",
    price: 15.99,
    rating: 4.7,
    image: require("../../assets/images/dishes/burger-1.jpg"),
  },
  {
    name: "Garlic Bread",
    desc: "Bread with a layer of garlic butter.",
    price: 5.99,
    rating: 4.4,
    image: require("../../assets/images/dishes/burger-1.jpg"),
  },
  {
    name: "Caesar Salad",
    desc: "Romaine lettuce with croutons, parmesan, and Caesar dressing.",
    price: 7.99,
    rating: 4.3,
    image: require("../../assets/images/dishes/burger-1.jpg"),
  },
  {
    name: "Chocolate Cake",
    desc: "Rich, moist cake with chocolate frosting.",
    price: 13.99,
    rating: 4.9,
    image: require("../../assets/images/dishes/burger-1.jpg"),
  },
  {
    name: "Vanilla Ice Cream",
    desc: "Creamy ice cream with vanilla flavor.",
    price: 6.99,
    rating: 4.8,
    image: require("../../assets/images/dishes/burger-1.jpg"),
  },
];


export default function Restaurant() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <SafeAreaView className="bg-white">
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 1000,
        }}
      >
        <View className="">
          <View className="max-h-40 max-w-full p-3">
            <Image
              source={require("../../assets/images/restaurants/resto.png")}
              className="w-full h-full rounded-2xl"
            />
          </View>
          <View className="flex flex-row justify-between p-3">
            <Text className="text-lg font-bold">Waroeng Burger</Text>
            <View className="flex-row items-center space-x-0.5">
              <Image
                source={require("../../assets/star.png")}
                className="h-6 w-6"
              />
              <Text className="text-base">5.0</Text>
              <Text className="text-base">(41 reviews)</Text>
            </View>
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

          <Text className="px-4 text-lg font-semibold">Recipes</Text>
          <Categories />
          <View className="flex-1 flex-row flex-wrap my-6 items-center justify-center">

            {data.map((recipe) => (
              <ShoppingCard key={recipe.name} item={recipe} />
            ))}
          </View>


        </View>
      </ScrollView>
    </SafeAreaView>
  );
}