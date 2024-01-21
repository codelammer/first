import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { SIZES } from '../constants'

const index = () => {
    const router = useRouter()

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.heading}>First</Text>
                <Text style={styles.description}>A FinTech company that plans to offer a number of subscription services to its customers.</Text>
            </View>
            <View>
                <TouchableOpacity onPress={ () => router.push('/login')}>
                    <Text></Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1 
    },
    heading : {
        fontSize: (SIZES.large * 4),
        fontWeight: 'bold',
        color: 'green'
    }
})
export default index