import React, { useCallback } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Menu from '../Main/MainRightSide/Menu/Menu'
import TabBar from './TabBar'
import Profile from '../Profile/Profile'
import Basket from '../Main/Basket/Basket'

export default function BottomTab() {
    const BottomTabNavigator = createBottomTabNavigator()

    const bottomTabOptions = { headerShown: false }

    const tabBar = useCallback(({ state, descriptors, navigation }) => {
        console.log('state', state)
        return (
            <TabBar state={state} descriptors={descriptors} navigation={navigation} />
        )
    }, [])

    return (
        <BottomTabNavigator.Navigator
            tabBar={tabBar}
            screenOptions={bottomTabOptions}
        >
            <BottomTabNavigator.Screen name="Menu" component={Menu} />
            <BottomTabNavigator.Screen name="Basket" component={Basket} />
            <BottomTabNavigator.Screen name="Profile" component={Profile} />
        </BottomTabNavigator.Navigator>
    )
}