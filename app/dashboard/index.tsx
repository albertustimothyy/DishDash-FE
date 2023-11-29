import { TextInput, View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import Categories from "../../components/categories";
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';


export default function Dashboard() {
   const [search, setSearch] = useState("");

   return (
       <SafeAreaView className="bg-white">
           <View>     
               <View className="flex-row items-center space-x-2 px-6 pt-6">
                   <Ionicons name="ios-location-sharp" size={24} color="#ff9432" />
                   <Text className="font-semibold text-lg">FT UI, Depok</Text>
                   <MaterialIcons name="arrow-drop-down" size={24} color="#ff9432" />
               </View>
               <View className="flex-row items-center pt-2 px-4">
                   <Text className="font-bold text-2xl w-2/3">
                       Order Your Food Fast and Free
                   </Text>
                   <Image
                       style={{ width: 100, height: 100 }}
                       source={require("../../assets/delivery-boy.png")}
                       className="rounded-3xl bg-white"
                   />
               </View>
               <View className="flex-row items-center space-x-2 p-4">
                  <View className="flex-row flex-1 items-center p-3 rounded-xl border border-black">
                    <Feather name="search" size={24} color="black" />
                    <TextInput
                        placeholder="Search"
                        value={search}
                        onChangeText={(text) => setSearch(text)}
                        className="ml-2 flex-1"
                    />
                   </View>
                   
             </View>
           </View>
           <View>
               <Text className="font-semibold text-lg px-4">Recipes</Text>
               <ScrollView
               showsHorizontalScrollIndicator={false}
               contentContainerStyle={{
                  paddingBottom: 20,
               }}
           >
               <Categories />
           </ScrollView>
           </View>
           
       </SafeAreaView>
   );
}
