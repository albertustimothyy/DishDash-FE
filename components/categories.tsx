import { useState } from "react";
import { ScrollView, TouchableOpacity, View, Text, Image } from "react-native";

const categories = [
  {
    id: 1,
    name: "Pizza",
    image: require("../assets/images/categories/pizza.png"),
  },
  {
    id: 2,
    name: "Burger",
    image: require("../assets/images/categories/burger.png"),
  },
  {
    id: 3,
    name: "Rolls",
    image: require("../assets/images/categories/rolls.png"),
  },
  {
    id: 4,
    name: "Biryani",
    image: require("../assets/images/categories/biryani.png"),
  },
  {
    id: 5,
    name: "Chicken",
    image: require("../assets/images/categories/chicken.png"),
  },
  {
    id: 6,
    name: "Ice Cream",
    image: require("../assets/images/categories/icecream.png"),
  },
  {
    id: 7,
    name: "Thali",
    image: require("../assets/images/categories/thali.png"),
  },
  {
    id: 8,
    name: "Idli",
    image: require("../assets/images/categories/idli.png"),
  },
  {
    id: 9,
    name: "Cake",
    image: require("../assets/images/categories/cake.png"),
  },
  {
    id: 10,
    name: "Noodles",
    image: require("../assets/images/categories/noodles.png"),
  },
  {
    id: 11,
    name: "Momos",
    image: require("../assets/images/categories/momos.png"),
  },
  {
    id: 12,
    name: "Paneer",
    image: require("../assets/images/categories/paneer.png"),
  },
];


export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(Number);

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
          let isActive = category.id == activeCategory;
          let btnClass = isActive ? " bg-[#ff9431]" : " bg-white";
          let textClass = isActive
            ? " text-white"
            : " text-black";

          return (
            <TouchableOpacity
              key={index}
              onPress={() => setActiveCategory(category.id)}
              className={"flex flex-row justify-center items-center mr-6 p-2 pr-4 border-2 rounded-xl border-[#ff9431] space-x-3" + btnClass}>
                <Image
                  style={{ width: 30, height: 30 }}
                  source={category.image}
                  className="rounded-3xl bg-white"
                />
              <Text className={"text-base font-bold" + textClass}>{category.name}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
