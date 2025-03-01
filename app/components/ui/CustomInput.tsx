import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const CustomInput = ({ isPassword = false, label, error, ...props }: any) => {
  const [secureText, setSecureText] = useState(true);
  return (
    <View>
      {isPassword ? (
        <View>
          {!!label ? <Text style={styles.label}>{label}</Text> : null}
          <View style={styles.inputWrapper}>
            <TextInput
              secureTextEntry={secureText}
              style={styles.textInput}
              {...props}
            />
            <TouchableOpacity onPress={() => setSecureText(!secureText)}>
              <Icon
                name={secureText ? "visibility-off" : "visibility"} // Use 'eye-slash' for FontAwesome
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          </View>
          {!!error ? <Text style={styles.error}>{error}</Text> : null}
        </View>
      ) : (
        <View>
          {!!label ? <Text style={styles.label}>{label}</Text> : null}
          <View style={styles.inputWrapper}>
            <TextInput
              style={{ ...styles.textInput, backgroundColor: "#C3C7DA" }}
              {...props}
            />
          </View>
          {!!error ? <Text style={styles.error}>{error}</Text> : null}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    width: "100%",
    flexDirection: "row",
    flex: 1,
    gap: 10,
    alignItems: "center",
    borderWidth: 0,
    height: 54,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    backgroundColor: "#C3C7DA",
  },
  textInput: {
    flex: 1,
    borderWidth: 0
  },
  label: {
    marginBottom: 5,
    fontSize: 14,
    fontWeight: "500"
  },
  error: {
    color: "red",
    fontSize: 10,
    marginTop: 5,
  },
});

export default CustomInput;
