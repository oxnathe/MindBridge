import { Image, StyleSheet, Text, View, Platform, TextInput, Modal, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import InputComponent from "../../components/InputComponent"
import { SIZES } from "../../themes/theme"
import { useState } from "react"

import Button from "../../components/Button"
import { router } from "expo-router"






const passwordSuccess = () =>{




    return(
        <SafeAreaView style={{
            flex: 1,
            alignItems: "center",
            justifyContent: 'center',
            marginTop: 80,
        }}>
            <View>

                <Image style={{
                    width: 53.33,
                    height: 53.33,
                    marginBottom: 10,
                    marginLeft: 120,
                }} source={require('../../assets/images/mark.png')}/>
                <Text style={formStyles.formHeader}>
                    Password updated successfully!
                </Text>
                <Text style={formStyles.formText}>
                    You can now sign in with your new password
                </Text>
            </View>


            <View style={{
                marginTop: 50,
            }}>
                <Button text={'Return to Sign In'} onPress={()=>{
                    router.push('./sign-in')
                }}/>

            </View>

                    

        </SafeAreaView>
    )
}

export default passwordSuccess;

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