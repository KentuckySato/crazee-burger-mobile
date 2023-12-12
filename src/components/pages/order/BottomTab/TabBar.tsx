import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'
import { theme } from '../../../../theme'

type TabBarProps = {
    state: any
    descriptors: any
    navigation: any
}

export default function TabBar({ state, descriptors, navigation }: TabBarProps) {
    return (
        <TabBarStyled>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key]
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name

                const isFocused = state.index === index

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    })

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params)
                    }
                }

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    })
                }

                return (
                    <TouchableOpacity
                        key={label}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                    >
                        <Text style={{ color: isFocused ? '#673ab7' : theme.colors.white }}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                )
            })}
        </TabBarStyled>
    )
}

const TabBarStyled = styled.View`
    height: 60px;
    padding: 10px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: ${theme.colors.primary};
    /* border: 1px solid red; */
    /* border-top-left-radius: ${theme.borderRadius.extraRound}; */
    /* border-top-right-radius: ${theme.borderRadius.extraRound}; */
`