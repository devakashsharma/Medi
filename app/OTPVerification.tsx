import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ConfirmationResult } from "firebase/auth";

type RootStackParamList = {
  Login: undefined;
  OTPVerification: { confirmation: ConfirmationResult };
  Home: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "OTPVerification">;

const OTPVerification: React.FC<Props> = ({ route, navigation }) => {
  const { confirmation } = route.params;
  const [otp, setOtp] = useState("");

  const verifyOTP = async () => {
    try {
      await confirmation.confirm(otp);
      Alert.alert("OTP Verified!");
      navigation.navigate("Home");
    } catch (error) {
      console.error(error);
      Alert.alert("Invalid OTP");
    }
  };

  return (
    <View>
      <Text>Enter OTP:</Text>
      <TextInput
        placeholder="Enter OTP"
        value={otp}
        onChangeText={setOtp}
        keyboardType="number-pad"
      />
      <Button title="Verify OTP" onPress={verifyOTP} />
    </View>
  );
};

export default OTPVerification;
