import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { getCurrentUser } from '../../utils/actions'
import Loading from '../../components/Loading'

export default function Restaurants() {

    const [user, setUser] = useState(null)

    useEffect(() => {
        setUser(getCurrentUser)
    }, [])

    if (user === null) {
        return <Loading isVisible={true} text="Cargando..." />
    }

    return (
        <View style={styles.viewBody}>
            <Text>Restaurants...</Text>
            {
                user && (
                    <Icon
                        type="material-community"
                        name="plus"
                        color="#442484"
                        reverse
                        containerStyle={styles.btnContainer}
                    />
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    viewBody: {
        flex: 1,
    },
    btnContainer: {
        position: "absolute",
        bottom: 10,
        right: 10,
        shadowColor: "#000000",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5
    }
})
