// app/profile.tsx
import { View, Text, TextInput, Button } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Profile</Text>
      <TextInput placeholder="Name" />
      <TextInput placeholder="Email" />
      <Button title="Save" />
    </View>
  );
}
