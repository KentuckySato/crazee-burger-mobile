import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Menu from '../Main/MainRightSide/Menu/Menu'

export default function BottomTab() {
    const BottomTabNavigator = createBottomTabNavigator()

    return (
        <BottomTabNavigator.Navigator screenOptions={{
            headerShown: false,
        }}>
            <BottomTabNavigator.Screen name="Menu" component={Menu} />
            <BottomTabNavigator.Screen name="Basket" component={() => <View><Text>Basket</Text></View>} />
            <BottomTabNavigator.Screen name="Profile" component={() => <View><Text>Profile</Text></View>} />
        </BottomTabNavigator.Navigator>
    )
}