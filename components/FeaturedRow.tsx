import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import RecipesCard from "./RecipesCard";


export default function FeaturedRow({
  title,
  recipes,
  restaurants,
  search,
}) {
  const filteredRestaurants = restaurants.filter(
    (res) => res.name.toUpperCase().indexOf(search.toUpperCase()) > -1
  );

  return (
    <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-gray-500 text-xs">{description}</Text>
        </View>
        <TouchableOpacity>
          <Text className="font-semibold">
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="overflow-visible py-5"
      >
        {filteredRestaurants.map((restaurant, index) => {
          return <RecipesCard item={restaurant} key={index} />;
        })}
      </ScrollView>
    </View>
  );
}
