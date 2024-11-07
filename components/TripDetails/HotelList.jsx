import { View, Text, FlatList, Image } from "react-native";
import React from "react";

export default function HotelList({ hotelList }) {
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontFamily: "outfit-bold", fontSize: 20 }}>
        🏨 Hotel Recommendation
      </Text>

      <FlatList
        data={hotelList}
        style={{ marginTop: 8 }}
        horizontal={true}
        keyExtractor={(item, index) => index.toString()}  // Add a keyExtractor for better performance
        renderItem={({ item }) => (
          <View style={{ marginRight: 15, width: 180 }}>
            <Image
              source={require("./../../assets/images/login.jpeg")}
              style={{
                width: 180,
                height: 120,
                borderRadius: 15,
              }}
            />
            <View style={{ padding: 5 }}>
              <Text
                style={{
                  fontFamily: "outfit-medium",
                  fontSize: 17,
                  flex: 1,
                }}
              >
                {item.hotelName}
              </Text>

              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontFamily: "outfit" }}>
                  ⭐ {item.rating}
                </Text>
                <Text style={{ fontFamily: "outfit" }}>
                  💵 {item.price}
                </Text>

              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}
