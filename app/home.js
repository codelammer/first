import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import ApiContext from '../utils/ApiContext'
import { Stack, useRouter } from 'expo-router'
import useShowAlert from '../utils/useShowAlert'
import { SafeAreaView } from 'react-native-safe-area-context'
import rootStyle from '../styles'
import { COLORS, icons } from '../constants'
import Navbar from '../components/Navbar'

const home = () => {
  const { loading, getServices, getCustomerSubscriptions } = useContext(ApiContext)
  const [services, setServices] = useState([])
  const router = useRouter()
  
  //on load get services
  useEffect(() => {
    (async () => {
      const data = await getCustomerSubscriptions()

      if (data?.error) {
        useShowAlert({ message: "An unexpected error occured. try again" })        
        return
      }

      setServices(data)

    })()
    
  }, [])

  
  return (
    <SafeAreaView style={rootStyle.safeArea}>
      <Stack.Screen options={ 
        {
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerBackVisible: true,
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          headerTitle: ""
        }
      } />
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={styles.scrollView}>
        <Text>dsjsjkd</Text>
      </ScrollView>
      <View>
        
      </View>
      <View style={[styles.navbar, rootStyle.center]}>
        <Navbar />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  navbar: {
    height: 60,
    borderTopWidth: 1,
    borderTopColor: COLORS.gray
  },
  scrollView: {
    flex: 1,
    margin: 0
  }
})

export default home