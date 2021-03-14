import React, { useState, useCallback } from 'react'
import { StyleSheet } from 'react-native'
import { getCurrentUser } from '../../utils/actions'
import UserLogged from './UserLogged'
import UserGuest from './UserGuest'
import Loading from '../../components/Loading'
import { useFocusEffect } from '@react-navigation/native'


export default function Account() {

    const [login, setLogin] = useState(null)

    useFocusEffect(
        useCallback(() => {
            const user = getCurrentUser()
            user ? setLogin(true) : setLogin(false)
        }, [])
    )

    if (login == null) {
        return <Loading isVisible={true} text="Cargando..." />
    }

    return login ? <UserLogged /> : <UserGuest />
}

const styles = StyleSheet.create({})
