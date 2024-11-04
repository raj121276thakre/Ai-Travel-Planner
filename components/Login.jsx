import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function Login() {

  const router = useRouter();

  return (
    <View>
      <Image
        source={require("./../assets/images/login.jpeg")}
        style={{
          width: "100%",
          height: 420,
        }}
      />

      <View style={styles.container}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: "outfit-bold",
            textAlign: "center",
            marginTop: 10,
          }}
        >
          Ai Travel Planner
        </Text>

        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 17,
            textAlign: "center",
            color: Colors.Gray,
            marginTop: 10,
          }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab saepe
          incidunt minus sunt? Sunt sit pariatur debitis, architecto nam
          doloribus reprehenderit totam magnam dignissimos odio delectus
          repudiandae, ipsa distinctio facere.
        </Text>

        <TouchableOpacity style={styles.button}
        onPress={()=>router.push('auth/sign-in')}
        >
          <Text
            style={{
              color: Colors.WHITE,
              fontFamily: "outfit",
              fontSize: 17,
              textAlign: "center",
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    marginTop: -20,
    height: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },

  button: {
    padding: 15,
    backgroundColor: Colors.Primary,
    borderRadius: 99,
    marginTop: "10%",
  },
});
