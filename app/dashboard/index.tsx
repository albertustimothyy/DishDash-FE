import { TextInput, View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import Categories from "../../components/categories";
import Foods from "../../components/foods";
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';
import RecipesCard from "../../components/RecipesCard";

interface RecipeItem {
  name: string;
  recipe: string;
  price: number;
  rating: number;
  image: string;
}

const data: RecipeItem[] = [
  {
    name: "Spaghetti Bolognese",
    recipe: "Classic Italian dish with meat sauce.",
    price: 12.99,
    rating: 4.8,
    image: "spaghetti.jpg",
  },
  {
    name: "Chicken Alfredo",
    recipe: "Creamy pasta with grilled chicken.",
    price: 14.99,
    rating: 4.5,
    image: "chicken_alfredo.jpg",
  },
  {
    name: "Vegetarian Stir-Fry",
    recipe: "Colorful stir-fried vegetables with tofu.",
    price: 10.99,
    rating: 4.2,
    image: "vegetarian_stir_fry.jpg",
  },
  {
    name: "Margherita Pizza",
    recipe: "Simple pizza with tomato, mozzarella, and basil.",
    price: 11.99,
    rating: 4.6,
    image: "margherita_pizza.jpg",
  },
 {
   name: "Lasagna",
   recipe: "Layered pasta dish with meat sauce and cheese.",
   price: 15.99,
   rating: 4.7,
   image: "lasagna.jpg",
 },
 {
   name: "Garlic Bread",
   recipe: "Bread with a layer of garlic butter.",
   price: 5.99,
   rating: 4.4,
   image: "garlic_bread.jpg",
 },
 {
   name: "Caesar Salad",
   recipe: "Romaine lettuce with croutons, parmesan, and Caesar dressing.",
   price: 7.99,
   rating: 4.3,
   image: "caesar_salad.jpg",
 },
 {
   name: "Chocolate Cake",
   recipe: "Rich, moist cake with chocolate frosting.",
   price: 13.99,
   rating: 4.9,
   image: "chocolate_cake.jpg",
 },
 {
   name: "Vanilla Ice Cream",
   recipe: "Creamy ice cream with vanilla flavor.",
   price: 6.99,
   rating: 4.8,
   image: "vanilla_ice_cream.jpg",
 },
];


export default function Dashboard() {
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
                        Order Your Food Fast and Free
                    </Text>
                    <Image
                        style={{ width: 100, height: 100 }}
                        source={require("../../assets/delivery-boy.png")}
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

const styles = StyleSheet.create( {
  app: {
    flex: 4, // the number of columns you want to devide the screen into
    marginHorizontal: "auto",
    width: 400
  },
  item: {
    flex: 1,
    maxWidth: "25%", // 100% devided by the number of rows you want
    alignItems: "center",
    
    // my visual styles; not important for the grid
    padding: 10,
    backgroundColor: "rgba(249, 180, 45, 0.25)",
    borderWidth: 1.5,
    borderColor: "#fff"
  }
});