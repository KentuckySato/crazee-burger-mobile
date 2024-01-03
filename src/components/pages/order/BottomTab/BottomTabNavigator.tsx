import React, { useCallback, useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Menu from '../Main/MainRightSide/Menu/Menu'
import TabBar from './TabBar'
import Profile from '../Profile/Profile'
import Basket from '../Main/Basket/Basket'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { OrderContext } from '../../../../context/OrderContext'

type tabBarProps = {
    state: any
    descriptors: any
    navigation: any
}

export default function BottomTabNavigator() {

    const { basket } = useContext(OrderContext)

    const BottomTabNavigator = createBottomTabNavigator()

    const bottomTabOptions = { headerShown: false }

    const tabBar = useCallback(({ state, descriptors, navigation }: tabBarProps) => <TabBar state={state} descriptors={descriptors} navigation={navigation} />, [])

    const materialIcon = useCallback((name: string, color: string, size: number) => <MaterialCommunityIcons name={name} color={color} size={size} />, [])

    return (
        <BottomTabNavigator.Navigator
            tabBar={tabBar}
            screenOptions={bottomTabOptions}

        >
            <BottomTabNavigator.Screen name="Menu" component={Menu} options={{
                tabBarIcon: ({ focused, color, size }) => materialIcon('food', color, size)
            }} />
            <BottomTabNavigator.Screen name="Basket" component={Basket} options={{
                tabBarBadge: basket.length > 0 ? basket.length : "",
                tabBarIcon: ({ focused, color, size }) => materialIcon('basket', color, size)
            }} />
            <BottomTabNavigator.Screen name="Profile" component={Profile} options={{
                tabBarIcon: ({ focused, color, size }) => materialIcon('account', color, size)
            }} />
        </BottomTabNavigator.Navigator>
    )
}