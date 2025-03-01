import React from "react";
import { View, StyleSheet } from "react-native";
import { CustomInput, CustomButton } from "../ui";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from "expo-router";

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

const ForgotPasswordForm = ({ submit }: any) => {
  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={ForgotPasswordSchema}
      onSubmit={(values) => submit(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <View style={styles.container}>
          <CustomInput
            placeholder="Enter your email"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
            keyboardType="email-address"
            label={"Email"}
            error={errors.email}
          />

          <View style={styles.btn}>
            <CustomButton
              backgroundColor="#19191B"
              title={"Submit"}
              onPress={() => handleSubmit()}
              style={{ height: 54 }}
            />
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 20,
  },
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
  },
  btn: {
    marginTop: 30,
  },
});

export default ForgotPasswordForm;
