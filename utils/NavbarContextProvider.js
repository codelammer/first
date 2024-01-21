import { View, Text } from 'react-native'
import React, { useState } from 'react'
import NavbarContext from './NavbarContext'

const NavbarContextProvider = ({ children }) => {
    const [activeNav, setActiveNav] = useState("home")

    const updateNav = (nav) => {
        setActiveNav(nav)
    }

    const values = {
        activeNav: activeNav,
        updateNav: updateNav
    }
    
    return (
        <NavbarContext.Provider value={values}>{children}</NavbarContext.Provider>
    )
}

export default NavbarContextProvider