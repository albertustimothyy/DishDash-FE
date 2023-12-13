import { TextInput, View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import Categories from "../../../components/categories";
import Foods from "../../../components/foods";
import { Ionicons, Feather } from '@expo/vector-icons';

import RecipesCard from "../../../components/RecipesCard";

interface RecipesItem {
  name: string;
  desc: string;
  duration: number;
  image: any;
}

const data: RecipesItem[] = [
  {
    name: "Spaghetti Bolognese",
    desc: "Classic Italian dish with meat sauce.",
    duration: 30,
    image: require("../../../assets/images/dishes/burger-1.jpg"),
  },
  {
    name: "Chicken Alfredo",
    desc: "Creamy pasta with grilled chicken.",
    duration: 25,
    image: require("../../../assets/images/dishes/burger-1.jpg"),
  },
  {
    name: "Vegetarian Stir-Fry",
    desc: "Colorful stir-fried vegetables with tofu.",
    duration: 20,
    image: require("../../../assets/images/dishes/burger-1.jpg"),
  },
  {
    name: "Margherita Pizza",
    desc: "Simple pizza with tomato, mozzarella, and basil.",
    duration: 35,
    image: require("../../../assets/images/dishes/burger-1.jpg"),
  },
  {
    name: "Lasagna",
    desc: "Layered pasta dish with meat sauce and cheese.",
    duration: 40,
    image: require("../../../assets/images/dishes/burger-1.jpg"),
  },
  {
    name: "Garlic Bread",
    desc: "Bread with a layer of garlic butter.",
    duration: 15,
    image: require("../../../assets/images/dishes/burger-1.jpg"),
  },
  {
    name: "Caesar Salad",
    desc: "Romaine lettuce with croutons, parmesan, and Caesar dressing.",
    duration: 15,
    image: require("../../../assets/images/dishes/burger-1.jpg"),
  },
  {
    name: "Chocolate Cake",
    desc: "Rich, moist cake with chocolate frosting.",
    duration: 50,
    image: require("../../../assets/images/dishes/burger-1.jpg"),
  },
  {
    name: "Vanilla Ice Cream",
    desc: "Creamy ice cream with vanilla flavor.",
    duration: 10,
    image: require("../../../assets/images/dishes/burger-1.jpg"),
  },
  // Add more RecipeItem objects as needed
];



export default function Recipes() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <SafeAreaView className="bg-white">
      <View>
        <View className="flex-row items-center px-6 pt-6 space-x-2">
          {/* <MaterialCommunityIcons name="hand-wave" size={24} color="#ff9432" />
          <Text className="text-lg font-semibold">Welcome, User!</Text>
          <MaterialIcons name="arrow-drop-down" size={24} color="#ff9432" /> */}
        </View>
        <View className="flex-row items-center px-4 pt-2">
          <Text className="w-2/3 text-3xl font-bold">
            Order Your Food Fast and Free
          </Text>
          <View className="bg-[#ffc30b] rounded-full border-2 border-black">
            <Image
              style={{ width: 100, height: 100 }}
              source={require("../../../assets/chef.png")}
            />
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
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 1000,
          }}
        >
          <Text className="px-4 text-lg font-semibold">Recipes</Text>
          <Categories />
          <View className="flex-1 flex-row flex-wrap my-6 items-center justify-center">

            {data.map((recipe) => (
              <RecipesCard key={recipe.name} item={recipe} />
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}