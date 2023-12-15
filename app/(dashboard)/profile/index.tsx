import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import ProfileComponent from "../../../components/ProfileComponent";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
  return (
    <View className="flex items-center justify-center bg-white">
      <SafeAreaView />
      <View className="top-0 items-center justify-center w-full h-64 bg-white shadow-2xl rounded-3xl shadow-gray-700">
        <Image
          className="content-center w-40 h-40 rounded-full"
          source={require("../../../assets/profile.jpg")}
        />
        <Text className="text-2xl font-bold ">John Doe</Text>
        <View className="flex flex-row items-center justify-center w-4/5 mt-2">
          <Link href="/order/" asChild>
            <TouchableOpacity className="flex flex-row items-center justify-center w-2/5 bg-[#ff9432] rounded-lg py-1">
              <Ionicons name="ios-cart" size={25} color="#FFF" />
              <Text className="font-semibold text-white text-md">My Order</Text>
            </TouchableOpacity>
          </Link>
          {/* <Link href="/otp/" asChild>
            <TouchableOpacity className="flex flex-row items-center justify-center w-2/5 bg-[#ff9432] rounded-lg">
              <Ionicons name="ios-receipt" size={23} color="#FFF" />
              <Text className="font-semibold text-white text-md">
                My Receipt
              </Text>
            </TouchableOpacity>
          </Link> */}
        </View>
      </View>
      <ProfileComponent />
    </View>
  );
}
