import { View, Image, Text, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, useNavigation, useRouter, useLocalSearchParams } from "expo-router";
import { AntDesign } from '@expo/vector-icons';
import IngredientsComponent from '../../components/IngredientsComponent';
import MethodComponent from '../../components/MethodComponent';
import { Ionicons } from '@expo/vector-icons';

const recipePage = () => {
    const [activeTab, setActiveTab] = useState("ingredients");
    const [saved, setSaved] = useState(false);
    const switchToIngredients = () => setActiveTab("ingredients");
    const switchToMethod = () => setActiveTab("method");
    return (
        <SafeAreaView className='h-screen'>
            <View>
                <View className="relative">
                    <Pressable className='absolute right-2 top-2 p-2 bg-white z-10 rounded-xl border' onPress={() => setSaved(!saved)}>
                        {saved && <Ionicons name="ios-bookmark" size={32} color="black" />}
                        {!saved && <Ionicons name="ios-bookmark-outline" size={32} color="black" />}
                    </Pressable>
                    <Pressable className='absolute left-2 top-2 p-1 bg-white z-10 rounded-full'>
                        <Link href="/(dashboard)/recipes">
                            <Ionicons name="arrow-back-outline" size={32} color="black" />
                        </Link>
                    </Pressable>
                    <Image source={require("../../assets/images/dishes/pizza-2.jpg")} className="w-full h-56" />
                </View>
                <View className='absolute top-52 h-14 w-full'>
                    <View className='flex flex-row bg-white w-2/5 h-full mx-auto shadow-lg rounded-xl items-center justify-between'>
                        <View className='flex items-center w-[45%] space-y-1'>
                            <AntDesign name="star" size={24} color="#fcd114" />
                            <Text className='font-semibold text-xs text-gray-400'>4.0</Text>
                        </View>
                        <View className='bg-gray-300 h-full p-[1px]' />
                        <View className='flex items-center w-[45%] space-y-1'>
                            <AntDesign name="clockcircle" size={24} color="#ff9432" />
                            <Text className='font-semibold text-xs text-gray-400'>300</Text>
                        </View>
                    </View>
                </View>
                <View className="w-full justify-center pt-14 flex flex-row space-x-16">
                    <TouchableOpacity
                        className={`flex items-center w-28 p-1 ${activeTab === "ingredients" && "border-b-4 border-[#FFC83A]"}`}
                        onPress={switchToIngredients}
                    >
                        <Text className={`text-base font-bold ${activeTab === "ingredients" ? "text-black" : "text-[#ababab]"
                            }`}>Ingredients</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className={`flex items-center w-28 p-1 ${activeTab === "method" && "border-b-4 border-[#FFC83A]"}`}
                        onPress={switchToMethod}
                    >
                        <Text className={`text-base font-bold ${activeTab === "method" ? "text-black" : "text-[#ababab]"
                            }`}>Method</Text>
                    </TouchableOpacity>
                </View>
                {activeTab === "ingredients" && (
                    <IngredientsComponent />
                )}
                {activeTab === "method" && (
                    <MethodComponent />
                )}
            </View>
        </SafeAreaView >
    )
}

export default recipePage