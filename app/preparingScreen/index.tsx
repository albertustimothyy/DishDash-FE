import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { router } from 'expo-router';
import * as Animatable from "react-native-animatable";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function preparingScreen() {
    useEffect(() => {
        setTimeout(() => {
            router.push("/deliveryScreen/")
        }, 4000);
    });

    return (
        <SafeAreaView className="bg-[#ff9432] flex-1 justify-center items-center">
            <Animatable.Image
                source={require("../../assets/delivery-boy.gif")}
                animation="slideInUp"
                iterationCount={1}
                className="h-96 w-96"
            />

            <Animatable.Text
                animation="slideInUp"
                iterationCount={1}
                className="text-md my-10 px-4 text-white font-bold text-center"
            >
                Assigning Delivery partner to your order
            </Animatable.Text>

        </SafeAreaView>
    );
}