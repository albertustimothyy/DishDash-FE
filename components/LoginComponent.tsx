import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from "react";
import { Link } from 'expo-router';

export default function LoginComponent() {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 return (
   <View className='flex justify-center items-center w-full p-10 py-16 space-y-4'>
     <View className="w-full h-[60px] mb-[20px] border-b-2">
       <Text className='font-semibold text-lg'>Email address</Text>
       <TextInput
         className="h-50 flex-1 items-center text-lg"
         placeholder="Enter Your Email"
         placeholderTextColor="#919191"
         onChangeText={(email) => setEmail(email)}
       /> 
     </View> 
     <View className="w-full h-[60px] mb-[20px] border-b-2">
       <Text className='font-semiboldtext-lg'>Password</Text>
       <TextInput
         className="h-50 flex-1 items-center text-lg"
         placeholder="Enter Your Password"
         placeholderTextColor="#919191"
         secureTextEntry={true}
         onChangeText={(password) => setPassword(password)}
       /> 
     </View> 
     <View className='flex justify-center items-center w-full pt-3'>
       <Link href="/dashboard/" asChild>
         <TouchableOpacity className="bg-[#ff9432] rounded-3xl h-14 w-4/5 mt-10 items-center justify-center">
           <Text className='font-semibold text-white text-lg'>Login</Text> 
         </TouchableOpacity> 
       </Link>
     </View>
   </View>
 )
}
