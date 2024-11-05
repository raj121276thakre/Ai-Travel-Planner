import { View, Text } from "react-native";
import React from "react";
import { Colors } from "./../../constants/Colors";
export default function OptionCard({ option, selectedOptions }) {
  return (
    <View
      style={[{
        padding: 25,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor: Colors.LightGray,
        borderRadius:15
      },selectedOptions?.id==option.id&&{borderWidth:3}]}
    >
      <View>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "outfit-bold",
          }}
        >
          {option?.title}
        </Text>

        <Text
          style={{
            fontSize: 17,
            fontFamily: "outfit",
            color: Colors.Gray,
          }}
        >
          {option?.des}
        </Text>
      </View>

      <Text
        style={{
          fontSize: 35,
        }}
      >
        {option.icon}
      </Text>
    </View>
  );
}
