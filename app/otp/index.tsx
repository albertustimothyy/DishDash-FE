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


const { width, height } = Dimensions.get("window");

const otp = () => {
    const { emailAddress } = useLocalSearchParams();

    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const [code, setCode] = useState("");


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
                    <Text >
                        {emailAddress || "raditya.ihsan@ui.ac.id"}
                    </Text>
                    <View className="my-10">
                        <OTPTextInput
                            inputCount={4}
                            handleTextChange={(e) => setCode(e)}
                            tintColor={"#ff9432"}
                            offTintColor={"#ff9432"}
                            textInputStyle={{ borderWidth: 2, borderColor: "#f49517", borderRadius: 100, backgroundColor: "#f6f6f6" }}

                        />
                    </View>
                    <Link href="/shopping/" asChild>
                        <TouchableOpacity className="bg-[#ff9432] rounded-xl h-14 w-4/5 my-16 items-center justify-center">
                            <Text className='font-semibold text-white text-lg'>Submit</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

export default otp;
