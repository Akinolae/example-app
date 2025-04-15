import React from "react";
import { Platform, ScrollView, StyleSheet } from "react-native";

function ScrollViewWrapper(props: any) {
  return <ScrollView style={styles.root}>{props.children}</ScrollView>;
}

const styles = StyleSheet.create({
  root: {
    marginTop: Platform.OS === "android" ? -60 : undefined,
  },
});
export default ScrollViewWrapper;
