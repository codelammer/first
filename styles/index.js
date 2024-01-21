import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/theme";

const rootStyle = StyleSheet.create({
    
    safeArea: {
        flex: 1,
        backgroundColor: COLORS.lightWhite
    },
    loginButton : {
        backgroundColor: COLORS.tertiary,
        paddingVertical: (SIZES.medium / 2),
        paddingHorizontal: (SIZES.medium * 1.5),
        borderRadius: '50%',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    pX: (number = 1) => (
        { 
            paddingHorizontal: (SIZES.medium * number) 
        }
    ),
    pY: (number = 1) => (
        { 
            paddingVertical: (SIZES.medium * number) 
        }
    ),
    mX: (number = 1) => (
        { 
            marginHorizontal: (SIZES.medium * number) 
        }
    ),
    mY: (number = 1) => (
        { 
            marginVertical: (SIZES.medium * number) 
        }
    )
})

export default rootStyle