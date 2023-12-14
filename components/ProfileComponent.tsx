import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";

export default function SignUpComponent() {
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <ScrollView className="w-full">
      <View className="flex items-center justify-center w-full p-10 py-16 space-y-2">
        <View className="w-full h-[60px] mb-[20px]">
          <Text className="text-lg font-semibold">Email address</Text>
          <View className="flex flex-row space-x-6">
            <TextInput
              className="items-center flex-1 h-12 text-lg border-b-2"
              placeholder="albertus@gmail.com"
              placeholderTextColor="#919191"
              onChangeText={(email) => setEmail(email)}
            />
          </View>
        </View>
        <View className="w-full h-[60px] mb-[20px]">
          <Text className="text-lg font-semibold">Address</Text>
          <View className="flex flex-row space-x-6">
            <TextInput
              className="items-center flex-1 h-12 text-lg border-b-2"
              placeholder="Jl. Kebagusan No. 02, Jakarta Selatan"
              placeholderTextColor="#919191"
              onChangeText={(address) => setAddress(address)}
            />
          </View>
        </View>
        <View className="w-full h-[60px] mb-[20px]">
          <Text className="text-lg font-semibold">Phone Number</Text>
          <View className="flex flex-row space-x-6">
            <TextInput
              className="items-center flex-1 h-12 text-lg border-b-2"
              placeholder="085260837281"
              placeholderTextColor="#919191"
              onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
            />
          </View>
        </View>
        <View className="flex items-center justify-center w-full pt-3">
          <Link href="/otp/" asChild>
            <TouchableOpacity className="bg-[#ff9432] rounded-3xl h-14 w-4/5 mt-10 items-center justify-center">
              <Text className="text-lg font-semibold text-white">Log Out</Text>
            </TouchableOpacity>
          </Link>
        </View>
        <View className="w-full h-40"></View>
      </View>
    </ScrollView>
  );
}
