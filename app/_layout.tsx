import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function _layout() {
    return (
        <Stack>
            <Stack.Screen name="login/index" options={{
                title: 'Login',
                navigationBarHidden: true,
                headerShown: false,
            }} />
            <Stack.Screen name="otp/index" options={{
                title: 'otp',
                navigationBarHidden: true,
                headerShown: false,
            }} />

            <Stack.Screen name="order/index" options={{
                title: 'order',
                navigationBarHidden: true,
                headerShown: false,
            }} />
            <Stack.Screen name="preparingScreen/index" options={{
                title: 'preparingScreen',
                navigationBarHidden: true,
                headerShown: false,
            }} />
            <Stack.Screen name="deliveryScreen/index" options={{
                title: 'deliveryScreen',
                navigationBarHidden: true,
                headerShown: false,
            }} />
            <Stack.Screen name="(dashboard)" options={{
                title: 'dashboard',
                navigationBarHidden: true,
                headerShown: false,
            }} />
        </Stack>
    )
}