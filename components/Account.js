import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import rootStyle from '../styles'
import ApiContext from '../utils/ApiContext'
import { useRouter } from 'expo-router'

const Account = () => {
  const { logout } = useContext(ApiContext)

  const _logout = async () => {
    const data = logout()

    //if successful redirect
    // useRouter().push('/')
  }

  return (
    <View style={[rootStyle.center, { flex: 1}]}>
      <TouchableOpacity style={rootStyle.loginButton} onPress={ _logout }>
        <Text style={rootStyle.textWhite}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Account