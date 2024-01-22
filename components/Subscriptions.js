import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import ApiContext from "../utils/ApiContext";
import useShowAlert from "../utils/useShowAlert";
import rootStyle from "../styles";

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
                  Safe Heaven service
              </Text>
          </View>
      </View>
    );
};

const styles = StyleSheet.create({
  
})

export default Subscriptions;
