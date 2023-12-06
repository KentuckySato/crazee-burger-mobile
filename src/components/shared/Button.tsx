// import { useLayout } from '@react-native-community/hooks'
import React, { useEffect, useRef, useState } from 'react'
import { Easing, GestureResponderEvent, Pressable, StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle, Animated } from 'react-native'
import Style, { Shadow } from '~/src/Style'
import { Icon, IconProps, isIconProps } from './Icon'

export interface ButtonProps {
    preset?: 'primary' | 'secondary'
    type?: 'solid' | 'clear' | 'outline'
    size?: number | 'big' | 'normal' | 'small' | 'auto'
    onPress?: ((event: GestureResponderEvent) => void)
    onPressIn?: ((event: GestureResponderEvent) => void)
    onPressOut?: ((event: GestureResponderEvent) => void)
    disabled?: boolean
    hitSlop?: number
    theme?: string
    activeScale?: number
    frontColor?: string
    backgroundColor?: string
    containerStyle?: StyleProp<ViewStyle>
    contentContainerStyle?: StyleProp<ViewStyle>
    titleStyle?: StyleProp<TextStyle>
    title?: string
    icon?: React.Component | React.FunctionComponent | IconProps
    shadow?: number | boolean
    children?: React.ReactNode
}

export const Button = ({
    preset,
    type,
    size = 'normal',
    onPress,
    onPressIn,
    onPressOut,
    disabled = false,
    hitSlop = 10,
    activeScale = 0.9,
    theme,
    frontColor,
    backgroundColor,
    containerStyle,
    contentContainerStyle,
    titleStyle,
    title,
    icon,
    shadow = false,
    children,
}: ButtonProps) => {

    if (theme) {
        if (!preset && !type && (!frontColor || !backgroundColor))
            preset = 'primary'

        if (preset === 'primary')
            type = 'solid'
        else if (preset === 'secondary' && theme === 'light')
            type = 'outline'

        if (!frontColor)
            frontColor = Style.getThemeValue('color_button_front_' + preset, theme)

        if (!backgroundColor)
            backgroundColor = Style.getThemeValue('color_button_background_' + preset, theme)
    }

    const animScale = useRef(new Animated.Value(1))
    const setAnimScale = (pressed) => {
        Animated.timing(animScale.current, {
            toValue: pressed ? activeScale : 1,
            duration: Style.anim_duration / 3,
            easing: pressed ? Easing.in(Easing.ease) : Easing.out(Easing.ease),
            useNativeDriver: true
        }).start()
    }

    const { onLayout, ...layout } = useLayout()

    return (
        <View
            style={[
                containerStyle,
                disabled && { opacity: 0.2 }
            ]}
        >
            <Pressable
                onPress={onPress}
                hitSlop={hitSlop}
                disabled={disabled}
                onPressIn={(event) => {
                    setAnimScale(true)
                    onPressIn?.(event)
                }}
                onPressOut={(event) => {
                    setAnimScale(false)
                    onPressOut?.(event)
                }}
            >
                <Animated.View
                    style={[
                        {
                            transform: [
                                { scale: animScale.current }
                            ]
                        }
                    ]}
                >
                    {shadow !== false && (
                        <Shadow
                            theme={theme}
                            elevation={shadow === true ? 10 : shadow}
                            width={layout.width}
                            height={layout.height}
                            radius={layout.height / 2}
                            style={styles.shadow}
                        />
                    )}

                    <View
                        onLayout={onLayout}
                        style={[
                            styles.contentContainer,
                            dynamicStyles.contentContainer({ type, backgroundColor, frontColor }),
                            dynamicStyles.contentContainerSize({ size, icon, type }),
                            contentContainerStyle,
                        ]}
                    >

                        {isIconProps(icon) ? (
                            <Icon
                                size={dynamicStyles.iconSize({ size })}
                                color={frontColor}
                                {...icon}
                            />
                        ) : icon}

                        {title ?
                            <Text
                                numberOfLines={1}
                                adjustsFontSizeToFit
                                style={[
                                    styles.title,
                                    dynamicStyles.title({ frontColor, size }),
                                    dynamicStyles.titleSize({ size, icon }),
                                    titleStyle
                                ]}
                            >
                                {title}
                            </Text>
                            : null}

                        {children}

                    </View>

                </Animated.View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
    },
    shadow: {
        position: 'absolute'
    },
})

const dynamicStyles = {
    contentContainer: ({ type, backgroundColor, frontColor }) => ({
        ...(type !== 'clear' ? {
            backgroundColor: backgroundColor,
        } : {}),
        ...(type === 'outline' ? {
            borderWidth: StyleSheet.hairlineWidth,
            borderColor: frontColor,
        } : {}),
    }),
    title: ({ frontColor, size }) => ({
        color: frontColor,
        ...(
            size === 'small' ? Style.getFontFamily('main', 'bold')
                : Style.getFontFamily('title', 'regular')
        ),
    }),
    contentContainerSize: ({ size, icon, type }) => (
        size === 'auto' ? null :
            size === 'big' ? {
                height: 70,
                borderRadius: 35,
                paddingHorizontal: 25,
                paddingRight: 25 + (icon ? 12 : 0),
                ...(type !== 'clear' ? { minWidth: 300 } : null),
            } :
                size === 'normal' ? {
                    height: 50,
                    borderRadius: 25,
                    paddingHorizontal: 20,
                    paddingRight: 20 + (icon ? 12 : 0),
                    ...(type !== 'clear' ? { minWidth: 250 } : null),
                } :
                    size === 'small' ? {
                        height: 30,
                        borderRadius: 15,
                        paddingHorizontal: 15,
                        paddingRight: 15 + (icon ? 7 : 0),
                        ...(type !== 'clear' ? { minWidth: 50 } : null),
                    } : {}
    ),
    titleSize: ({ size, icon }) => (
        (size === 'big' ? {
            fontSize: 30,
            marginLeft: icon ? 10 : 0,
        } :
            size === 'normal' ? {
                fontSize: 20,
                marginLeft: icon ? 7 : 0,
            } :
                size === 'small' ? {
                    fontSize: 12,
                    marginLeft: icon ? 4 : 0,
                } : {})
    ),
    iconSize: ({ size }) => (
        size === 'big' ? 40
            : size === 'normal' ? 30
                : size === 'small' ? 20
                    : 20
    ),
}
