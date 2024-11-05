import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React from "react";
import { useNavigation, useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { Colors } from "./../../constants/Colors";
import { CreateTripContext } from "./../../context/CreateTripContext";
import { SelectBudgetOptions } from "./../../constants/Options";
import OptionCard from "../../components/CreateTrip/OptionCard";

export default function SelectBudget() {
  const navigation = useNavigation();

  const { tripData, setTripData } = useContext(CreateTripContext);
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  useEffect(() => {
    selectedOption&&setTripData({ ...tripData, budget: selectedOption?.title });
  }, [selectedOption]);

  // useEffect(() => {
  //   console.log(tripData);
  // }, [tripData]);

  const onClickContinue = () => {
    if (!selectedOption) {
      ToastAndroid.show("Please select your budget ", ToastAndroid.LONG);
      return;
    }

    router.push("/create-trip/review-trip");
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
          marginTop: 20,
        }}
      >
        Budget
      </Text>

      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "outfit-bold",
          }}
        >
          Choose spending habits for your trip
        </Text>

        <FlatList
          data={SelectBudgetOptions}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => setSelectedOption(item)}
              style={{
                marginVertical: 10,
              }}
            >
              <OptionCard option={item} selectedOptions={selectedOption} />
            </TouchableOpacity>
          )}
        />
      </View>

      <TouchableOpacity
        onPress={onClickContinue}
        style={{
          padding: 15,
          backgroundColor: Colors.Primary,
          borderRadius: 15,
          marginTop: 20,
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
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}
