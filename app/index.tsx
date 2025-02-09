import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons"; // For edit icon
import image from "@/constants/image";
import { Link, router } from "expo-router";

export default function HomeScreen() {
  const [otpTimer, setOtpTimer] = useState(30); // Countdown timer for OTP

  useEffect(() => {
    if (otpTimer > 0) {
      const timer = setTimeout(() => setOtpTimer(otpTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [otpTimer]);

  return (
    <View className="flex-1">
      <LinearGradient
        colors={["#00a4B8", "#00608a"]}
        className="flex-1 w-full h-full justify-center items-center px-5 pt-24 pb-10"
      >
        {/* MFine Logo */}
        <Image
          source={image.mfine} // Replace with actual mfine logo
          className="w-30 h-28 mb-2.5"
          resizeMode="contain"
        />

        {/* Spacer to push input fields down */}
        <View className="flex-1" />

        {/* <Link href={"/LoginScreen"}> */}
          <Text onPress={() => router.push("./LoginScreen")}>Click here to visit OTP</Text>
          <Text onPress={() => router.push("./HomeScreens")}>Click here to visit OTP</Text>
        {/* </Link> */}

        {/* Text with marginBottom for gap */}
        <Text className="mb-5 text-white text-base">
          Enter phone number to continue
        </Text>

        {/* Phone Input Field */}
        <View className="flex-row items-center bg-white rounded-xl px-4 h-16 w-full mb-2.5">
          <Image
            source={image.india} // Replace with actual flag image
            className="w-7 h-5 mr-2.5"
            resizeMode="contain"
          />
          <Text className="text-base font-bold mr-2.5">+91</Text>
          <TextInput
            className="flex-1 text-base text-black"
            placeholder="9999999999"
            placeholderTextColor="#ccc"
            keyboardType="phone-pad"
          />
          <TouchableOpacity>
            <Ionicons name="pencil-outline" size={20} color="gray" />
          </TouchableOpacity>
        </View>

        {/* OTP Input Field */}
        <View className="flex-row items-center bg-white rounded-xl px-4 h-16 w-full justify-between">
          <TextInput
            className="flex-1 text-base text-black"
            placeholder="Enter OTP"
            placeholderTextColor="#ccc"
            keyboardType="number-pad"
          />
          <Text className="text-[#00608a] font-bold">{otpTimer}s</Text>
        </View>
      </LinearGradient>
    </View>
  );
}
