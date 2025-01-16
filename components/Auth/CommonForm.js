import { View, StyleSheet, Text, Pressable } from "react-native";
import Input from "./Input";
import Button from "../ui/Button";
import { Colors } from "../../constants/Colors";
import { useState } from "react";

function Authenticationform({ onSubmit, onNewUserClick, screen }) {
  const [inputValues, setInputValues] = useState({
    email: { value: "", isValid: true },
    password: { value: "", isValid: true },
    confirmedPwd: { value: "", isValid: true },
  });

  function inputChangedHandler(inputIdentifier, enterValue) {
    setInputValues((curInputValues) => {
      return {
        ...curInputValues,
        [inputIdentifier]: { value: enterValue, isValid: true },
      };
    });
  }

  const checkScreen = screen === "SignupScreen" ? true : false;

  const formIsValid =
    !inputValues.email.isValid ||
    !inputValues.password.isValid ||
    !inputValues.confirmedPwd.isValid;

  function onPressHandler() {
    const userData = {
      email: inputValues.email.value,
      password: inputValues.password.value,
      confirmPwd: inputValues.confirmedPwd.value,
    };

    const emailIsValid = userData.email.trim().length > 0;
    const passwordIsValid = userData.password.trim().length > 0;
    const confirmIsValid =
      screen === "SignupScreen"
        ? true
        : false && userData.confirmPwd.trim().length > 0;

    if (!emailIsValid && !passwordIsValid) {
      console.log("value of confirmIsValid" + confirmIsValid);
      setInputValues((curInputValues) => {
        if (!confirmIsValid) {
          return {
            email: { value: curInputValues.email.value, isValid: emailIsValid },
            password: {
              value: curInputValues.password.value,
              isValid: passwordIsValid,
            },
            confirmedPwd: {
              value: curInputValues.confirmedPwd.value,
              isValid: confirmIsValid,
            },
          };
        } else {
          return {
            email: { value: curInputValues.email.value, isValid: emailIsValid },
            password: {
              value: curInputValues.password.value,
              isValid: passwordIsValid,
            },
          };
        }
      });
      return;
    }
    onSubmit(userData);
  }

  return (
    <View style={styles.container}>
      <Input
        label="Email Address"
        invalid={!inputValues.email.isValid}
        textInputConfig={{
          onChangeText: inputChangedHandler.bind(this, "email"),
          value: inputValues.email.value,
        }}
      />
      <Input
        label="Password"
        invalid={!inputValues.password.isValid}
        textInputConfig={{
          onChangeText: inputChangedHandler.bind(this, "password"),
          value: inputValues.password.value,
        }}
      />
      {checkScreen && (
        <Input
          label="Confirm Password"
          invalid={!inputValues.confirmedPwd.isValid}
          textInputConfig={{
            onChangeText: inputChangedHandler.bind(this, "confirmedPwd"),
            value: inputValues.confirmedPwd.value,
          }}
        />
      )}
      {formIsValid && (
        <Text style={styles.errorText}>
          Invalid input values - please check your entered data!
        </Text>
      )}
      <Button
        style={styles.button}
        onPress={onPressHandler}
        screen={checkScreen}
      />
      <Pressable onPress={onNewUserClick}>
        <Text style={styles.newUserTxt}>
          {checkScreen ? "Log in instead" : "Create a new User"}
        </Text>
      </Pressable>
    </View>
  );
}

export default Authenticationform;

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
  errorText: {
    color: Colors.error500,
    alignItems: "center",
    marginTop: 4,
    marginBottom: 12,
    marginStart: 8,
  },
});
