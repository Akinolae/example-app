import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Vibration,
  Platform,
} from "react-native";

interface CustomNumericKeypadProps {
  onChange: (value: string) => void;
  initialValue?: string;
  allowBiometrics?: boolean;
  maxLength?: number;
}

export default function CustomNumericKeypad({
  onChange,
  initialValue = "",
  allowBiometrics,
  maxLength = 4,
}: CustomNumericKeypadProps) {
  const [amount, setAmount] = useState(initialValue);

  useEffect(() => {
    onChange(amount.slice(0, maxLength));
  }, [amount, onChange]);

  const handleKeyPress = (key: string) => {
    Vibration.vibrate(10);
    if (key === "del") {
      setAmount((prev) => prev.slice(0, maxLength).slice(0, -1));
    } else {
      setAmount((prev) => (prev === "0" && key !== "." ? key : prev + key));
    }
  };

  const keys = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    [".", "0", "del"],
  ];

  return (
    <View style={styles.container}>
      <View style={styles.keypad}>
        {keys.map((row, i) => (
          <View key={i} style={styles.row}>
            {row.map((key) => (
              <TouchableOpacity
                key={key}
                style={styles.key}
                onPress={() => {
                  handleKeyPress(key);
                }}
              >
                {allowBiometrics && key === "." ? (
                  <View>
                    {Platform.OS === "android" ? (
                      <Ionicons size={20} name="finger-print" />
                    ) : (
                      <Ionicons size={20} name="scan" />
                    )}
                  </View>
                ) : key === "del" ? (
                  <Ionicons size={20} name="chevron-back" />
                ) : (
                  <Text style={styles.keyText}>{key}</Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "auto",
  },
  keypad: {
    width: "90%",
    alignItems: "center",
    marginBottom: 30,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 5,
  },
  key: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  keyText: {
    color: "black",
    fontWeight: 600,
    fontSize: 25,
  },
});
