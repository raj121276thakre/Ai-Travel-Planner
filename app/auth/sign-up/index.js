import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from './../../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createUserWithEmailAndPassword } from "firebase/auth";
//import auth from './../../../configs/FirebaseConfig'
import { auth } from "./../../../configs/FirebaseConfig";


export default function SignUp() {
  const router = useRouter();
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])


  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [fullName, setFullName] = useState();



  const OnCreateAccount = () => {

    if (!email && !password && !fullName) {
      ToastAndroid.show('Please enter all required information', ToastAndroid.LONG);
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        router.replace('./../../tabs/mytrip');
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("--",errorMessage, errorCode);
        // ..
      });
  }



  return (

    <View style={{
      padding: 25,
      paddingTop: 40,
      backgroundColor: Colors.WHITE,
      height: '100%'

    }}>

      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 30,
        marginTop: 30
      }}>Create New Account</Text>

      {/* User name */}
      <View style={{ marginTop: 50 }}>
        <Text style={{
          fontFamily: 'outfit'

        }}>Full Name</Text>
        <TextInput style={styles.input} placeholder='Enter Full Name'
          onChangeText={(value) => setFullName(value)}
        />
      </View>


      {/* Email */}
      <View style={{ marginTop: 20 }}>
        <Text style={{
          fontFamily: 'outfit'

        }}>Email</Text>
        <TextInput style={styles.input} placeholder='Enter Email'
          onChangeText={(value) => setEmail(value)} />
      </View>

      {/* Password */}
      <View style={{ marginTop: 20 }}>
        <Text style={{
          fontFamily: 'outfit'

        }}>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input} placeholder='Enter Password'
          onChangeText={(value) => setPassword(value)}
        />
      </View>

      {/* Sign in Button  */}
      <TouchableOpacity onPress={OnCreateAccount} style={{
        padding: 20,
        backgroundColor: Colors.Primary,
        borderRadius: 15,
        marginTop: "20%",
      }}>
        <Text style={{
          color: Colors.WHITE,
          fontFamily: "outfit",
          fontSize: 17,
          textAlign: "center",
        }}>Create Account</Text>
      </TouchableOpacity>



      {/* Create Account Button  */}
      <TouchableOpacity

        onPress={() => router.replace('auth/sign-in')}
        style={{
          padding: 20,
          backgroundColor: Colors.WHITE,
          borderRadius: 15,
          marginTop: 20,
          borderWidth: 1
        }}>
        <Text style={{
          color: Colors.Primary,
          fontFamily: "outfit",
          fontSize: 17,
          textAlign: "center",
        }}>Sign In</Text>
      </TouchableOpacity>


    </View>
  )
}


const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.Gray,
    fontFamily: 'outfit'

  }
})