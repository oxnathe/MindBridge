import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button";

import { SIZES, COLORS } from "../../themes/theme";
import { router } from "expo-router";




const FirstSurvey = ()=>{
    return(
        <SafeAreaView style={{
            flex: 1,
            alignItems: 'center',
            // justifyContent: 'center'
        }}>
            <View>
                <Image style={{
                    width: 440,
                    height: 440,
                    marginTop: 40
                }} source={require('../../assets/images/survey.png')}/>
            </View>

            <View>
                <Text style={surveyStyle.surveyHeader}>
                    To personalize your MindBridge {'\n'} journey
                </Text>
            </View>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
                marginTop: 15,
            }}>
                <Image style={{
                    width: 16,
                    height: 16,
                }} source={require('../../assets/images/Checkboxes.png')}/>
                <Text style={surveyStyle.surveyText}>
                    We’ll ask a few quick questions about how you’ve {'\n'}been feeling lately
                </Text>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
                marginTop: 15,
                marginBottom: 40,
            }}>
                <Image style={{
                    width: 16,
                    height: 16,
                }} source={require('../../assets/images/Checkboxes.png')}/>
                <Text style={surveyStyle.surveyText}>
                    This helps us recommend the right mindfulness {'\n'}tips and journal prompts for you.
                </Text>
            </View>

            <View>
                <Button text={'Start Pre-survey'} onPress={()=>{
                    router.replace('./secondSurvey')
                }}/>
                <View style={{
                    flexDirection: 'row',
                    alignSelf: 'center',
                    gap: 10,
                    textAlign: 'center',
                }}>
                    <Image style={{
                        width: 16,
                        height: 16,
                    }} source={require('../../assets/images/message.png')}/>
                    <Text>
                        Your answers are private and stored securely.
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default FirstSurvey;

const surveyStyle = StyleSheet.create({
    surveyHeader:{
        fontFamily: 'serifRegular',
        fontSize: SIZES.medium,
        color: '#0B212C',
        fontWeight: 400,
        textAlign: 'center'
    },
    surveyText:{
        fontFamily: 'poppinsRegular',
        fontSize: SIZES.extraSmall,
        color: '#0B212C',
    },
    surveyInfo:{
        fontFamily: 'poppinsRegular',
        fontSize: 10,
        color: '#0B212C',
    }
})