import { useState} from 'react'
import useShowAlert from '../utils/useShowAlert'
import { useRouter } from 'expo-router'
import { Stack } from 'expo-router'
import axios from 'axios'
import ApiContext from '../utils/ApiContext'
import * as SecureStore from 'expo-secure-store';
import NavbarContextProvider from '../utils/NavbarContextProvider'

const Layout = () => {

  const API_URL = "https://mawingu.cbaloop.com/cba/api/v1"

  const [authState, setAuthState] = useState({ email: null , authenticated: null })
  const [loading, setLoading] = useState(false)
  
  //login the user
  const login = async (email, password) => {
      setLoading(true)
      console.log("loading is set to true")
      try {
          const result = await axios.post(`${API_URL}/access/login`, { email, password})
  
          setAuthState({
              email: email,
              authenticated: true
          })
  
          console.log('login')
  
          try {
            await SecureStore.setItem('token', result.data)
          } catch (e) {
            return { error: true, errorMessage: "Internal error" }
          }
  
          setLoading(false)
          
          return result
      } catch (error) {
          console.log('error')
          console.log(error)
          setLoading(false)
          return { error: true, errorMessage: error }
      }
  }
  
  //skeleton fetch function with token
  const fetchWithToken = async (url, method, body=null) => {
  
      const token =  await SecureStore.getItem('token')
  
      //redirect to login if no token is available
      if (!token) {
          const router = useRouter()
          useShowAlert({ message: "You're logged out! Please log in again" })
          router.push('/')
          return
      }
  
      setLoading(true)
      switch (method) {
          case 'POST':
              try {
                  const result = await axios.post(`${API_URL}${url}`, body, {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                  })
                  setLoading(false)
                  if (result?.error) {
                    return { error: true, errorMessage: error }
                  }
                  return result
              } catch (error) {
                  setLoading(false)
                  return { error: true, errorMessage: error }
              }    
          case 'GET':
              try {
                  const result = await axios.get(`${API_URL}${url}`, {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                  })

                  console.log('result')
                  console.log(result)
                  if (result?.error) {
                    return { error: true, errorMessage: error }
                  }                  
                  setLoading(false)
                  return result
              } catch (error) {
                  setLoading(false)
                  return { error: true, errorMessage: error }
              }    
      
          default:
              break;
      }
  
  }
  
  //***[utilize fetchWithTokenfunction]***
  //get services
  const getServices = async () => {
      const data = await fetchWithToken('/service/getServices', 'GET')
      return data
  }
  //get customer subscriptions
  const getCustomerSubscriptions = async (subsciberEmail) => {
      const data = await fetchWithToken(`/subscription/subscriptions/${subsciberEmail}`, 'GET')
      return data
  }
  
  //subscribe to service 
  const subscribeToService = async (serviceName, amountPaid) => {
      const body = {
          subscriberEmail: authState.email,
          serviceName: serviceName,
          amountPaid: amountPaid
      }
      const data = await fetchWithToken(`/subscription/subscribe`, 'POST', body)
      return data
  }
  
  //context values to be consumed by any child / grand-child component
  const apiUtil = {
      login: login,
      getServices: getServices,
      getCustomerSubscriptions: getCustomerSubscriptions,
      subscribeToService: subscribeToService,
      authState: authState,
      loading: loading
  }


  return (
    <ApiContext.Provider value={apiUtil}>
        <NavbarContextProvider>
            <Stack />
        </NavbarContextProvider>
    </ApiContext.Provider>
  )
}

export default Layout