import { StyleSheet, Text, View } from "react-native";
import { Container, CustomButton } from "../components/ui";
import { Ionicons } from "@expo/vector-icons";
import CustomModal from "../components/Modals/Modal";
import { useState } from "react";
import ScrollViewWrapper from "./ScrollViewWrapper";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <ScrollViewWrapper>
      {/* modal */}
      <CustomModal
        isVisible={isVisible}
        onBackdropPress={() => setIsVisible(!isVisible)}
      >
        <Text>Hello</Text>
      </CustomModal>
      <Container>
        <View style={styles.headerWrapper}>
          {/* <View>
            <View style={styles.avatar}></View>
          </View> */}
          <View>
            <Text style={styles.headerText}>Good morning, Akinola 😊</Text>
            <Text style={styles.subText}>Good morning</Text>
          </View>
          <View>
            <CustomButton backgroundColor="none">
              <Ionicons name="notifications" size={24} />
            </CustomButton>
          </View>
        </View>
        <View style={styles.accountWrapper}>
          <Text style={styles.accountText}>Your Balance</Text>
          <Text style={styles.amount}>$3,500,000</Text>
          <View>
            <CustomButton
              title="Add Money"
              backgroundColor="#19191B"
              onPress={() => setIsVisible(!isVisible)}
              style={{ height: 54, borderRadius: 50, marginTop: 20 }}
            />
          </View>
        </View>
        <View style={styles.actionWrapper}>
          <CustomButton
            style={styles.action}
            title="Add"
            textColor="red"
          ></CustomButton>
          <CustomButton
            style={styles.action}
            title="Add"
            textColor="red"
          ></CustomButton>
          <CustomButton
            style={styles.action}
            title="Add"
            textColor="red"
          ></CustomButton>
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
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "600",
  },
  subText: {
    fontSize: 12,
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
  actionWrapper: {
    flex: 1,
    flexDirection: "row",
    gap: 20,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  action: {
    height: 85,
    width: 85,
    backgroundColor: "green",
    borderRadius: 10,
  },
});

export default Home;
