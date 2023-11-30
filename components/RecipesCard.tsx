import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons'; 

// Define the interface for the expected shape of the item
interface RecipeItem {
  name: string;
  recipe: string;
  price: number;
  rating: number;
  image: string;
}

// Prop interface for the RecipesCard component
interface RecipesCardProps {
  item: RecipeItem;
}

const RecipesCard: React.FC<RecipesCardProps> = ({ item }) => {
    const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
    //   onPress={() => navigation.navigate("Restaurant", { ...item })}
    >
      <View className="w-2/5 h-44 mx-4 mb-4 p-3 bg-white rounded-3xl shadow-xl shadow-black " >
        <View className="flex-row items-center space-x-0.5">
            <Image
              source={require("../assets/star.png")}
              className="h-5 w-5"
            />
            <Text className="">{item.rating}</Text>
        </View>
        {/* <Image className="h-36 w-64 rounded-t-3xl" source={{ uri: item.image }} /> */}
        <View className="px-1 pb-3 space-y-2">
          <Text className="text-base font-bold pt-2">{item.name}</Text>
          <View className="flex-row items-center space-x-1">
            <Text className="text-gray-700 text-xs text-justify">
              {item.recipe.length > 30 ? `${item.recipe.substring(0, 30)}...` : item.recipe}
            </Text>
          </View>
        </View>
          <Text className="absolute left-4 bottom-2 text-lg font-semibold text-[#ff9431]">Rp {item.price}</Text>
        <View className="absolute right-4 bottom-2">
          <AntDesign name="pluscircle" size={24} color="#ff9431" />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default RecipesCard;