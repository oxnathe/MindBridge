import { Stack } from "expo-router";

const AuthLayout = () =>{
    return(
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="sign-up"/>
            <Stack.Screen name="sign-in"/>
            <Stack.Screen name="create-password"/>
            <Stack.Screen name="password-success"/>
        </Stack>
    )
}

export default AuthLayout;