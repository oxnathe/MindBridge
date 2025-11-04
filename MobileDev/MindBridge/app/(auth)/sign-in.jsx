import { Image, StyleSheet, Text, View, Platform, TextInput } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import InputComponent from "../../components/InputComponent"
import { SIZES } from "../../themes/theme"
import { useState } from "react"

import Button from "../../components/Button"
import { router } from "expo-router"




const Signup = () =>{

    const [password, setPassword] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false)


    return(
        <SafeAreaView style={{
            flex: 1,
            alignItems: "center",
            marginTop: 80,
        }}>
            <View>
                <Text style={formStyles.formHeader}>
                    Welcome Back!
                </Text>
                <Text style={formStyles.formText}>
                    It’s good to have you here again. Let’s {'\n'} continue your journey.
                </Text>
            </View>

            <View style={{
                marginTop: 10,
            }}>
                <Text style={formStyles.label}>
                    Username
                </Text>
                <InputComponent placeholder={"Enter your username"}/>
            </View>

            <View style={{
                marginTop: 10,
            }}>
                <Text style={formStyles.label}>
                    Password
                </Text>
                <TextInput style={formStyles.inputPassword} 
                placeholder="Enter Password"
                placeholderTextColor= '#AFAFAF'
                returnKeyType="done"
                secureTextEntry={!passwordVisible}
                onChangeText={(password)=>{
                    setPassword(password)
                }}
                />
                <Image style={{
                    width: 16,
                    height: 16,
                    position: "absolute",
                    top: 40,
                    left: 370,
                }} source={require('../../assets/images/eye-alt.png')} onPress={() =>{
                    setPasswordVisible(!passwordVisible)
                }}/>
                <Text style={{
                        fontFamily: 'poppinsRegular',
                        fontSize: '10',
                    }}>
                    Must contain at least a uppercase, a lowercase, a character
                </Text>
            </View>
            <View style={{
                alignSelf: 'right'
            }}>
                <Text>
                    Forgot your password?
                </Text>
            </View>
            

            <View style={{
                marginTop: 300,
            }}>
                <Button text={'Create Account'}/>
            </View>

            <View>
                <Text style={{
                    fontFamily: 'poppinsRegular',
                    fontSize: SIZES.extraSmall,
                    color: '#002131',
                }}>
                    Already have an account? <Text style={formStyles.span} onPress={()=>{
                        router.push('./sign-up')
                    }} >Sign-In</Text>
                </Text>
            </View>
            
            
        </SafeAreaView>
    )
}

export default Signup;

const formStyles = StyleSheet.create({
    formHeader:{
        fontFamily: 'serifRegular',
        fontSize: SIZES.medium,
        color: '#0B212C',
        textAlign: "center"
    },
    formText:{
        fontFamily: 'poppinsRegular',
        fontSize: SIZES.small,
        color: "#0B212C",
        textAlign: "center"
    },
    span:{
        fontFamily:'poppinsSemiBold',
        fontWeight: 600
    },
    label:{
        fontFamily: 'serifRegular',
        fontSize: SIZES.regular,
        color: '#0B212C',
        marginBottom: 5,
    },
    inputPassword:{
        width: 400,
        height: 46,
        backgroundColor: "#F9F8F8",
        paddingBottom: 12, 
        paddingTop: 12, 
        paddingRight: 16, 
        paddingLeft: 20, 
        borderRadius: 6,
        borderBottom: 1,
        
        ...Platform.select({
            ios: {
                shadowColor: '#0031484D',
                shadowOffset: {width: 2, height: 2},
                shadowOpacity: 0.75,
                shadowRadius: .5,
            },
            android: {
                elevation: 5,
            }
        })
    }
})