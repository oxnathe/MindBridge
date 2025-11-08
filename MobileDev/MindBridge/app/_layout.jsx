import { Stack } from "expo-router";
import Splash from "./Splash";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { StatusBar } from "react-native";

export default function RootLayout() {


  const [showSplash, setShowSplash] = useState(true)

  const [loaded, error] = useFonts({
    serifRegular: require('../assets/fonts/DM_Serif_Display/DMSerifDisplay-Regular.ttf'),
    poppinsRegular: require('../assets/fonts/Poppins/Poppins-Regular.ttf'),
    poppinsMedium: require('../assets/fonts/Poppins/Poppins-Medium.ttf'),
    poppinsSemiBold: require('../assets/fonts/Poppins/Poppins-SemiBold.ttf'),
    poppinsLight: require('../assets/fonts/Poppins/Poppins-Light.ttf'),
    poppinsBold: require('../assets/fonts/Poppins/Poppins-Bold.ttf'),
    poppinsItalic: require('../assets/fonts/Poppins/Poppins-Italic.ttf')
  })

  useEffect(() =>{
    setTimeout( ()=>{
      setShowSplash(false)
    }, 5000)
  })


  if(showSplash){
    return<Splash/>
  }


  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name="index"/>
      <Stack.Screen name="(auth)"/>
      <Stack.Screen name="(presurvey)"/>
      <Stack.Screen name="(tabs)"/>
    </Stack>
  );
}
