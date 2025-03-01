import { Text, ScrollView, StyleSheet } from "react-native";
import LoginForm from "./components/Forms/LoginForm";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  const submit = () => {
    router.push("/(tabs)");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Welcome back 👋</Text>
      <Text style={styles.subText}>sign in to your account</Text>
      <LoginForm submit={submit} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 60,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
  },
  header: {
    marginTop: 50,
    fontSize: 30,
    fontWeight: "700",
  },
  subText: {
    fontSize: 12,
    paddingTop: 2,
    marginBottom: 40,
    color: "#767C8C",
  },
});
