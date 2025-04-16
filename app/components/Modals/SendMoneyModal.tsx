import React, { useState } from "react";
import CustomModal from "./Modal";
import { Platform, StyleSheet, Text, View } from "react-native";
import { CustomButton } from "../ui";
import { Ionicons } from "@expo/vector-icons";
import CustomPin from "../ui/CustomPin";

function SendMoneyModal({ isVisible, onBackdropPress, ...props }: any) {
  const [amount, setAmount] = useState("");

  console.log(amount, "amount");
  return (
    <CustomModal
      isVisible={isVisible}
      onBackdropPress={onBackdropPress}
      style={styles.modal}
      {...props}
    >
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <CustomButton backgroundColor="transparent">
            <Ionicons size={20} name="chevron-back" />
          </CustomButton>
          <CustomButton style={styles.closeBtn} onPress={onBackdropPress}>
            <Ionicons size={24} name="close-circle" />
          </CustomButton>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.amountText}>Select Amount</Text>
          <Text style={{ color: "#5A606C", fontSize: 12 }}>
            Input amount you want to send
          </Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            marginTop: 40,
          }}
        >
          {/* <Text style={{ textAlign: "center", fontSize: 28, fontWeight: 500 }}>
            {`₦${formatMoney({ number: !!amount ? amount : 0 })}`}
          </Text> */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
              maxWidth: 200,
              margin: "auto",
            }}
          >
            <Text
              style={{
                backgroundColor: "#F7F8FA",
                padding: 10,
                borderRadius: 50,
                fontSize: 10,
                paddingLeft: 25,
                paddingRight: 25,
                fontWeight: 500,
              }}
            >
              Available balance: $40,000
            </Text>
          </View>
          <CustomPin secure={true} onChange={(e) => setAmount(e)} />
          <CustomButton
            title="Continue"
            backgroundColor="#6401ee"
            textColor="white"
            style={styles.actionBtn}
          />
        </View>
      </View>
    </CustomModal>
  );
}

const styles = StyleSheet.create({
  closeBtn: {
    height: 24,
    width: 24,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "100%",
    backgroundColor: "#ada6b6",
  },
  modal: {
    marginTop: Platform.OS === "android" ? 10 : 90,
    borderRadius: 0,
    marginHorizontal: 0,
    marginBottom: 0,
  },
  actionBtn: {
    width: "auto",
    height: 54,
    borderRadius: 50,
  },
  amountText: {
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 5,
  },
});
export default SendMoneyModal;
