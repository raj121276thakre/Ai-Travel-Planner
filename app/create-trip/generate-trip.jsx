import { View, Text, Image } from "react-native";
import React, { useEffect, useContext, useState } from "react";
import { Colors } from "./../../constants/Colors";
import { CreateTripContext } from "./../../context/CreateTripContext";
import { AI_PROMPT } from "../../constants/Options";
import { chatSession } from "../../configs/AiModal";
import { useRouter } from "expo-router";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "./../../configs/FirebaseConfig";

export default function GenerateTrip() {
  const { tripData, setTripData } = useContext(CreateTripContext);

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const user = auth.currentUser;

  useEffect(() => {
    GenerateAiTrip();
  }, []);

  // useEffect(() => {
  //   if (tripData) {
  //     GenerateAiTrip();
  //   }
  // }, [tripData]);

  const GenerateAiTrip = async () => {

    try {
    setLoading(true);
    // .replace(
    //     "{location}",
    //     tripData?.locationInfo?.name
    //   )
    const FINAL_PROMPT = AI_PROMPT.replace(
      "{totalDays}",
      tripData?.totalNoOfDays
    )
      .replace("{totalNights}", tripData?.totalNoOfDays - 1)
      .replace("{traveler}", tripData?.traveler?.title)
      .replace("{budget}", tripData?.budget)
      .replace("{totalDays}", tripData?.totalNoOfDays)
      .replace("{totalNights}", tripData?.totalNoOfDays - 1);

    console.log(FINAL_PROMPT);

    const result = await chatSession.sendMessage(FINAL_PROMPT);
   // console.log(result.response.text());
    const tripResp = JSON.parse(result.response.text());

   // setLoading(false);
    const docId = Date.now().toString();
    //  const result_ =
    await setDoc(doc(db, "UserTrips", docId), {
      userEmail: user.email,
      tripPlan: tripResp, // AI result
      tripData: JSON.stringify(tripData), // User Selection
      docId: docId,
    });
    console.log(".........Data saved..........");

    router.push("./../tabs/mytrip");
  } catch (error) {
    console.error("Error generating trip:", error);
  } finally {
    setLoading(false);
  }
  };

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
          textAlign: "center",
        }}
      >
        Please Wait...
      </Text>

      <Text
        style={{
          fontSize: 20,
          marginTop: 40,
          fontFamily: "outfit-medium",
          textAlign: "center",
        }}
      >
        We are working to generate your dream trip
      </Text>

      <Image
        source={require("./../../assets/images/plane.gif")}
        style={{
          width: "100%",
          height: 300,
          marginTop: 20,
          objectFit: "contain",
        }}
      />

      <Text
        style={{
          fontSize: 20,
          marginTop: 40,
          fontFamily: "outfit",
          color: Colors.Gray,
          textAlign: "center",
        }}
      >
        Do not Go Back
      </Text>
    </View>
  );
}
