import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import React from "react";
import { useNavigation, useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { Colors } from "./../../constants/Colors";
import CalendarPicker from "react-native-calendar-picker";
import moment from "moment";
import { CreateTripContext } from "./../../context/CreateTripContext";

export default function SelectDates() {
  const navigation = useNavigation();
  const [startDate, setStartDate] = useState();
  const [endtDate, setEndtDate] = useState();
  const { tripData, setTripData } = useContext(CreateTripContext);
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  const onDateChange = (date, type) => {
    console.log(date, type);
    if (type == "START_DATE") {
      setStartDate(moment(date));
    } else {
      setEndtDate(moment(date));
    }
  };

  const OnDateSelectionContinue = () => {
    if (!startDate && !endtDate) {
      ToastAndroid.show("Please select start and ende date", ToastAndroid.LONG);
      return;
    }
    const totalNoOfDays = endtDate.diff(startDate, "days");
    console.log(totalNoOfDays + 1);
    setTripData({
      ...tripData,
      startDate: startDate,
      endDate: endtDate,
      totalNoOfDays: totalNoOfDays + 1,
    });

    router.push('create-trip/select-budget')
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
        Travel Dates
      </Text>

      <View
        style={{
          marginTop: 30,
        }}
      >
        <CalendarPicker
          // onDateChange={() => {}}
          onDateChange={onDateChange}
          allowRangeSelection={true}
          minDate={new Date()}
          //maxRangeDuration={5}
          selectedRangeStyle={{
            backgroundColor: Colors.Primary,
          }}
          selectedDayTextStyle={{
            color: Colors.WHITE,
          }}
        />
      </View>

      <TouchableOpacity
        onPress={OnDateSelectionContinue}
        style={{
          padding: 15,
          backgroundColor: Colors.Primary,
          borderRadius: 15,
          marginTop: 35,
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
