import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { Colors } from "../../constants/Colors";

export default function FlightInfo({ flightData }) {
  useEffect(() => {
    console.log("flightData.......->", flightData);
  }, []);
  return (
    <View
      style={{
        marginTop: 20,
        borderColor:Colors.LightGray,
        borderWidth:1,
        padding:10,
        borderRadius:15
      }}
    >

        <View
             style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center'
              }}
        >
        <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 20,
        }}
      >
        ✈️Flights{" "}
      </Text>

{/* Button */}
        <TouchableOpacity
        style={{
            marginTop:7,
          backgroundColor: Colors.Primary,
          padding: 5,
          width: 100,
          borderRadius: 7,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: Colors.WHITE,
            fontFamily: "outfit",
            fontSize: 14,
            textAlign: "center",
          }}
        >
          Book here
        </Text>
      </TouchableOpacity>
        </View>
     



      <Text
        style={{
          marginTop: 4,
          fontFamily: "outfit",
          fontSize: 17,
        }}
      >
        Arrival Airport: {flightData?.arrivalAirport}
      </Text>
      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 17,
        }}
      >
        Departure Airport: {flightData?.departureAirport}
      </Text>
      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 17,
        }}
      >
        Flight Price: {flightData?.flightPrice}
      </Text>
   
    
    </View>
  );
}
