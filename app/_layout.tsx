import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function _layout() {
  return (
      <Stack>
          <Stack.Screen name="login/index" options={{
              title: 'Login'
          }} />
          <Stack.Screen name="dashboard/index" options={{
              title: 'Dashboard'
          }} />
      </Stack>
  )
}