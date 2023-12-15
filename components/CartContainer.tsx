import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { FontAwesome } from '@expo/vector-icons';


const CartContainer = () => {
    return (
        <View className="absolute bottom-20 w-full z-50">
            <TouchableOpacity className="flex-row justify-between bg-[#ef5336] p-1 px-6 rounded-full shadow-lg shadow-gray-600 items-center space-x-1 mx-5 ">
                <View>
                    <Text className='text-white font-bold'>1 item</Text>
                    <Text className='text-white text-xs'>Added to Your Cart</Text>
                </View>
                <View className='flex-row items-center gap-2'>
                    <Text className='text-white font-bold'>
                        {new Intl.NumberFormat("id", {
                            style: "currency",
                            currency: "IDR",
                        }).format(63000)}
                    </Text>
                    <FontAwesome name="shopping-cart" size={24} color="white" />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default CartContainer