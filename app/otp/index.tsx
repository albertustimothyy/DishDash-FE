import {
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    Dimensions,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
// import OTPInputView from "@twotalltotems/react-native-otp-input";
import OTPTextInput from "react-native-otp-textinput";
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Link } from 'expo-router';
import LottieView from "lottie-react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const getData = async () => {
    try {
        const value = await AsyncStorage.getItem('my-key');
        if (value !== null) {
            console.log("value" + value)
        }
    } catch (e) {
        console.log(e)
    }
};
const otp = () => {
    const [code, setCode] = useState("");
    const handleOTPVerification = async () => {
        const value = await AsyncStorage.getItem('my-key');
        fetch('https://reqbin.com/echo/get/json', {
            headers: { Authorization: 'Bearer ${value}' }
        })
        try {
            // Make API request to your backend for OTP verification
            const response = await fetch("http://192.168.1.3:8000/user/verify", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${value}`, // Include the token in the header
                },
                body: JSON.stringify({ otp: code }),
            });

            if (response.ok) {
                const result = await response.json();
                // Handle successful verification, maybe navigate to the next screen
                console.log(result);
            } else {
                // Handle unsuccessful verification
                // console.error("Error with OTP verification");
            }
        } catch (error) {
            // console.error(error);
        }
    };

    return (
        <ScrollView>
            <SafeAreaView className="flex-1">
                <View className="flex justify-center items-center bg-[#fff6eb] rounded-full m-10">
                    <LottieView
                        style={[{ width: '80%', aspectRatio: 1 }]}
                        autoPlay
                        loop
                        source={require('../../assets/otp.json')}
                    />
                </View>
                <View className="flex items-center space-y-4" >
                    <Text className="text-center text-3xl font-bold" >
                        Enter Verification Code
                    </Text>
                    <Text>
                        We are automatically send a SMS to your mobile number
                    </Text>
                    <View className="my-10">
                        <OTPTextInput
                            handleTextChange={(e) => setCode(e)}
                            tintColor={"#ff9432"}
                            offTintColor={"#ff9432"}
                            textInputStyle={{ borderWidth: 2, borderColor: "#f49517", borderRadius: 100, backgroundColor: "#f6f6f6" }}

                        />
                    </View>
                    <Link href="/shopping/" asChild>
                        <TouchableOpacity
                            onPress={handleOTPVerification}
                            className="bg-[#ff9432] rounded-xl h-14 w-4/5 my-16 items-center justify-center"
                        >
                            <Text className='font-semibold text-white text-lg'>Submit</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

export default otp;
