import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { COLORS, SIZES } from "../themes/theme";
import Button from "../components/Button";
import { router } from "expo-router";
import { useEffect } from "react";


const Onboarding = ()=>{
    const {width, height} = Dimensions.get('screen');

    useEffect(()=>{

        setTimeout(()=>{
        router.navigate('./onboarding2')
       }, 5000)
    })

    return(
        <SafeAreaView style={{
            backgroundColor: COLORS.backgroundColor,
            flex:1,
        }}>
            <View style={{
                marginLeft: 350
            }}>
                <TouchableOpacity style={{
                flexDirection: 'row',
                alignItems: 'center',
                }} onPress={() =>{
                router.replace('./sign-up')
                }}>
                    <Text style={{
                        fontFamily: 'poppinsSemiBold'
                    }}>
                    Skip
                    </Text>
                    <Image style={{
                        width: 24,
                        height: 24,
                    }} source={require('../assets/images/Skip.png')}/>
                </TouchableOpacity>
                
            </View>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 250
            }}>

                <Image style={{
                    width: 339,
                    height: 78,
                }} source={require('../assets/images/Emoji-Frame.png')}/>

               <Text style={{
                fontFamily: 'serifRegular',
                fontSize: SIZES.large,
                color: '#0B212C',
                fontWeight: 400
               }}>
                Understand Your Feelings
               </Text>

               <Text style={{
                textAlign: 'center',
                fontFamily: 'poppinsRegular',
                fontSize: SIZES.regular,
                color: '#0B212C',
                fontWeight: 400,
                marginBottom: 250
               }}>
                Log your mood and emotions easily to spot patterns and gain insights into your well-being.
               </Text>

               <Button text={'Next'} onPress={() =>{
                router.replace('./onboarding2')
            }}/>

            </View>
        </SafeAreaView>
    )
}

export default Onboarding;