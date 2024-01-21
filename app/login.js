import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import rootStyle from '../styles'
import { COLORS, SIZES, FONT } from '../constants'
import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const login = () => {
  return (
    <SafeAreaView style={rootStyle.safeArea}>
      <Stack.Screen 
        options={
          {
            headerShadowVisible: false,
            headerTitle : "",
            headerBackTitle: "Go back",
            headerStyle: {
              backgroundColor: COLORS.lightWhite
            }
          }
        }
      />
      <View style={styles.container}>
        <View style={[styles.searchWrapper, rootStyle.center, rootStyle.mY()]}>
          <TextInput style={styles.searchInput} placeholder='Username' />
        </View>
        <View style={[styles.searchWrapper, rootStyle.center, rootStyle.mY()]}>
          <TextInput style={styles.searchInput} placeholder='Password' />
        </View>

        <View style={[rootStyle.mY(), { width :'100%'}]}>
          <TouchableOpacity style={[rootStyle.loginButton, rootStyle.center, rootStyle.pY() ]} onPress={ () => {}}>
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
    alignItems: 'start',
  },
  searchWrapper: {
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: (SIZES.small / 2),
    borderWidth: 1,
    borderColor: COLORS.gray2,
    width: '100%'
  },
  searchInput: {
    width: "100%",
    padding: SIZES.medium,
  },
})

export default login