import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { CustomInput, CustomButton } from "../ui";
import { Formik } from "formik";
import * as Yup from "yup";
import { useRouter } from "expo-router";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too Short!").required("Required"),
});

const LoginForm = ({ submit }: any) => {
  const router = useRouter();
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginSchema}
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

          <CustomInput
            placeholder="Enter your password"
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            label="Password"
            isPassword={true}
            error={errors.password}
          />
          <Text style={styles.text} onPress={() => router.push("/ForgotPassword")}>
            Forgot password
          </Text>
          <View>
            <CustomButton
              backgroundColor="#19191B"
              title={"Login"}
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
  text: {
    fontWeight: "500",
    textAlign: "right"
  }
});

export default LoginForm;
