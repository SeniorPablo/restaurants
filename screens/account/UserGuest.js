import React from 'react'
import { ScrollView, StyleSheet, Image, Text } from 'react-native'
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

export default function UserGuest() {
    const navigation = useNavigation()

    return (
        <ScrollView
            centerContent
            style={styles.viewBody}
        >
            <Image source={require("../../assets/restaurant-logo.png")}
                resizeMode="contain"
                style={styles.image}
            />
            <Text style={styles.title}>Consulta tu perfil en Restaurants</Text>
            <Text style={styles.description}>
                ¿Cómo describirías tu mejor restaurante? Busca y visualiza los mejores restaurantes de una forma sencilla, vota cual te ha gustado más y comenta como ha sido tu experiencia.
            </Text>
            <Button
                title="Ver tu perfil"
                buttonStyle={styles.button}
                onPress={() => navigation.navigate("login")}
            ></Button>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    viewBody: {
        marginHorizontal: 30
    },
    image: {
        height: 300,
        width: "100%",
        marginTop: 10
    },
    title: {
        fontWeight: "bold",
        marginVertical: 10,
        textAlign: "center",
        fontSize: 19
    },
    description: {
        textAlign: "justify",
        marginBottom: 20,
        color: "#A65273"
    },
    button: {
        backgroundColor: "#442484"
    }
})
