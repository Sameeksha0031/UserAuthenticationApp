import { TextInput, View, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

function Input({ label }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{label}</Text>
      <TextInput style={styles.inputText} />
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
});
