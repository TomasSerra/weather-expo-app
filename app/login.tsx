import { View, StyleSheet } from "react-native";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import useAuth from "@/hooks/useAuth";
import CustomInput from "@/components/common/input/CustomInput";
import CustomButton from "@/components/common/button/CustomButton";
import ThemedText, { FontSize } from "@/components/common/text/ThemedText";
import GradientBackground from "@/components/common/background/GradientBackground";
import { useTheme } from "@/components/context/ThemeContext";
import { useRouter } from "expo-router";

const validationSchema = Yup.object().shape({
  email: Yup.string(),
  password: Yup.string(),
});

const Login = () => {
  const { login, error } = useAuth();
  const { theme } = useTheme();
  const router = useRouter();

  const handleLogin = (email: string, password: string) => {
    login(email, password).then(() => {
      router.replace("/");
    });
  };

  return (
    <GradientBackground style={styles.gradient}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => handleLogin(values.email, values.password)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.container}>
            <View style={{ gap: 5 }}>
              <ThemedText size={FontSize.xl} style={{ textAlign: "center" }}>
                Welcome to
              </ThemedText>
              <ThemedText
                style={{
                  textAlign: "center",
                  fontSize: 32,
                  fontFamily: "InterBold",
                }}
              >
                The Weather App
              </ThemedText>
            </View>
            <View style={styles.inputs}>
              <CustomInput
                label="Email"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />

              <CustomInput
                label="Password"
                secureTextEntry
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
            </View>
            <View>
              <CustomButton
                onPress={() => {
                  handleSubmit();
                }}
                type="white"
              >
                Sign In
              </CustomButton>
              <ThemedText style={[styles.error, { color: theme.colors.error }]}>
                {error ? error : " "}
              </ThemedText>
              <CustomButton
                onPress={() => {
                  router.replace("/register");
                }}
                type="ghost"
              >
                Create Account
              </CustomButton>
            </View>
          </View>
        )}
      </Formik>
    </GradientBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  inputs: {
    width: "100%",
    gap: 5,
  },
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 30,
    paddingVertical: 60,
    justifyContent: "center",
    gap: 45,
  },
  error: {
    marginTop: 15,
    textAlign: "center",
  },
});
