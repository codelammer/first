import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { Stack, useRouter } from 'expo-router'
import { COLORS, SIZES } from '../constants'
import rootStyle from '../styles'

const index = () => {
    const router = useRouter()

    return (
        <SafeAreaView style={rootStyle.safeArea}>
            <Stack.Screen options={{
                headerShown: false
            }} />
            <View style={styles.container}>
                <View style={styles.jumbotron}>
                    <Text style={styles.heading}>First</Text>
                    <Text style={styles.description}>A FinTech company that offers a subscription services</Text>
                </View>

                <View style={rootStyle.mY(2)}>
                    <TouchableOpacity style={[rootStyle.loginButton, rootStyle.center ]} onPress={ () => router.push('/login')}>
                        <Text style={{ color: COLORS.lightWhite, fontSize: SIZES.medium }}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: (SIZES.medium * 2),
        justifyContent: 'center',
        alignItems: 'start'   
    },
    jumbotron: {
        margin: 0,
        width: '100%'
    },
    heading : {
        fontSize: (SIZES.large * 4),
        fontWeight: '800',
        color: COLORS.tertiary,        
    },
    description: {
        fontSize: SIZES.medium
    }
})
export default index