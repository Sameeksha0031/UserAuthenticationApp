import { TextInput, View, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

function Input({ label, invalid, textInputConfig }) {
  const inputStyles = [styles.inputText];

  if (invalid) {
    inputStyles.push(styles.invalidInput);
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.heading, invalid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  container: {
    maxWidth: "100%",
    padding: 18,
  },
  heading: {
    fontSize: 12,
    color: "white",
    marginBottom: 5,
  },
  inputText: {
    backgroundColor: Colors.primary100,
    borderRadius: 6,
    fontSize: 18,
    color: Colors.primary800,
  },
  invalidLabel: {
    color: Colors.error500,
  },
  invalidInput: {
    backgroundColor: Colors.error100,
  },
});
