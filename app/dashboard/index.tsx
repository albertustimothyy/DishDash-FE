import { TextInput, View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import Categories from "../../components/categories";
import Foods from "../../components/foods";
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';


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
                <Text className="px-4 text-lg font-semibold">Recipes</Text>
                <ScrollView
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 20,
                }}>
                <Categories />
            </ScrollView>
            </View>
            <View>
                <Text  className="px-4 text-lg font-semibold">Foods</Text>
                <ScrollView
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 20,
                }}>
                <Foods activeCategory={activeCategory} />
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}
