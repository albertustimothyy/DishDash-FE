import { View, Text, ScrollView, Image, TouchableOpacity, ToastAndroid } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { Link, useLocalSearchParams } from "expo-router";
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { ingredientsData } from '..';
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-gesture-handler";
import CartContainer from "../../../../components/CartContainer";

function getIngredientById(IngredientId: string) {
    const parsedIngredientId = typeof IngredientId === 'string' ? parseInt(IngredientId, 10) : IngredientId;
    return ingredientsData.find(Ingredient => Ingredient.id === parsedIngredientId);
}

const Home = () => {
    const [unit, setUnit] = useState(0);
    const params = useLocalSearchParams();
    const { id } = params;
    const data = getIngredientById(id.toString());
    const showToast = () => {
        ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
    };

    const showToastWithGravity = () => {
        ToastAndroid.showWithGravity(
            'Successfully added to cart',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
        );
    };
    return (
        <SafeAreaView>
            {/* <CartContainer /> */}
            <View className="relative h-full">
                <View className="bg-[#ff9432] pb-11">
                    <TouchableOpacity className='absolute left-2 top-2 p-1 bg-white z-10 rounded-full'>
                        <Link href="/(dashboard)/shopping">
                            <Ionicons name="arrow-back-outline" size={32} color="black" />
                        </Link>
                    </TouchableOpacity>
                    <Image source={data?.image} className="w-full h-56" />
                </View>
                <ScrollView className="relative bg-white rounded-t-3xl" style={{ marginTop: -24 }}>
                    <View className="px-4 pt-4 space-y-4">
                        <View className="flex flex-row justify-between items-center">
                            <Text className="text-2xl font-bold ">{data?.name}</Text>
                            <View className="flex flex-row space-x-1 items-center">
                                <FontAwesome name="star" size={24} color="#f7c400" />
                                <Text className="text-lg">{data?.rating}</Text>
                            </View>
                        </View>
                        <View className="flex flex-row justify-between items-center">
                            <Text className="text-xl text-[#ff9432] font-semibold">
                                {new Intl.NumberFormat("id", {
                                    style: "currency",
                                    currency: "IDR",
                                }).format(data?.price || 0)}
                            </Text>
                            <View className="flex flex-row justify-between items-center h-fit p-0 space-x-3 bg-[#fff1e5] rounded-full">
                                <TouchableOpacity onPress={() => setUnit(unit - 1)}>
                                    <AntDesign name="minuscircle" size={28} color="#ff9432" />
                                </TouchableOpacity>
                                <Text className="text-xl">{unit}</Text>
                                <TouchableOpacity onPress={() => setUnit(unit + 1)}>
                                    <AntDesign name="pluscircle" size={28} color="#ff9432" />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View className="flex flex-row justify-center space-x-8">
                            <View className="border-2 border-[#ff9432] rounded-2xl space-y-2 w-[45%] p-2 px-3">
                                <Text className="text-xs text-[#ff9432]">Category</Text>
                                <Text className="text-base font-semibold">{data?.category}</Text>
                            </View>
                            <View className="border-2 border-[#ff9432] rounded-2xl space-y-2 w-[45%] p-2 px-3">
                                <Text className="text-xs text-[#ff9432]">Food Type</Text>
                                <Text className="text-base font-semibold">{data?.foodType}</Text>
                            </View>
                        </View>
                        <View className="flex-row space-x-2 my-1">
                        </View>
                    </View>
                    <View className="p-4 border-t-2 border-t-gray-100 pb-20">
                        <Text className="text-lg font-bold">Description</Text>
                        <Text className="text-gray-500 mt-2 pb-4">{data?.desc}</Text>
                    </View>
                </ScrollView>
                <View className="bg-white absolute bottom-0 p-3 pb-5 w-full z-10">
                    <Link href="/(dashboard)/shopping" asChild>
                        <TouchableOpacity className="bg-[#ff9432] w-4/5 mx-auto py-3 rounded-2xl" onPress={() => showToastWithGravity()}>
                            <Text className="text-white text-center text-xl font-semibold">Add to Cart</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
            </View >
        </SafeAreaView>
    )
}

export default Home