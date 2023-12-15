import { Tabs } from 'expo-router/tabs';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { View, Text } from 'react-native';

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="shopping/index" options={{
        title: 'Shopping',
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View>
            {focused ?
              <View className='flex items-center justify-center'>
                <View className='bg-[#ff9431] w-full h-1 rounded-b-lg' />
                <Ionicons name="ios-cart" size={30} color="#ff9431" />
                <Text className='font-semibold text-[#ff9431]' style={{ fontSize: 10 }}>Shopping</Text>
              </View>
              :
              <View className='flex items-center justify-center'>
                <View className='w-full h-1 rounded-b-lg' />
                <Ionicons name="ios-cart-outline" size={30} color="#ababab" />
                <Text className='font-semibold text-[#ababab]' style={{ fontSize: 10 }}>Shopping</Text>
              </View>
            }
          </View>
        )
      }} />
      <Tabs.Screen name="recipes/index" options={{
        title: 'Recipes',
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View>
            {focused ?
              <View className='flex items-center justify-center'>
                <View className='bg-[#ff9431] w-full h-1 rounded-b-lg' />
                <Ionicons name="newspaper" size={30} color="#ff9431" />
                <Text className='font-semibold text-[#ff9431]' style={{ fontSize: 10 }}>Recipes</Text>
              </View>
              :
              <View className='flex items-center justify-center'>
                <View className='w-full h-1 rounded-b-lg' />
                <Ionicons name="newspaper-outline" size={30} color="#ababab" />
                <Text className='font-semibold text-[#ababab]' style={{ fontSize: 10 }}>Recipes</Text>
              </View>
            }
          </View>
        )
      }} />
      <Tabs.Screen name="profile/index" options={{
        title: 'Profile',
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View>
            {focused ?
              <View className='flex items-center justify-center'>
                <View className='bg-[#ff9431] w-full h-1 rounded-b-lg' />
                <FontAwesome name="user" size={30} color="#ff9431" />
                <Text className='font-semibold text-[#ff9431]' style={{ fontSize: 10 }}>Profile</Text>
              </View>
              :
              <View className='flex items-center justify-center'>
                <View className='w-full h-1 rounded-b-lg' />
                <FontAwesome name="user-o" size={30} color="#ababab" />
                <Text className='font-semibold text-[#ababab]' style={{ fontSize: 10 }}>Profile</Text>
              </View>
            }
          </View>
        )
      }} />
      <Tabs.Screen name="recipes/[id]/index" options={{
        tabBarShowLabel: false,
        headerShown: false,
        href: null,
      }} />
      <Tabs.Screen name="shopping/[id]/index" options={{
        tabBarShowLabel: false,
        headerShown: false,
        href: null,
      }} />
    </Tabs>

  );
}
