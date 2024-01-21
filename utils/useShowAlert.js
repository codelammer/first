import { Alert } from "react-native";

const useShowAlert = ({ title = "" , message  , buttonTitle = "Dismiss" }) =>
  Alert.alert(
    title,
    message,
    [
      {
        text: buttonTitle,
        style: 'cancel',
        onPress: () => {}
      },
    ],
    { cancelable: false }
  );


  export default useShowAlert