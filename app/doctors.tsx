// app/doctors.tsx
import { View, Text, FlatList, Image } from "react-native";

const doctors = [
  { id: "1", name: "Dr. John Doe", specialty: "Cardiologist", image: "https://via.placeholder.com/100" },
  { id: "2", name: "Dr. Jane Smith", specialty: "Dermatologist", image: "https://via.placeholder.com/100" },
];

export default function DoctorListingScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Doctors List</Text>
      <FlatList
        data={doctors}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row", padding: 10, alignItems: "center" }}>
            <Image source={{ uri: item.image }} style={{ width: 50, height: 50, borderRadius: 25 }} />
            <View style={{ marginLeft: 10 }}>
              <Text>{item.name}</Text>
              <Text>{item.specialty}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
