import { Image, StyleSheet, Text, View, Platform, TextInput, Modal, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import InputComponent from "../../components/InputComponent"
import { SIZES } from "../../themes/theme"
import { useState } from "react"

import Button from "../../components/Button"
import { router } from "expo-router"






const createPassword = () =>{




    return(
        <SafeAreaView style={{
            flex: 1,
            alignItems: "center",
            marginTop: 80,
        }}>
            <View>
                <Text style={formStyles.formHeader}>
                    Create a new password
                </Text>
                <Text style={formStyles.formText}>
                    You’re almost done choose a new password {'\n'} to secure your account
                </Text>
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
                />
                <Image style={{
                    width: 16,
                    height: 16,
                    position: "absolute",
                    top: 40,
                    left: 370,
                }} source={require('../../assets/images/eye-alt.png')}/>
                
            </View>

            <View style={{
                marginTop: 10,
                marginBottom: 300,
            }}>
                <Text style={formStyles.label}>
                    Confirm Password
                </Text>
                <TextInput style={formStyles.inputPassword} 
                placeholder="Enter Password"
                placeholderTextColor= '#AFAFAF'
                returnKeyType="done"
                />
                <Image style={{
                    width: 16,
                    height: 16,
                    position: "absolute",
                    top: 40,
                    left: 370,
                }} source={require('../../assets/images/eye-alt.png')}/>
                <Text style={{
                        fontFamily: 'poppinsRegular',
                        fontSize: '10',
                    }}>
                    Must contain at least a uppercase, a lowercase, a character
                </Text>
            </View>

            <Button text={'Save new password'} onPress={()=>{
                router.push('./password-success')
            }}/>
                    

        </SafeAreaView>
    )
}

export default createPassword;

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