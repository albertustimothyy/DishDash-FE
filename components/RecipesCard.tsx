import { View, Text, TouchableWithoutFeedback, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons';
import { router, Link } from 'expo-router';
import { RecipesItem } from "../app/(dashboard)/recipes";

// Prop interface for the RecipesCard component
interface RecipesCardProps {
    item: RecipesItem;
}

const RecipesCard: React.FC<RecipesCardProps> = ({ item }) => {
    const navigation = useNavigation();
    return (
        <View className="relative justify-center w-2/5 h-64 p-0 mx-2 mb-4 overflow-hidden bg-white shadow rounded-3xl shadow-black" >
            <View className="absolute top-0 w-full px-3 pt-2 bg-white rounded-b-3xl" style={{
                shadowColor: '#000',
                shadowOffset: { width: 1, height: 1 },
                shadowOpacity: 0.4,
                shadowRadius: 6,
                elevation: 1,
            }}>
                <View className="flex-row items-center justify-center space-x-1">
                    <MaterialIcons name="timer" size={20} color="#ff9431" />
                    <Text className="text-xs text-[#ff9431] font-semibold">{item.duration} minutes</Text>
                </View>
                <View className="flex items-center pt-2">
                    <Image className="w-32 h-32 rounded-lg" source={item.image} />
                </View>
                <View className="px-1 pb-2">
                    <Text className="pt-2 text-xs font-semibold">{item.name}</Text>
                    <View className="flex-row items-center space-x-1">
                        <Text className="text-gray-700 text-[10px] text-justify">
                            {item.desc.length > 30 ? `${item.desc.substring(0, 30)}...` : item.desc}
                        </Text>
                    </View>
                </View>
            </View>
            <Link href={{ pathname: "(dashboard)/recipes/[id]", params: { id: item.id } }} asChild>
                <TouchableOpacity className="absolute bottom-0 w-full p-2" >
                    <Text className='m-auto text-sm font-semibold'>Details</Text>
                </TouchableOpacity>
            </Link>
        </View>
    );
}

export default RecipesCard;