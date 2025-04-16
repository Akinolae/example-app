import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CustomButton = ({
  title,
  onPress,
  backgroundColor = "#007BFF",
  textColor = "#FFFFFF",
  ...props
}: any) => {
  return (
    <TouchableOpacity
      style={{ ...styles.button, backgroundColor, ...props?.style }}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {!!title && (
        <Text style={[styles.text, { color: textColor }]}>{title}</Text>
      )}
      {props.children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CustomButton;
