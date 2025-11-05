import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { router } from "expo-router";

import { SIZES, COLORS } from "../../themes/theme";
import Button from "../../components/Button";




const fourthSurvey = ()=>{
    return(
        <SafeAreaView style={{
            justifyContent: 'center'
        }}>
            <View style={{
                marginLeft: 350
            }}>
                <TouchableOpacity style={{
                flexDirection: 'row',
                alignItems: 'center',
                }} onPress={() =>{
                router.replace('')
                }}>
                    <Text style={{
                        fontFamily: 'poppinsSemiBold'
                    }}>
                    Skip
                    </Text>
                    <Image style={{
                        width: 24,
                        height: 24,
                    }} source={require('../../assets/images/Skip.png')}/>
                </TouchableOpacity>
                
            </View>
            <View style={{
                marginTop: 80
            }}>
                <Text style={surveyStyle.surveyHeader}>
                    How’s your sleep and focus recently?
                </Text>
                <Text style={surveyStyle.surveyText}>
                    Select the option that feels closest to your current experience.
                </Text>
            </View>

            
            <TouchableOpacity style={surveyStyle.touchableOpacity}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: -10,
                    gap: 10
                }}>
                    <Image style={surveyStyle.emojiImage} source={require('../../assets/images/Emojis/calm-emoji.png')}/>
                    <Text style={surveyStyle.emojiText}>
                        Sleep has been okay, but not great
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={surveyStyle.touchableOpacity}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: -10,
                    gap: 10
                }}>
                    <Image style={surveyStyle.emojiImage} source={require('../../assets/images/Emojis/neutral-emoji.png')}/>
                    <Text style={surveyStyle.emojiText}>
                        Sleep has been okay, but not great
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={surveyStyle.touchableOpacity}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: -10,
                    gap: 10
                }}>
                    <Image style={surveyStyle.emojiImage} source={require('../../assets/images/Emojis/neutral-emoji.png')}/>
                    <Text style={surveyStyle.emojiText}>
                        Having trouble sleeping 
                    </Text>
                </View>
            </TouchableOpacity>

            <View style={{
                marginTop: 80
            }}>
                <Text style={surveyStyle.surveyHeader}>
                    You’re all set
                </Text>
                <Text style={surveyStyle.surveyText}>
                    Thanks for sharing, your responses will help us recommend the right tools for you.
                </Text>
            </View>
            
            
            <View style={{
                alignSelf: 'center',
                marginTop: 50,
            }}>
                <Button text={'Go to Dashboard'} onPress={()=>{
                    router.replace('../dashboard')
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
                        Enjoy your experience on MindBridge!
                    </Text>
                </View>
            </View>    
            
        </SafeAreaView>
    )
}

export default fourthSurvey;

const surveyStyle = StyleSheet.create({
    surveyHeader:{
        fontFamily: 'serifRegular',
        fontSize: SIZES.medium,
        color: '#0B212C',
        fontWeight: 400,
        textAlign: 'center',
        marginBottom: 10,
    },
    surveyText:{
        fontFamily: 'poppinsRegular',
        fontSize: SIZES.extraSmall,
        color: '#0B212C',
        textAlign: 'center',
        marginBottom: 30
    },
    surveyInfo:{
        fontFamily: 'poppinsRegular',
        fontSize: 10,
        color: '#0B212C',
    },
    touchableOpacity:{
        width: 408,
        height: 56,
        padding: 16,
        borderRadius: 99,
        borderWidth: 1.5,
        borderColor: '#003148',
        marginTop: 15,
        alignSelf: 'center'
    },
    emojiImage:{
        width: 40,
        height: 40,
    },
    emojiText:{
        fontFamily: 'poppinsRegular',
        fontSize: SIZES.extraSmall,
        color: '#003148'
    }
})