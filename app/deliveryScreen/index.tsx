import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Entypo } from '@expo/vector-icons';
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

export default function index() {
    return (
        <View className="bg-[#ff9432] flex-1">
            <SafeAreaView className="z-50">
                <View className="flex-row justify-between items-center p-5">
                    <TouchableOpacity>
                        <Entypo name="location-pin" size={24} color="black" />
                    </TouchableOpacity>
                    <Text className="font-light text-white text-lg">Order Help</Text>
                </View>

                <View className="bg-white mx-5 my-2 rounded-md p-4 py-6 z-50 shadow-3xl">
                    <View className="flex-row justify-between space-y-3">
                        <View>
                            <Text className="text-md text-gray-400">Estimated Arrival</Text>
                            <Text className="text-3xl font-bold">10-15 Minutes</Text>
                        </View>
                        <Image
                            source={require("../../assets/order.png")}
                            className="h-14 w-14 object-cover"
                        />
                    </View>

                    <Text className="mt-3 text-gray-500 text-sm">
                        Your order is being Prepared
                    </Text>
                </View>
            </SafeAreaView>

            <MapView
                provider={PROVIDER_GOOGLE}
                mapType="mutedStandard"
                className="flex-1 -mt-10 z-0"
                initialRegion={{
                    latitude: -6.34499318862054,
                    longitude: 106.82544957900747,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: -6.337100090057376,
                        longitude: 106.79399359402284,
                    }}
                    identifier="origin"
                    pinColor="#00ccbb"
                />
            </MapView>

            <View className="bg-white flex-row items-center px-5 space-x-4 h-28">
                <Image
                    source={{
                        uri: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                    }}
                    className="h-12 w-12 bg-gray-300 rounded-full "
                />
                <View className="flex-1 ">
                    <Text className="text-lg">Akshansh</Text>
                    <Text className="text-gray-400">Your Rider</Text>
                </View>

                <TouchableOpacity className="text-gray-400 text-lg font-bold">

                </TouchableOpacity>
            </View>
        </View>
    )
}