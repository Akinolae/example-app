import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

function AccountDetailsWrapper() {
  return (
    <View>
      <Text style={styles.depositText}>Manual Deposit</Text>
      <View style={styles.root}>
        <View
          style={{
            padding: 8,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "white" }}>$3,500,000</Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
            <Text style={{ color: "white" }}>View History</Text>
            <Ionicons
              name="chevron-forward"
              color={"white"}
              style={{ paddingTop: 5 }}
            />
          </View>
        </View>
        <View style={styles.account}>
          <Text style={{ color: "#696D78" }}>Makinde Akinola Emmanuel</Text>
          <Text style={{ color: "#2b2c2e", fontSize: 24, fontWeight: "700" }}>
            0128949662
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.depositText}>Automated Deposit</Text>
        <View style={styles.automatedDepositWrapper}>
          <View>
            <Ionicons name="flash" />
          </View>
          <View
            style={{
              width: "100%",
              maxWidth: "80%",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: 600 }}>
              Automatic Deposits
            </Text>
            <Text style={{ fontSize: 12, marginTop: 5, color: "#696D78" }}>
              Automatically pay for bills and automate payment for transactions.
            </Text>
          </View>
          <View>
            <Ionicons name="chevron-forward" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    height: 150,
    padding: 6,
    borderRadius: 10,
    backgroundColor: "#6401ee",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  account: {
    backgroundColor: "white",
    height: 100,
    borderRadius: 10,
    gap: 5,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  depositText: {
    marginBottom: 8,
    color: "#696D78",
  },
  automatedDepositWrapper: {
    borderWidth: 1,
    height: 90,
    borderRadius: 10,
    borderColor: "#F4F4F4",
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
});
export default AccountDetailsWrapper;
