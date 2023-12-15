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
    name: "Fresh Chicken",
    desc: "Savour the exquisite taste of our premium Fresh Chicken, thoughtfully sourced and carefully selected to elevate your culinary creations. Our chickens are raised in optimal conditions, ensuring the highest quality and freshness. Tender and succulent, they promise a delightful dining experience for you and your loved ones. Whether you're grilling, roasting, or simmering in a savory stew, our Fresh Chicken guarantees a mouthwatering result every time. Packed with natural flavors and lean protein, it's the perfect choice for those who appreciate the finest in non- vegetarian cuisine.",
    category: "Meat",
    foodType: "Non-Vegetarian",
    price: 97500,
    rating: 4.8,
    image: require("../../../assets/images/shopping/chicken.jpg"),
  },
  {
    id: 2,
    vendorId: "v1",
    name: "Broccoli",
    desc: "Discover the crisp and vibrant flavor of our premium Broccoli. Sourced from the finest farms, our broccoli is handpicked to ensure freshness and nutritional quality. Each bite offers a burst of wholesome goodness, making it an excellent choice for a nutritious and satisfying vegetarian meal. Whether steamed, stir-fried, or added to your favorite salads, our Broccoli complements a variety of dishes. Packed with essential vitamins and antioxidants, it's not only delicious but also a health-conscious addition to your diet.",
    category: "Vegetarian",
    foodType: "Vegetarian",
    price: 31999,
    rating: 4.5,
    image: require("../../../assets/images/shopping/broccoli.jpg"),
  },
  {
    id: 3,
    vendorId: "v2",
    name: "Bandung's Letuce",
    desc: "Indulge in the freshness of Bandung's Lettuce, a premium choice for your vegetarian culinary adventures. Sourced from the lush fields of Bandung, each leaf is carefully cultivated to bring you the finest quality and flavor. Our lettuce is not just a salad staple; it's a versatile ingredient that adds crispness and vitality to your sandwiches, wraps, and other creations. Elevate your dishes with the wholesome goodness of Bandung's Lettuce, where every bite is a celebration of freshness and health.",
    category: "Vegetarian",
    foodType: "Vegetarian",
    price: 23000,
    rating: 4.2,
    image: require("../../../assets/images/shopping/letuce.jpg"),
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
    image: require("../../../assets/images/shopping/ginger.jpeg"),
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