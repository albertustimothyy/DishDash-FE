import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';

// Define the interface for the expected shape of the item
interface IngredientItem {
  name: string;
  desc: string;
  price: number;
  rating: number;
  image: any;
}

// Prop interface for the RecipesCard component
interface ShoppingCardProps {
  item: IngredientItem;
}

const ShoppingCard: React.FC<ShoppingCardProps> = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
    //   onPress={() => navigation.navigate("Restaurant", { ...item })}

    >
      <View className="w-2/5 h-64 mx-2 mb-4 p-3 bg-white rounded-3xl shadow-xl shadow-black " >
        <View className="flex-row items-center space-x-0.5">
          <Image
            source={require("../assets/star.png")}
            className="h-5 w-5"
          />
          <Text className="text-xs">{item.rating}</Text>
        </View>
        <View className="flex items-center pt-2">
          <Image className="h-32 w-28 rounded-lg" source={item.image} />
        </View>
        <View className="px-1 pb-2">
          <Text className="text-xs font-semibold pt-2">{item.name}</Text>
          <View className="flex-row items-center space-x-1">
            <Text className="text-gray-700 text-[10px] text-justify">
              {item.desc.length > 30 ? `${item.desc.substring(0, 30)}...` : item.desc}
            </Text>
          </View>
        </View>
        <View className="flex-row items-center justify-between px-1">
          <Text className="text-[15px] font-semibold text-[#ff9431]">Rp {item.price}</Text>
          <AntDesign name="pluscircle" size={24} color="#ff9431" />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ShoppingCard;