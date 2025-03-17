import { View, Text } from "react-native";
import React from "react";
import useAuth from "@/hooks/useAuth";

const register = () => {
  const { user, createUser } = useAuth();
  return (
    <View>
      <Text>register</Text>
    </View>
  );
};

export default register;
