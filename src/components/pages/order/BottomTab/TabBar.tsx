import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'
import { theme } from '../../../../theme'

type TabBarProps = {
    state: any
    descriptors: any
    navigation: any
}

export default function TabBar({ state, descriptors, navigation }: TabBarProps) {
    // console.log('state:', state)
    // console.log('descriptors:', descriptors)
    // console.log('navigation:', navigation)
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


                const badge: number | null = options.tabBarBadge ? options.tabBarBadge : null

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
                        style={{ flex: 1, alignItems: 'center', top: 5, position: 'relative' }}
                    >
                        {iconTab && iconTab({ focused: isFocused, color: isFocused ? theme.colors.redSecondary : theme.colors.white, size: 30 })}

                        {badge &&
                            <BadgeStyled>
                                <Text
                                    style={{
                                        color: theme.colors.white,
                                        fontSize: 12,
                                        fontWeight: 'bold',
                                    }}>
                                    {badge}
                                </Text>
                            </BadgeStyled>
                        }
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

const BadgeStyled = styled.View`
    color: ${theme.colors.white};
    font-size: 12px;
    position: absolute;
    top: -10px;
    right: 40px;
    font-weight: bold;
    background-color: ${theme.colors.redSecondary};
    border-radius: ${theme.borderRadius.circlePx};
    padding: 2px 5px;
`