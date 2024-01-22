import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import { COLORS, SIZES, icons } from "../constants";
import rootStyle from "../styles";
import NavbarContext from "../utils/NavbarContext";

const Navbar = () => {
    // const tabs = ["home", "subscriptions", "account"]
    const {activeNav, updateNav} = useContext(NavbarContext)

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                onPress={() => {updateNav("home")}}
                style={[styles.iconWrapper, rootStyle.center]}>
                <Image
                    source={icons.home}
                    resizeMode="contain"
                    style={styles.icon(activeNav, "home")}
                />
                <Text style={styles.navText(activeNav, "home")}>Services </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={()=>{updateNav("subscriptions")}}
                style={[styles.iconWrapper, rootStyle.center]}>
                <Image
                    source={icons.heartOutline}
                    resizeMode="contain"
                    style={styles.icon(activeNav, "subscriptions")}
                />
                <Text style={styles.navText(activeNav, "subscriptions")}>Subscriptions</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={()=>{updateNav("account")}}
                style={[styles.iconWrapper, rootStyle.center]}>
                <Image
                    source={icons.account}
                    resizeMode="contain"
                    style={styles.icon(activeNav, "account")}
                />
                <Text style={styles.navText(activeNav, "account")}>Account</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    icon: (sactiveNav, tab) => (
        {
            height: "50%",
            opacity: 0.4,
            opacity: sactiveNav === tab ? 1 : 0.4,            
            marginVertical: 2,            
        }
    ),
    active: {
       color: COLORS.tertiary 
    },
    navText: (sactiveNav, tab) => (
        {
            fontSize: (SIZES.small * 1.1),
            textAlign: "center",
            color: sactiveNav === tab ? COLORS.tertiary : COLORS.gray
        }
    ),
    iconWrapper: {
        paddingHorizontal: 30
    }
});
export default Navbar;
