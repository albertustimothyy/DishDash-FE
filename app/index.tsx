import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function Page() {
    return (
        <View>
            <Text>
                Home Page
            </Text>
            <Link href="/login/" asChild>
                <Button title="Open Login Page"/>
            </Link>
        </View>
    )
}