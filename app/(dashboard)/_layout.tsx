import { Tabs } from 'expo-router/tabs';
export default function AppLayout() {
  return (
    <Tabs>
      
      <Tabs.Screen name="shopping/index" options={{
              title: 'Shopping',
              headerShown: false,
          }} />
          <Tabs.Screen name="restaurant/index" options={{
              title: 'Restaurant',
              headerShown: false,
          }} />
          <Tabs.Screen name="recipes/index" options={{
              title: 'Recipes',
              headerShown: false,
          }} />
      </Tabs>
      
  );
}
