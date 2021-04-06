import React from 'react'
import { StyleSheet, ActivityIndicator, Text, View } from 'react-native'
import { Image } from 'react-native-elements'
import Carousel from 'react-native-snap-carousel'

export default function CarouselImages({ images, height, width }) {

    const renderItem = ({ item }) => {
        return (
            <Image
                style={{ width, height }}
                PlaceholderContent={<ActivityIndicator color="#ffffff" />}
                source={{ uri: item }}
            />
        )
    }

    return (
        <Carousel
            layout={"default"}
            data={images}
            sliderWidth={width}
            itemWidth={width}
            itemHeight={height}
            renderItem={renderItem}
        />
    )
}

const styles = StyleSheet.create({})
