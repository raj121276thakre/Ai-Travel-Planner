import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { CreateTripContext } from "./../../context/CreateTripContext";
import { Colors } from "./../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import moment from "moment";

export default function ReviewTrip() {
  const navigation = useNavigation();
  const router = useRouter();
  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Text
        style={{
          fontSize: 35,
          fontFamily: "outfit-bold",
          marginTop: 20,
        }}
      >
        Review your trip
      </Text>

      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "outfit-bold",
          }}
        >
          Before generating your trip, please review your selection
        </Text>

        {/* Destination Info */}
        <View
          style={{
            marginTop: 40,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          {/* <Ionicons name="location-sharp" size={34} color="black" /> */}
          <Text
            style={{
              fontSize: 30,
            }}
          >
            📍{" "}
          </Text>

          <View>
            <Text
              style={{
                fontSize: 20,
                fontFamily: "outfit",
                color: Colors.Gray,
              }}
            >
              Destination
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontFamily: "outfit-medium",
              }}
            >
              {tripData?.locationInfo?.name}
            </Text>
          </View>
        </View>

        {/* Date selected Info */}
        <View
          style={{
            marginTop: 25,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          {/* <Ionicons name="location-sharp" size={34} color="black" /> */}
          <Text
            style={{
              fontSize: 30,
            }}
          >
            🗓️{" "}
          </Text>

          <View>
            <Text
              style={{
                fontSize: 20,
                fontFamily: "outfit",
                color: Colors.Gray,
              }}
            >
              Travel Date
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontFamily: "outfit-medium",
              }}
            >
              {moment(tripData?.startDate).format("DD MMM") +
                " To " +
                moment(tripData?.endDate).format("DD MMM") +
                " "}
              ({tripData?.totalNoOfDays} days)
            </Text>
          </View>
        </View>

        {/* Traveles Info */}
        <View
          style={{
            marginTop: 25,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          {/* <Ionicons name="location-sharp" size={34} color="black" /> */}
          <Text
            style={{
              fontSize: 30,
            }}
          >
            🚌{" "}
          </Text>

          <View>
            <Text
              style={{
                fontSize: 20,
                fontFamily: "outfit",
                color: Colors.Gray,
              }}
            >
              Who is Traveling
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontFamily: "outfit-medium",
              }}
            >
              {tripData?.traveler?.title}
            </Text>
          </View>
        </View>

        {/* Budget Info */}
        <View
          style={{
            marginTop: 25,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          {/* <Ionicons name="location-sharp" size={34} color="black" /> */}
          <Text
            style={{
              fontSize: 30,
            }}
          >
            💰{" "}
          </Text>

          <View>
            <Text
              style={{
                fontSize: 20,
                fontFamily: "outfit",
                color: Colors.Gray,
              }}
            >
              Budget
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontFamily: "outfit-medium",
              }}
            >
              {tripData?.budget}
            </Text>
          </View>
        </View>


      </View>

      {/* button */}
      <TouchableOpacity
         onPress={()=>router.replace('create-trip/generate-trip')}
        style={{
          padding: 15,
          backgroundColor: Colors.Primary,
          borderRadius: 15,
          marginTop: 80,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontFamily: "outfit-medium",
            color: Colors.WHITE,
            textAlign: "center",
          }}
        >
          Build My Trip
        </Text>
      </TouchableOpacity>
    </View>
  );
}
