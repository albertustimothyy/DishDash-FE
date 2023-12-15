import { TextInput, View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import Categories from "../../../components/categories";
import Foods from "../../../components/foods";
import { Ionicons, Feather } from '@expo/vector-icons';

import RecipesCard from "../../../components/RecipesCard";

export interface RecipesItem {
  id: number;
  name: string;
  desc: string;
  duration: number;
  image: any;
  ingredients: { ingredient: string; amount: string }[];
  method: string[];
  reviews: number;
}

export const RecipesData: RecipesItem[] = [
  {
    id: 1,
    name: "Spaghetti Bolognese",
    desc: "Classic Italian dish with meat sauce.",
    duration: 30,
    image: require("../../../assets/images/dishes/burger-1.jpg"),
    ingredients: [
      { ingredient: "Spaghetti", amount: "200g" },
      { ingredient: "Ground Beef", amount: "300g" },
      { ingredient: "Tomato Sauce", amount: "1 cup" },
    ],
    method: ["Boil spaghetti", "Cook ground beef", "Mix with tomato sauce"],
    reviews: 4.8,
  },
  {
    id: 2,
    name: "Chicken Alfredo",
    desc: "Creamy pasta with grilled chicken.",
    duration: 25,
    image: require("../../../assets/images/dishes/burger-2.jpg"),
    ingredients: [
      { ingredient: "Fettuccine", amount: "250g" },
      { ingredient: "Grilled Chicken", amount: "200g" },
      { ingredient: "Alfredo Sauce", amount: "1 cup" },
    ],
    method: ["Boil fettuccine", "Grill chicken", "Mix with Alfredo sauce"],
    reviews: 4.5,
  },
  {
    id: 3,
    name: "Vegetarian Stir-Fry",
    desc: "Colorful stir-fried vegetables with tofu.",
    duration: 20,
    image: require("../../../assets/images/dishes/burger-3.jpg"),
    ingredients: [
      { ingredient: "Tofu", amount: "150g" },
      { ingredient: "Broccoli", amount: "1 cup" },
      { ingredient: "Bell Peppers", amount: "1 cup" },
    ],
    method: ["Stir-fry tofu and vegetables"],
    reviews: 4.2,
  },
  {
    id: 4,
    name: "Margherita Pizza",
    desc: "Simple pizza with tomato, mozzarella, and basil.",
    duration: 18,
    image: require("../../../assets/images/dishes/pizza-1.jpg"),
    ingredients: [
      { ingredient: "Pizza Dough", amount: "1 ball" },
      { ingredient: "Tomato Sauce", amount: "1/2 cup" },
      { ingredient: "Mozzarella Cheese", amount: "150g" },
    ],
    method: ["Roll out dough", "Spread sauce and cheese", "Bake until golden"],
    reviews: 4.6,
  },
  {
    id: 5,
    name: "Lasagna",
    desc: "Layered pasta dish with meat sauce and cheese.",
    duration: 40,
    image: require("../../../assets/images/dishes/pizza-2.jpg"),
    ingredients: [
      { ingredient: "Lasagna Noodles", amount: "9 sheets" },
      { ingredient: "Ground Beef", amount: "500g" },
      { ingredient: "Tomato Sauce", amount: "2 cups" },
    ],
    method: ["Boil noodles", "Cook beef", "Layer noodles, sauce, and cheese"],
    reviews: 4.7,
  },
  {
    id: 6,
    name: "Garlic Bread",
    desc: "Bread with a layer of garlic butter.",
    duration: 12,
    image: require("../../../assets/images/dishes/pizza-3.jpg"),
    ingredients: [
      { ingredient: "French Bread", amount: "1 loaf" },
      { ingredient: "Butter", amount: "1/2 cup" },
      { ingredient: "Garlic", amount: "3 cloves" },
    ],
    method: ["Slice bread", "Mix garlic with butter", "Spread on bread and bake"],
    reviews: 4.4,
  },
  {
    id: 7,
    name: "Caesar Salad",
    desc: "Romaine lettuce with croutons, parmesan, and Caesar dressing.",
    duration: 15,
    image: require("../../../assets/images/dishes/burger-1.jpg"),
    ingredients: [
      { ingredient: "Romaine Lettuce", amount: "1 head" },
      { ingredient: "Croutons", amount: "1 cup" },
      { ingredient: "Parmesan Cheese", amount: "1/2 cup" },
    ],
    method: ["Toss lettuce with croutons, cheese, and dressing"],
    reviews: 4.3,
  },
  {
    id: 8,
    name: "Chocolate Cake",
    desc: "Rich, moist cake with chocolate frosting.",
    duration: 35,
    image: require("../../../assets/images/dishes/burger-1.jpg"),
    ingredients: [
      { ingredient: "All-Purpose Flour", amount: "2 cups" },
      { ingredient: "Cocoa Powder", amount: "1/2 cup" },
      { ingredient: "Butter", amount: "1 cup" },
    ],
    method: ["Mix ingredients", "Bake until done", "Frost with chocolate icing"],
    reviews: 4.9,
  },
  {
    id: 9,
    name: "Vanilla Ice Cream",
    desc: "Creamy ice cream with vanilla flavor.",
    duration: 10,
    image: require("../../../assets/images/dishes/burger-1.jpg"),
    ingredients: [
      { ingredient: "Heavy Cream", amount: "2 cups" },
      { ingredient: "Sugar", amount: "3/4 cup" },
      { ingredient: "Vanilla Extract", amount: "1 tablespoon" },
    ],
    method: ["Whip cream", "Add sugar and vanilla", "Freeze until set"],
    reviews: 4.8,
  },
  // Add more items with unique ids as needed
];


export default function Recipes() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <SafeAreaView className="bg-white">
      <View>
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
            {RecipesData.map((recipe) => (
              <RecipesCard key={recipe.name} item={recipe} />
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}