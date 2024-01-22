import { Stack } from 'expo-router'
import NavbarContextProvider from '../utils/NavbarContextProvider'
import ApiContextProvider from '../utils/ApiContextProvider'

const Layout = () => {

  return (
    <ApiContextProvider>
        <NavbarContextProvider>
            <Stack />
        </NavbarContextProvider>
    </ApiContextProvider>
  )
}

export default Layout