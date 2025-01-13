import { View, StyleSheet, Text } from "react-native";
import Input from "./Input";
import Button from "../ui/Button";
import { Colors } from "../../constants/Colors";
import { useState } from "react";

function Loginform() {
  const [inputValues, setInputValues] = useState({
    email: { value: "", isValid: true },
    password: { value: "", isValid: true },
  });

  function inputChangedHandler(inputIdentifier, enterValue) {
    setInputValues((curInputValues) => {
      return {
        ...curInputValues,
        [inputIdentifier]: { value: enterValue, isValid: true },
      };
    });
  }

  const formIsValid =
    !inputValues.email.isValid || !inputValues.password.isValid;

  function onPressHandler() {
    console.log("onPress is pressed");
  }

  return (
    <View style={styles.container}>
      <Input label="Email Address" />
      <Input label="Password" />
      <Button style={styles.button} onPress={onPressHandler} />
      <Text style={styles.newUserTxt}>Create a new User</Text>
    </View>
  );
}

export default Loginform;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 3,
    justifyContent: "center",
  },
  newUserTxt: {
    fontSize: 12,
    color: "white",
    padding: 20,
    textAlign: "center",
  },
  button: {
    marginStart: 17,
    marginEnd: 17,
  },
});
