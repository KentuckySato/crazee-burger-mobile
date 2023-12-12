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
            {state.routes.map((route: {}, index: number) => {
                const { options } = descriptors[route.key]
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name

                const iconTab: Function | null = options.tabBarIcon ? options.tabBarIcon : null

                const isFocused = state.index === index

                const handleOnPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    })

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params)
                    }
                }

                const handleOnLongPress = () => {
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
                        onPress={handleOnPress}
                        onLongPress={handleOnLongPress}
                        style={{ flex: 1, alignItems: 'center', top: 5 }}
                    >
                        {iconTab && iconTab({ focused: isFocused, color: isFocused ? theme.colors.redSecondary : theme.colors.white, size: 30 })}
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
`