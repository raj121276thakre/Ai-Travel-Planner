import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from "./../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from 'expo-router';

export default function StartNewTripCard() {
    const router = useRouter();

    return (
        <View
            style={{
                padding: 20,
                marginTop: 50,
                display: 'flex',
                alignItems: 'center',
                gap: 25
            }}
        >
            <Ionicons name="location-sharp" size={30} color='black' />

            <Text style={{
                fontSize: 25,
                fontFamily: 'outfit-medium',

            }}>
                No Trips planned yet
            </Text>

            <Text style={{
                fontSize: 20,
                fontFamily: 'outfit',
                textAlign: 'center',
                color: Colors.Gray

            }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab saepe
            </Text>

            <TouchableOpacity
                onPress={() => router.push('/create-trip/search-place')}
            // onPress={() => router.push('/create-trip/select-traveler')}
            >
                <Text style={{
                    fontSize: 17,
                    fontFamily: 'outfit-medium',
                    padding: 15,
                    backgroundColor: Colors.Primary,
                    color: Colors.WHITE,
                    paddingHorizontal: 30,
                    borderRadius: 15

                }}>
                    Start a new trip
                </Text>
            </TouchableOpacity>

        </View>
    )
}