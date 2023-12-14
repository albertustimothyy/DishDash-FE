import { View, Text } from 'react-native'
import React from 'react'
import LottieView from "lottie-react-native";
import { ScrollView } from 'react-native-gesture-handler';

const MethodComponent = () => {
    return (
        <ScrollView className='p-5 px-8 gap-4'>
            <Text className='text-2xl text-center font-semibold'>Nama Makanan</Text>
            <View className='bg-gray-200 rounded-3xl p-3 px-4 space-y-1'>
                <Text className='text-lg'>1. apdsapdaspd</Text>
            </View>
        </ScrollView>
    )
}

export default MethodComponent