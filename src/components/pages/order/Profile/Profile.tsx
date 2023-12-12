import { View, Text } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'

export default function Profile() {
    return (
        <ProfileStyled>
            <Text>Profile</Text>
        </ProfileStyled>
    )
}

const ProfileStyled = styled.View`
    background-color: red;
    height: 100%;
`