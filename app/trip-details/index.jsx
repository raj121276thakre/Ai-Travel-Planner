import { View, Text, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { useEffect } from "react";
import { Colors } from "../../constants/Colors";
import moment from "moment";
import FlightInfo from "../../components/TripDetails/FlightInfo";
import HotelList from "../../components/TripDetails/HotelList";
import PlannedTrips from "../../components/TripDetails/PlannedTrips";

export default function TripDetails() {
  const router = useRouter();
  const { trip } = useLocalSearchParams();
  const [tripDetails, setTripDetails] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });

    console.log("trip Data -> ", trip);
    // setTripDetails(trip);

    if (trip) {
      const parsedTrip = formatData(trip); // Ensure parsing
      setTripDetails(parsedTrip);
    }
  }, [trip]);

  const formatData = (data) => {
    try {
      return typeof data === "string" ? JSON.parse(data) : data;
    } catch (error) {
      console.error("JSON Parse error:", error);
      return null;
    }
  };

  return (
    tripDetails && (
      <ScrollView>
        <View>
          {/* <Image
        source={{
          uri:
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
            formatData(tripDetails.tripData).locationInfo?.photoRef +
            "&key=" +
            process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
        }}
        style={{
            width: "100%",
            height: 100,
            borderRadius: 15,
        }}
      /> */}

          <Image
            source={require("./../../assets/images/login.jpeg")}
            style={{
              width: "100%",
              height: 300,
            }}
          />

          <View
            style={{
              padding: 15,
              backgroundColor: Colors.WHITE,
              height: "100%",
              marginTop: -30,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
            }}
          >
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 25,
              }}
            >
              📍{tripDetails?.tripPlan?.trip?.destination}
            </Text>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 5,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "outfit",
                  color: Colors.Gray,
                }}
              >
                🗓️{" "}
                {moment(formatData(tripDetails.tripData)?.startDate).format(
                  "DD MMM yyyy"
                )}
              </Text>

              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "outfit",
                  color: Colors.Gray,
                }}
              >
                -
                {moment(formatData(tripDetails.tripData)?.endDate).format(
                  "DD MMM yyyy"
                )}
              </Text>
            </View>

            <Text
              style={{
                fontFamily: "outfit",
                color: Colors.Gray,
                fontSize: 17,
              }}
            >
              🚌{" "}
              {formatData(tripDetails.tripData)?.traveler?.title ??
                "No Title Available"}
            </Text>

            {/* Flight Info */}
            <FlightInfo flightData={tripDetails?.tripPlan?.trip?.flight} />

            {/* Hotel list */}
            <HotelList hotelList={tripDetails?.tripPlan?.trip?.hotels} />

            {/* Trip day planner info */}
            <PlannedTrips details={tripDetails?.tripPlan?.trip?.dailyPlan} />
          </View>
        </View>
      </ScrollView>
    )
  );
}
