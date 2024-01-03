import { View } from 'react-native'
import React from 'react'
import { theme } from '../../theme'

export default function Separator() {
    return (
        <View
            style={{
                borderBottomColor: theme.colors.greyBlue,
                borderBottomWidth: 1,
                alignSelf: 'center',
                width: '90%',
                opacity: 0.2,
            }}
        />
    )
}