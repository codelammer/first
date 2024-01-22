import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import ApiContext from "../utils/ApiContext";
import useShowAlert from "../utils/useShowAlert";
import rootStyle from "../styles";
import ServiceItem from "./ServiceItem";

const Subscriptions = () => {
    const { loading, getCustomerSubscriptions } = useContext(ApiContext);
    const [data, setData] = useState([]);

    //fetch user subscriptions on load
    useEffect(() => {
        (async () => {
            const data = await getCustomerSubscriptions();

            if (data?.error) {
                useShowAlert({
                    message: "An unexpected error occured. try again",
                });
                return;
            }

            setServices(data);
        })();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <View>
                <Text style={[rootStyle.headingTitle, styles.headingTitle]}>
                    My Subscriptions
                </Text>
            </View>

            <ScrollView>
                {false ? [1, 2, 3, 4, 5, 6, 7, 8].map((it, i) => (
                    <ServiceItem subsView={true} key={i} />
                )) : <Text style={rootStyle.noData}>No subscriptions were found</Text>}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    headingTitle: {
        paddingBottom: 30,
    },
});

export default Subscriptions;
