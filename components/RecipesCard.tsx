import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

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
      <View
        style={{
          elevation: 1.5,
        }}
        className="mr-6 mb-1 bg-white rounded-3xl shadow-lg shadow-black"
          >
        <View className="flex-row items-center space-x-0.5">
            <Image
              source={require("../assets/star.png")}
              className="h-3.5 w-3.5"
            />
            <Text className="text-green-700">{item.rating}</Text>
        </View>
        <Image className="h-36 w-64 rounded-t-3xl" source={{ uri: item.image }} />
        <View className="px-3 pb-4 space-y-2">
          <Text className="text-lg font-bold pt-2">{item.name}</Text>
          <View className="flex-row items-center space-x-1">
            <Text className="text-gray-700 text-xs">{item.recipe}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default RecipesCard;