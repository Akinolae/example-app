import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { CodeField, Cursor } from "react-native-confirmation-code-field";
import CustomNumericKeypad from "./CustomPinPad";

interface CustomPinProps {
  secure?: boolean;
  onChange: (value: string) => void;
  cellCount?: number;
}

function CustomPin(props: CustomPinProps) {
  const { secure, cellCount, onChange } = props;
  const [state, setState] = useState("");

  const handleChange = useCallback(
    (value: string) => {
      onChange(value);
    },
    [onChange]
  );
  useEffect(() => {
    handleChange(state);
  }, [handleChange, state]);

  return (
    <View>
      <CodeField
        cellCount={cellCount}
        onChangeText={() => {}}
        editable={false}
        value={state}
        rootStyle={styles.input}
        {...props}
        renderCell={({ index, isFocused, symbol }) => {
          const textChild =
            symbol && secure ? (
              "*"
            ) : !!symbol ? (
              symbol
            ) : !!isFocused ? (
              <Cursor />
            ) : null;
          return (
            <View key={index} style={styles.cellView}>
              <Text style={styles.cell}>{textChild}</Text>
            </View>
          );
        }}
      />
      <CustomNumericKeypad onChange={(e) => setState(e)} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 20,
    width: "80%",
    margin: "auto",
    marginBottom: 20,
  },
  cell: {
    width: 48,
    height: 40,
    fontSize: 26,
    fontWeight: 600,
    textAlign: "center",
    color: "black",
  },
  cellView: {
    borderBottomWidth: 1,
    borderColor: "#00000024",
  },
});
export default CustomPin;
