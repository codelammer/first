import { View, Text, Image, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import ApiContext from '../utils/ApiContext'
import { Stack, useRouter } from 'expo-router'
import useShowAlert from '../utils/useShowAlert'
import { SafeAreaView } from 'react-native-safe-area-context'
import rootStyle from '../styles'
import { COLORS, SIZES, icons } from '../constants'
import Navbar from '../components/Navbar'
import ServiceItem from '../components/ServiceItem'
import NavbarContext from '../utils/NavbarContext'
import Subscriptions from '../components/Subscriptions'
import Account from '../components/Account'

const home = () => {
  const {activeNav} = useContext(NavbarContext)
  const { loading, getServices, getCustomerSubscriptions } = useContext(ApiContext)
  const [services, setServices] = useState([])
  const router = useRouter()
  // const dummy = null
  const dummy = [1,2,3,4,5,6,7,8]

  const getCustServices = async () => {
    const data = await getServices()

    if (data?.error) {
      console.log(data)
      useShowAlert({ message: "An unexpected error occured. try again" })        
      return
    }

    setServices(data)
  }
  
  //on load get services
  useEffect(() => {
    getCustServices()   
  }, [])

  
  return (
    <SafeAreaView style={[rootStyle.safeArea, styles.safeArea]}>
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

      { activeNav =="home" &&
        <View style={{ flex: 1 }}>
          <View>
            <View style={ styles.header }>
              <Text style={styles.headingTitle}>Services</Text>
              <TouchableOpacity style={styles.refreshWrapper} onPress={getCustServices}>
                <Image
                  style={styles.refresh}
                  resizeMode='contain'
                  source={icons.refresh}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TextInput style={styles.searchInput} placeholder='Search for a service' />
            </View>
          </View>
          <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={styles.scrollView}>
            {
            dummy ? dummy.map((it, i) => (
              <ServiceItem key={i}/>
            )) : <Text style={rootStyle.noData}>No service were found</Text>
            }
          </ScrollView>
        </View>
      }
      
      { activeNav =="subscriptions" && 
        <View style={{ flex: 1 }}>
          <Subscriptions />
        </View> 
      }
      
      { activeNav =="account" && 
        <View style={{ flex: 1 }}>
          <Account />
        </View> 
      }

      <View style={[styles.navbar, rootStyle.center]}>
        <Navbar />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {    
    paddingHorizontal: SIZES.medium
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  refreshWrapper: {
    height: 30,
    flexDirection: 'row',
  },
  refresh: {
    height: '100%'
  },
  navbar: {
    height: 60,
    borderTopWidth: 1,
    borderTopColor: COLORS.lightSecondary
  },
  scrollView: {
    flex: 1,
  },
  headingTitle: {
    fontSize: (SIZES.large * 2),
    fontWeight: '800'
  },
  searchInput: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    fontSize: SIZES.medium,
    paddingVertical: SIZES.medium,
    paddingHorizontal: SIZES.medium,
    marginTop: 10
  }
})

export default home