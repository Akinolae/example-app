import { Platform, StyleSheet, Text, View } from "react-native";
import { Container, CustomButton } from "../components/ui";
import { Ionicons } from "@expo/vector-icons";
import CustomModal from "../components/Modals/Modal";
import { useState } from "react";
import ScrollViewWrapper from "../components/ui/ScrollViewWrapper";
import AccountDetailsWrapper from "../components/ui/AccountDetailsWrapper";
import SendMoneyModal from "../components/Modals/SendMoneyModal";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [sendMoney, setSendMoney] = useState(false);
  return (
    <ScrollViewWrapper>
      {/* Send money modal */}
      <SendMoneyModal
        isVisible={sendMoney}
        onBackdropPress={() => setSendMoney(!sendMoney)}
      />
      {/* modal */}
      <CustomModal
        isVisible={isVisible}
        onBackdropPress={() => setIsVisible(!isVisible)}
        style={{
          marginTop: Platform.OS === "android" ? "40%" : "55%",
          marginHorizontal: 0,
          marginBottom: 0,
        }}
      >
        <View style={styles.modalHeaderWrapper}>
          <Text style={{ fontSize: 18, fontWeight: 700 }}>Deposit Money</Text>
          <CustomButton
            style={styles.closeBtn}
            onPress={() => setIsVisible(!isVisible)}
          >
            <Ionicons size={24} name="close-circle" />
          </CustomButton>
        </View>
        <AccountDetailsWrapper />
      </CustomModal>
      <Container>
        <View style={styles.headerWrapper}>
          <View>
            <Text style={styles.headerText}>Available Balance</Text>
            <Text style={styles.amount}>$3,500,000</Text>
          </View>
          <View>
            <CustomButton backgroundColor="none">
              <Ionicons name="notifications" size={24} />
            </CustomButton>
          </View>
        </View>
        <View style={styles.actionWrapper}>
          <CustomButton
            title="Add Money"
            backgroundColor="#6401ee"
            onPress={() => setIsVisible(!isVisible)}
            style={{ ...styles.actionBtn, color: "#6401ee" }}
          />
          <CustomButton
            title="Send Money"
            backgroundColor="#ADA6B6"
            textColor="#6401ee"
            onPress={() => setSendMoney(!sendMoney)}
            style={styles.actionBtn}
          />
        </View>
      </Container>
    </ScrollViewWrapper>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  headerText: {
    fontSize: 14,
    fontWeight: "500",
  },
  subText: {
    fontSize: 12,
  },
  closeBtn: {
    height: 24,
    width: 24,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "100%",
    backgroundColor: "#ada6b6",
  },
  modalHeaderWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  actionWrapper: {
    marginTop: 10,
    flexDirection: "row",
    // flex: 1,
    gap: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  actionBtn: {
    width: "48%",
    height: 54,
    borderRadius: 50,
  },
  accountWrapper: {
    marginTop: 30,
    backgroundColor: "#85999f85",
    height: 160,
    borderRadius: 20,
    padding: 15,
    flex: 1,
  },
  accountText: {
    fontSize: 18,
    color: "#767C8C",
  },
  amount: {
    fontSize: 30,
    fontWeight: "700",
  },
  avatar: {
    borderRadius: "50%",
    height: 30,
    width: 30,
    backgroundColor: "red",
  },
  action: {
    height: 85,
    width: 85,
    backgroundColor: "green",
    borderRadius: 10,
  },
});

export default Home;
