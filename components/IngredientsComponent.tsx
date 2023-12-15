import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface IngredientsComponentProps {
    ingredient: string;
    amount: string;
}

const IngredientsComponent: React.FC<IngredientsComponentProps> = ({ ingredient, amount }) => {
    const [done, setDone] = useState(false);
    return (
        <TouchableOpacity className='px-8' onPress={() => setDone(!done)} >
            <View className='flex flex-row justify-between items-center px-2 py-3'>
                <View className='flex '>
                    <Text className='font-semibold text-base'>{ingredient}</Text>
                    <Text className='text-gray-400'>{amount}</Text>
                </View>
                {done == false && <MaterialCommunityIcons name="checkbox-blank-outline" size={24} color="black" />}
                {done == true && <MaterialCommunityIcons name="checkbox-marked-outline" size={24} color="black" />}
            </View>
            <View className='h-[1px] w-full bg-[#ff9432]'></View>
        </TouchableOpacity>
    )
}

export default IngredientsComponent