import { View, Text,Image } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

export default function PlannedTrips({ details }) {
  return (
    <View
      style={{
        marginTop: 20,
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 20,
        }}
      >
        🗺️Plan Details
      </Text>

      {details?.map((dayPlan, index) => (
        <View key={index} style={{ marginBottom: 20 }}>
          <Text
            style={{
              fontFamily: "outfit-medium",
              fontSize: 20,
              marginTop: 20,
            }}
          >
            {dayPlan.day}
          </Text>

          {dayPlan.activities.map((activity, idx) => (
            <View
              key={idx}
              style={{
                borderWidth: 1,
                padding: 10,
                marginTop: 20,
                borderRadius: 15,
                borderColor: Colors.Gray,
              }}
            >
              <Image
                source={require("./../../assets/images/login.jpeg")}
                style={{
                  width: "100%",
                  height: 120,
                  borderRadius: 15,
                }}
              />
              <View style={{ marginTop: 5 }}>
                <Text style={{ fontFamily: "outfit-bold", fontSize: 20 }}>
                  🎯 Activity: {activity.activity}
                </Text>
                <Text style={{ fontFamily: "outfit-medium", fontSize: 17 }}>
                  🕒 Time to Travel: {activity.time}
                </Text>
              </View>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}
