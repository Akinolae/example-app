import { View, StyleSheet } from "react-native";

const Container = (props: any) => {
  return <View style={styles.container}>{props.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 60,
  },
});
export default Container;
