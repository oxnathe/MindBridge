import { Stack } from "expo-router";

const SurveyLayout = () =>{
    return(
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="firstSurvey"/>
            <Stack.Screen name="secondSurvey"/>
            <Stack.Screen name="thirdSurvey"/>
            <Stack.Screen name="fourthSurvey"/>
        </Stack>
    )
}

export default SurveyLayout;