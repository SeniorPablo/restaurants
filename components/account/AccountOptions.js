import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { map } from 'lodash'
import { ListItem, Icon } from 'react-native-elements'
import Modal from '../Modal'
import ChangeDisplayNameForm from './ChangeDisplayNameForm'

export default function AccountOptions({ user, toastRef, setReloadUser }) {
    const [showModal, setShowModal] = useState(false)
    const [renderComponent, setRenderComponent] = useState(null)

    const generateOptions = () => {
        return [
            {
                title: "Cambiar nombres y apellidos",
                iconNameLeft: "account-circle",
                iconColorLeft: "#A7BFD3",
                iconNameRight: "chevron-right",
                iconColorRight: "#A7BFD3",
                onPress: () => selectedComponent("displayName")
            },
            {
                title: "Cambiar correo electrónico",
                iconNameLeft: "at",
                iconColorLeft: "#A7BFD3",
                iconNameRight: "chevron-right",
                iconColorRight: "#A7BFD3",
                onPress: () => selectedComponent("email")
            },
            {
                title: "Cambiar contraseña",
                iconNameLeft: "lock-reset",
                iconColorLeft: "#A7BFD3",
                iconNameRight: "chevron-right",
                iconColorRight: "#A7BFD3",
                onPress: () => selectedComponent("password")
            }
        ]
    }

    const selectedComponent = (key) => {
        switch (key) {
            case "displayName":
                setRenderComponent(
                    <ChangeDisplayNameForm
                        displayName={user.displayName}
                        setShowModal={setShowModal}
                        toastRef={toastRef}
                        setReloadUser={setReloadUser}
                    />
                )
                break;

            case "email":
                setRenderComponent(
                    <Text>Email...</Text>
                )
                break;

            case "password":
                setRenderComponent(
                    <Text>Password...</Text>
                )
                break;
        }

        setShowModal(true)
    }

    const menuOptions = generateOptions()

    return (
        <View>
            {
                map(menuOptions, (menu, index) => (
                    <ListItem
                        key={index}
                        style={styles.menuItem}
                        onPress={menu.onPress}
                    >
                        <Icon
                            type="material-community"
                            name={menu.iconNameLeft}
                            color={menu.iconColorLeft}
                        />
                        <ListItem.Content>
                            <ListItem.Title>
                                {menu.title}
                            </ListItem.Title>
                        </ListItem.Content>
                        <Icon
                            type="material-community"
                            name={menu.iconNameRight}
                            color={menu.iconColorRight}
                        />
                    </ListItem>
                ))
            }
            <Modal isVisible={showModal} setVisible={setShowModal}>
                {renderComponent}
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    menuItem: {
        borderBottomWidth: 1,
        borderBottomColor: "#A7DFD3"
    }
})