import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES, icons } from "../../constants";
import rootStyle from "../../styles";

const ServiceDetail = () => {
    const { id } = useLocalSearchParams();

    console.log("route ", id);
    return (
        <SafeAreaView style={rootStyle.safeArea}>
            <Stack.Screen
                options={{
                    headerTitle: "Service Details",
                    headerStyle: {
                        backgroundColor: COLORS.lightWhite,
                    },
                    headerShadowVisible: false,
                    headerBackTitleVisible: false,
                    headerRight: () => (
                        <TouchableOpacity style={styles.shareContainer}>
                            <Image
                                style={styles.share}
                                resizeMode="contain"
                                source={icons.share}
                            />
                        </TouchableOpacity>
                    ),
                }}
            />

            <ScrollView style={styles.mainContainer}>
                <View>
                    <Text style={[rootStyle.headingTitle, styles.headingTitle]}>
                        Safe Heaven service
                    </Text>
                </View>
                <View style={[rootStyle.center, styles.imgWrapper]}>
                    <Image
                        style={styles.img}
                        resizeMode="contain"
                        source={icons.account}
                    />
                </View>
                <View>
                    <View style={styles.descriptionHeader}>
                        <Text style={styles.descriptionTitle}>Description</Text>
                        <TouchableOpacity style={[rootStyle.loginButton, styles.outlineBtn]}>
                            <Text style={styles.price}>$500</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum. Sed ut perspiciatis unde omnis iste
                        natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo
                        inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                        voluptas sit aspernatur aut odit aut fugit, sed quia
                        consequuntur magni dolores eos qui ratione voluptatem
                        sequi nesciunt. Neque porro quisquam est, qui dolorem
                        ipsum quia dolor sit amet, consectetur, adipisci velit,
                        sed quia non numquam eius modi tempora incidunt ut
                        labore et dolore magnam aliquam quaerat voluptatem. Ut
                        enim ad minima veniam, quis nostrum exercitationem ullam
                        corporis suscipit laboriosam, nisi ut aliquid ex ea
                        commodi consequatur? Quis autem vel eum iure
                        reprehenderit qui in ea voluptate velit esse quam nihil
                        molestiae consequatur, vel illum qui dolorem eum fugiat
                        quo voluptas nulla pariatur?
                    </Text>
                </View>

                <View style={styles.subscribeBtn}>
                    <TouchableOpacity style={[rootStyle.loginButton]}>
                        <Text style={[rootStyle.textWhite, styles.subscribeBtnText]}>Subscribe</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingHorizontal: 20,
    },
    shareContainer: {
        height: 20,
        opacity: 0.8,
    },
    descriptionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',    
        marginBottom: 20,
    },
    price: {
        fontWeight: 'bold',
        color: COLORS.tertiary,
        fontSize: 20
    },
    outlineBtn: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: COLORS.lightSecondary,
        paddingVertical: 10
    },
    share: {
        height: "100%",
    },
    imgWrapper: {
        marginVertical: 30,
        borderWidth: 1,
        borderColor: COLORS.lightSecondary,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: 200,
    },
    img: {
        height: "100%",
        width: "100%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    headingTitle: {
        color: COLORS.primary,
    },
    descriptionTitle: {
        fontSize: SIZES.large * 1.3,
        fontWeight: "bold",
        color: COLORS.secondary,
    },
    description: {
        fontSize: SIZES.medium * 1.02,
        color: COLORS.gray,
    },

    subscribeBtn: {
        marginVertical: 30,
        alignItems: 'flex-start',
    },
    subscribeBtnText: {
        fontSize: SIZES.large,
        paddingHorizontal: 20
    }
});

export default ServiceDetail;
