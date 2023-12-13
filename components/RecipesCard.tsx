import { View, Text, TouchableWithoutFeedback, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons';

// Define the interface for the expected shape of the item
interface RecipesItem {
    name: string;
    desc: string;
    duration: number;
    image: any;
}

// Prop interface for the RecipesCard component
interface RecipesCardProps {
    item: RecipesItem;
}

const RecipesCard: React.FC<RecipesCardProps> = ({ item }) => {
    const navigation = useNavigation();
    return (
        <TouchableWithoutFeedback
        //   onPress={() => navigation.navigate("Restaurant", { ...item })}

        >
            <View className="w-2/5 h-64 mx-2 mb-4 bg-white rounded-3xl shadow shadow-black justify-center" >
                <View className="px-3 bg-white rounded-3xl" style={{
                    shadowColor: '#000',
                    shadowOffset: { width: 1, height: 1 },
                    shadowOpacity: 0.4,
                    shadowRadius: 3,
                    elevation: 5,
                }}>
                    <View className="flex-row items-center justify-center space-x-1">
                        <MaterialIcons name="timer" size={20} color="#ff9431" />
                        <Text className="text-xs text-[#ff9431] font-semibold">{item.duration} minutes</Text>
                    </View>
                    <View className="flex items-center pt-2">
                        <Image className="h-32 w-32 rounded-lg" source={item.image} />
                    </View>
                    <View className="px-1 pb-2">
                        <Text className="text-xs font-semibold pt-2">{item.name}</Text>
                        <View className="flex-row items-center space-x-1">
                            <Text className="text-gray-700 text-[10px] text-justify">
                                {item.desc.length > 30 ? `${item.desc.substring(0, 30)}...` : item.desc}
                            </Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity className="w-full p-2">
                    <Text className='text-sm font-semibold m-auto'>Details</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback >
    );
}

export default RecipesCard;