import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from "react";
import { Link } from 'expo-router';
// nama depan nama belakang alamat no telp
export default function SignUpComponent() {
 const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
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
       <Text className='font-semibold text-lg'>Name</Text>
             <View className='flex flex-row space-x-6'>
                 <TextInput
         className="h-12 flex-1 items-center text-lg border-b-2"
         placeholder="First Name"
         placeholderTextColor="#919191"
         onChangeText={(firstName) => setFirstName(firstName)}
                 /> 
                 <TextInput
         className="h-12 flex-1 items-center text-lg border-b-2"
         placeholder="Last Name"
         placeholderTextColor="#919191"
         onChangeText={(lastName) => setLastName(lastName)}
       /> 
       </View>
         </View> 
          <View className="w-full h-[60px] mb-[20px]">
       <Text className='font-semibold text-lg'>Address</Text>
       <View className='flex flex-row space-x-6'>
                 <TextInput
         className="h-12 flex-1 items-center text-lg border-b-2"
         placeholder="Enter Your Home Address"
         placeholderTextColor="#919191"
         onChangeText={(address) => setAddress(address)}
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
         onChangeText={(phoneNumber) =>  setPhoneNumber(phoneNumber)}
                 /> 
                 </View>
     </View> 
     <View className='flex justify-center items-center w-full pt-3'>
       <Link href="/shopping/" asChild>
         <TouchableOpacity className="bg-[#ff9432] rounded-3xl h-14 w-4/5 mt-10 items-center justify-center">
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
