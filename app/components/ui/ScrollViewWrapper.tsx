import React from "react";
import { Platform, ScrollView, StyleSheet, SafeAreaView } from "react-native";

function ScrollViewWrapper(props: any) {
  return (
    <SafeAreaView style={styles.areaView}>
      <ScrollView>{props.children}</ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  areaView: {
    flex: 1,
    backgroundColor: "white",
    marginTop: -60,
  },
});
export default ScrollViewWrapper;
