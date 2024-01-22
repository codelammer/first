import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, SIZES, icons } from '../constants'
import { router } from 'expo-router'

const ServiceItem = () => {
    const title = "Safe heaven service"
    const description = "This is some brief description about this lorem ipsum dolor samet."
    const price = 500
    const currencySymbol = "$"

    return (
        <View style={styles.container}>
            <View style={ styles.top }>
                <View style={styles.imageWrapper}>
                    <Image
                        style={styles.image}
                        resizeMode='contain'
                        source={icons.account}
                    />
                </View>
                <Text style={styles.title} numberOfLines={1}>{title}</Text>
            </View>
            <Text style={styles.description} numberOfLines={2}>{description}</Text>
            <View style={ styles.bottom }>
                <Text style={styles.price}>{currencySymbol}{price}</Text>
                <TouchableOpacity style={styles.btnWrapper} onPress={() => { router.push(`/services/1`) }}>
                    <Text style={styles.btn}>View</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.lightSecondary,
        padding: (SIZES.small * 2),
        borderRadius: 20,
        marginVertical: 20
    },
    imageWrapper: {      
        borderRadius: 10,
        padding: 2,
        backgroundColor: COLORS.lightWhite
    },
    image: {
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.lightSecondary,
        width: (SIZES.large * 3),
        height: '100%',
    },
    top : {
        flexDirection: 'row',
        alignItems: 'center',
        height: (SIZES.large * 2)
    },
    title: {
        fontSize: (SIZES.large * 1.2),
        flex: 1,
        color: COLORS.secondary,
        fontWeight: '700',
        marginLeft: SIZES.small
    },
    description: {
        color: COLORS.gray,
        fontSize: SIZES.medium,
        marginVertical: SIZES.medium
    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    price: {
        fontSize: (SIZES.large * 2),
        fontWeight: '800',
        color: COLORS.secondary
    },
    btn: {
        color: COLORS.tertiary,
        
    },
    btnWrapper: {
        paddingHorizontal: SIZES.large,
        paddingVertical: (SIZES.small * 0.5),
        borderRadius: '50%',
        borderWidth: 1,
        borderColor: COLORS.tertiary
    },
    iconsWrapper: {
        marginHorizontal: (SIZES.medium *2)
    }
})

export default ServiceItem