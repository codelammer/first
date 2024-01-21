import ApiContext from '../utils/ApiContext'
import React, { useContext, useEffect, useState } from 'react'
import rootStyle from '../styles'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Keyboard } from 'react-native'
import { COLORS, SIZES } from '../constants'
import { Stack, useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import useShowAlert from '../utils/useShowAlert'

const login = () => {
  const router = useRouter()
  const { loading, login } = useContext(ApiContext)
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")  

  const _login = async () => {
    Keyboard.dismiss()
    if (email==="" || password === "") {
      useShowAlert({ message: "Please fill in all the fields" })  
      return  
    }

    const data = await login(email, password)

    if (data.error) {
      useShowAlert({ message: "An error occured. Please try again" })
      return
    }

    router.push('/home')
  }

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
          <TextInput style={styles.searchInput} placeholder='Username' onChangeText={(text) => {setEmail(text)}} />
        </View>
        <View style={[styles.searchWrapper, rootStyle.center, rootStyle.mY()]}>
          <TextInput style={styles.searchInput} placeholder='Password' onChangeText={(text) => {setPassword(text)}}/>
        </View>

        <View style={[rootStyle.mY(), { width :'100%'}]}>
          <TouchableOpacity style={[rootStyle.loginButton, rootStyle.center, rootStyle.pY() ]} onPress={ _login }>
              <Text style={{ color: COLORS.lightWhite, fontSize: SIZES.medium }}>Login</Text>
          </TouchableOpacity>
        </View>
        
        {
          loading ? (
            <View style={[rootStyle.center, { width: '100%' }]}>
              <ActivityIndicator size="large" colors={COLORS.tertiary}></ActivityIndicator>
            </View>
          ) : null
        }
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