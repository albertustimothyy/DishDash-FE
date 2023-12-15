import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from "react";
import { Link } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value: string) => {
        try {
                await AsyncStorage.setItem('my-key', value);
        } catch (e) {
                // saving error
        }
};

export default function SignUpComponent() {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [firstName, setFirstName] = useState("");
        const [lastName, setLastName] = useState("");
        const [address, setAddress] = useState("");
        const [phone, setPhone] = useState("");

        const handleSignUp = async () => {
                try {
                        const response = await fetch("http://192.168.1.3:8000/user/signup", {
                                method: "POST",
                                headers: {
                                        "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                        email,
                                        password,
                                        phone,
                                }),
                        });
                        if (response.ok) {
                                // Handle successful sign-up
                                const result = await response.json();
                                console.log(result);
                                console.log(result.signature)
                                storeData(result.signature);
                        } else {
                                // Handle sign-up failure
                                const errorData = await response.json();
                                console.error(errorData);
                        }
                } catch (error) {
                        console.error("Error during sign-up:", error);
                }
        };

        return (
                <ScrollView className='w-full'>
                        <View className='flex justify-center items-center w-full p-10 py-16 space-y-6'>

                                <View className="w-full h-[60px] mb-[20px]">
                                        <Text className='font-semibold text-lg'>Email address</Text>
                                        <View className='flex flex-row space-x-6'>
                                                <TextInput
                                                        className="h-12 flex-1 items-center text-lg border-b-2"
                                                        placeholder="Enter Your Email"
                                                        placeholderTextColor="#919191"
                                                        onChangeText={(email) => setEmail(email)}
                                                />
                                        </View>
                                </View>
                                <View className="w-full h-[60px] mb-[20px]">
                                        <Text className='font-semibold text-lg'>Password</Text>
                                        <View className='flex flex-row space-x-6'>
                                                <TextInput
                                                        className="h-12 flex-1 items-center text-lg border-b-2"
                                                        placeholder="Enter Your Password"
                                                        placeholderTextColor="#919191"
                                                        secureTextEntry={true}
                                                        onChangeText={(password) => setPassword(password)}
                                                />
                                        </View>

                                </View>
                                <View className="w-full h-[60px] mb-[20px]">
                                        <Text className='font-semibold text-lg'>Phone Number</Text>
                                        <View className='flex flex-row space-x-6'>
                                                <TextInput
                                                        className="h-12 flex-1 items-center text-lg border-b-2"
                                                        placeholder="Enter Your Phone Number"
                                                        placeholderTextColor="#919191"
                                                        onChangeText={(phoneNumber) => setPhone(phoneNumber)}
                                                />
                                        </View>
                                </View>
                                <View className='flex justify-center items-center w-full pt-3'>
                                        <Link href="/otp/" asChild>
                                                <TouchableOpacity
                                                        onPress={handleSignUp}
                                                        className="bg-[#ff9432] rounded-3xl h-14 w-4/5 mt-10 items-center justify-center"
                                                >
                                                        <Text className='font-semibold text-white text-lg'>Sign Up</Text>
                                                </TouchableOpacity>
                                        </Link>
                                </View>
                                <View className='h-40 w-full'>
                                </View>
                        </View>
                </ScrollView>
        )
}
