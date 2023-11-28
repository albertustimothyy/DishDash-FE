import { TextInput, View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import Categories from "../../components/categories";



export default function Dashboard() {
    const [search, setSearch] = useState("");

    return (
        <SafeAreaView className="bg-white">
            <View className="flex-row items-center space-x-2 p-4">
                <View className="flex-row flex-1 items-center p-3 rounded-full border border-black">
                    <TextInput
                        placeholder="Search"
                        value={search}
                        onChangeText={(text) => setSearch(text)}
                        className="ml-2 flex-1"
                    />
                    <View className="flex-row items-center space-x-1 border-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
                        <Text className="text-gray-600">Jakarta</Text>
                    </View>
                </View>
            </View>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                paddingBottom: 20,
                }}
            >
            {/* Categories Section */}
            <Categories />

            {/* Featured Section  */}
            
      </ScrollView>
        </SafeAreaView>
    );
}