import { Stack } from "expo-router";
import { useFonts } from "expo-font";

export default function RootLayout() {

  const [loaded, error] = useFonts({
    serifRegular: require('../assets/fonts/DM_Serif_Display/DMSerifDisplay-Regular.ttf'),
    poppinsRegular: require('../assets/fonts/Poppins/Poppins-Regular.ttf'),
    poppinsMedium: require('../assets/fonts/Poppins/Poppins-Medium.ttf'),
    poppinsSemiBold: require('../assets/fonts/Poppins/Poppins-SemiBold.ttf'),
    poppinsLight: require('../assets/fonts/Poppins/Poppins-Light.ttf'),
    poppinsBold: require('../assets/fonts/Poppins/Poppins-Bold.ttf'),
  })


  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name="index"/>
    </Stack>
  );
}
