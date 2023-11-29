import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from "react";
import { Link } from 'expo-router';

export default function LoginComponent() {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 return (
   <View className='flex justify-center w-full p-10 space-y-4'>
     <View className="w-full h-[45px] mb-[20px] border-b-2">
       <Text className='font-semibold text-[#919191]'>Email address</Text>
       <TextInput
         className="h-50 flex-1 items-center"
         placeholder="Enter Your Email"
         onChangeText={(email) => setEmail(email)}
       /> 
     </View> 
     <View className="w-full h-[45px] mb-[20px] border-b-2">
       <Text className='font-semibold text-[#919191]'>Password</Text>
       <TextInput
         className="h-50 flex-1 items-center"
         placeholder="Enter Your Password"
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
