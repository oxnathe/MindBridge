import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { COLORS, SIZES } from "../themes/theme";
import Button from "../components/Button";
import { router } from "expo-router";
import { useEffect } from "react";


const ThirdOnboarding = ()=>{
    const {width, height} = Dimensions.get('screen');

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
                router.push('./sign-up')
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
                marginTop: 200
            }}>

                <Image style={{
                    width: 408,
                    height: 265.2,
                }} source={require('../assets/images/Open_Doodles-Reading.png')}/>

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
                marginBottom: 90
               }}>
                Log your mood and emotions easily to spot patterns and gain insights into your well-being.
               </Text>

               <Button text={'Next'} onPress={() =>{
                router.push('./sign-up')
            }}/>

            </View>
        </SafeAreaView>
    )
}

export default ThirdOnboarding;