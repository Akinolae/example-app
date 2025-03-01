import { ScrollView, StyleSheet, Text, View } from "react-native";
import ForgotPasswordForm from "./components/Forms/ForgotPasswordForm";
import { CustomButton } from "./components/ui";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const ForgotPassword = () => {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.backBtnWrapper}>
        <CustomButton
          backgroundColor="none"
          onPress={() => router.back()}
          textColor="red"
        >
          <Ionicons name="arrow-back" size={20} color="black" />
        </CustomButton>
      </View>
      <Text style={styles.header}>Forgot password</Text>
      <ForgotPasswordForm />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 60,
  },
  header: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 40,
  },
  backBtnWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
});
export default ForgotPassword;
