import { Text, View } from "react-native";
import Login from "./../components/Login";
import {auth} from './../configs/FirebaseConfig';
import { Redirect } from "expo-router";
import 'react-native-get-random-values';



export default function Index() {
  const user = auth.currentUser;

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {user ? <Redirect href={'./tabs/mytrip'} /> : <Login />}
    </View>
  );
}
