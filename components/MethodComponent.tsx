import { View, Text } from 'react-native'
import React from 'react'
import LottieView from "lottie-react-native";
import { ScrollView } from 'react-native-gesture-handler';

interface MethodComponentProps {
    name: string;
    method: string[];
}

const MethodComponent: React.FC<MethodComponentProps> = ({ name, method }) => {
    return (
        <ScrollView className='p-5 px-8 gap-4'>
            <Text className='text-2xl text-center font-semibold'>{name}</Text>
            <View className='bg-gray-200 rounded-3xl p-3 px-4 space-y-1'>
                {method.map((methodData, index) => (
                    <Text key={index} className='text-lg'>{index + 1}. {methodData}</Text>
                ))}
            </View>
        </ScrollView>
    )
}

export default MethodComponent