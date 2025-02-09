import React, { useState } from "react";
import { ConfirmationResult } from "firebase/auth";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { auth } from "../firebaseConfig";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  Login: undefined;
  OTPVerification: { confirmation: any };
  Home: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirm, setConfirm] = useState<ConfirmationResult | null>(null);

  const sendOTP = async () => {
    try {
      const recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "invisible",
      });
  
      const confirmation: ConfirmationResult = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        recaptchaVerifier
      );
  
      setConfirm(confirmation);
      Alert.alert("OTP sent!");
      navigation.navigate("OTPVerification", { confirmation });
    } catch (error) {
      console.error(error);
      Alert.alert("Error sending OTP");
    }
  };

  return (
    <View>
      <Text>Enter Phone Number:</Text>
      <TextInput
        placeholder="+91XXXXXXXXXX"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />
      <Button title="Send OTP" onPress={sendOTP} />
    </View>
  );
};

export default LoginScreen;
