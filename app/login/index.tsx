import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
 Text,
 View,
 Image,
 TextInput,
 TouchableOpacity,
} from "react-native";
import LoginComponent from "../../components/LoginComponent";
import SignUpComponent from "../../components/SignUpComponent";

export default function Login() {
 const [activeTab, setActiveTab] = useState("login");

 const switchToLogin = () => setActiveTab("login");
 const switchToSignup = () => setActiveTab("signup");
 return (
   <View className="flex items-center justify-center bg-[#f2f2f2]">
     <View className="top-0 w-full h-64 items-center justify-center bg-white rounded-b-[30px] shadow-xl shadow-black">
       <Image className="" source={require("../../assets/log2.png")} />
       <View className="absolute bottom-0 flex flex-row space-x-16">
         <TouchableOpacity
           className={`flex items-center w-28 p-1 ${
             activeTab === "login" && "border-b-4 border-[#FFC83A]"}`}
           onPress={switchToLogin}
         >
           <Text className={`text-base font-bold ${
             activeTab === "login" ? "text-black" : "text-[#ababab]"
           }`}>Login</Text>
         </TouchableOpacity>
         <TouchableOpacity
           className={`flex items-center w-28 p-1 ${
             activeTab === "signup" && "border-b-4 border-[#FFC83A]"}`}
           onPress={switchToSignup}
         >
           <Text className={`text-base font-bold ${
             activeTab === "signup" ? "text-black" : "text-[#ababab]"
           }`}>Sign-Up</Text>
         </TouchableOpacity>
       </View>
     </View>

     <StatusBar style="auto" />
     {activeTab === "login" && (
       <LoginComponent />
     )}
     {activeTab === "signup" && (
       <SignUpComponent />
     )}
   </View> 
 );
}
