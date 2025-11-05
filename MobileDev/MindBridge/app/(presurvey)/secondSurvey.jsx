import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { router } from "expo-router";

import { SIZES, COLORS } from "../../themes/theme";
import Button from "../../components/Button";




const SecondSurvey = ()=>{
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
                    How are you feeling today?
                </Text>
                <Text style={surveyStyle.surveyText}>
                    Choose the emotion that best describes your current mood.
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
                        Calm
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
                        Neutral
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
                    <Image style={surveyStyle.emojiImage} source={require('../../assets/images/Emojis/happy-emoji.png')}/>
                    <Text style={surveyStyle.emojiText}>
                        Happy
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
                    <Image style={surveyStyle.emojiImage} source={require('../../assets/images/Emojis/stressed-emoji.png')}/>
                    <Text style={surveyStyle.emojiText}>
                        Stressed
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
                    <Image style={surveyStyle.emojiImage} source={require('../../assets/images/Emojis/tired-emoji.png')}/>
                    <Text style={surveyStyle.emojiText}>
                        Tired
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
                    <Image style={surveyStyle.emojiImage} source={require('../../assets/images/Emojis/sad-emoji.png')}/>
                    <Text style={surveyStyle.emojiText}>
                        Sad
                    </Text>
                </View>
            </TouchableOpacity>

            <View style={{
                alignSelf: 'center',
                marginTop: 50,
            }}>
                <Button text={'Next'} onPress={()=>{
                    router.replace('./thirdSurvey')
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
                        It’s okay if it changes, this just helps us understand your day.
                    </Text>
                </View>
            </View>    
            
        </SafeAreaView>
    )
}

export default SecondSurvey;

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