import { Image, ScrollView, Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SIZES } from "../../themes/theme";


import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';



const MoodScreen = () =>{
    
    const currentTime = "Good Day, Friend!";
    const moodData = [
        { day: 'M', mood: 4 }, { day: 'T', mood: 3 }, { day: 'W', mood: 5 },
        { day: 'T', mood: 2 }, { day: 'F', mood: 4 }, { day: 'S', mood: 5 },
        { day: 'S', mood: 3 }
    ];

    

    return(
        <SafeAreaView>

            <ScrollView style={{
                paddingHorizontal: 20
            }} showsVerticalScrollIndicator={false}>
               <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
               }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 10
                    }}>
                        <Image style={{
                            width: 40,
                            height: 40,
                        }} source={require('../../assets/images/dashboard-logo.png')}/>
                        <Text style={{
                            fontFamily: 'serifRegular',
                            fontSize: SIZES.large,
                            color: '#013E5B'
                        }}>
                            MindBridge
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 10
                    }}>
                        <FontAwesome name="user-circle-o" size={24} color="black" />
                        <Ionicons name="settings" size={24} color="black" />
                    </View>
               </View>

               <View style={{
                marginVertical: 10,
               }}>
                <Text style={{
                    fontFamily: 'serifRegular',
                    fontSize: 24,
                    color: '#061F2B',
                }}>
                    How are you feeling?
                </Text>
                <Text style={{
                    fontFamily: 'poppinsRegular',
                    fontSize: 12,
                    color: '#061F2BB2'
                }}>
                    Track your mood to understand your emotional patterns
                </Text>
               </View>

                <View style={{
                    backgroundColor: '#9DD4EF',
                    borderRadius: 10,
                    borderWidth: 1.5,
                    borderColor: '#00314866',
                    paddingHorizontal: 20,
                    marginTop: 20,
                    width: 380,
                    height: 190
                }}>
                    
                    <Text style={{
                        fontFamily: 'serifRegular',
                        fontSize: 18,
                        color: '#061F2B',
                        textAlign: 'center',
                        marginVertical: 10
                    }}>
                        Select your mood
                    </Text>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: "center",
                        gap: 5
                    }}>
                        <View style={{
                            width: 67,
                            height: 98,
                            borderRadius: 8,
                            borderWidth: 1,
                            borderColor: '#00314866',
                            backgroundColor: '#FFFFFF',
                            justifyContent: 'center'
                        }}>
                            <Image style={{
                                width: 32,
                                height: 32,
                                alignSelf: 'center',
                                marginBottom: 5
                            }} source={require('../../assets/images/Amazing.png')}/>
                            <Text style={{
                                fontFamily: 'poppinsMedium',
                                fontSize: 12,
                                fontWeight: 500,
                                textAlign: "center",
                                color: '#061F2B'
                            }}>
                                Amazing
                            </Text>
                        </View>
                        <View style={{
                            width: 67,
                            height: 98,
                            borderRadius: 8,
                            borderWidth: 1,
                            borderColor: '#00314866',
                            backgroundColor: '#FFFFFF',
                            justifyContent: 'center'
                        }}>
                            <Image style={{
                                width: 32,
                                height: 32,
                                alignSelf: 'center',
                                marginBottom: 5
                            }} source={require('../../assets/images/Good.png')}/>
                            <Text style={{
                                fontFamily: 'poppinsMedium',
                                fontSize: 12,
                                fontWeight: 500,
                                textAlign: "center",
                                color: '#061F2B'
                            }}>
                                Good
                            </Text>
                        </View>
                    
                        <View style={{
                            width: 67,
                            height: 98,
                            borderRadius: 8,
                            borderWidth: 1,
                            borderColor: '#00314866',
                            backgroundColor: '#FFFFFF',
                            justifyContent: 'center'
                        }}>
                            <Image style={{
                                width: 32,
                                height: 32,
                                alignSelf: 'center',
                                marginBottom: 5
                            }} source={require('../../assets/images/Okay.png')}/>
                            <Text style={{
                                fontFamily: 'poppinsMedium',
                                fontSize: 12,
                                fontWeight: 500,
                                textAlign: "center",
                                color: '#061F2B'
                            }}>
                                Okay
                            </Text>
                        </View>
                        <View style={{
                            width: 67,
                            height: 98,
                            borderRadius: 8,
                            borderWidth: 1,
                            borderColor: '#00314866',
                            backgroundColor: '#FFFFFF',
                            justifyContent: 'center'
                        }}>
                            <Image style={{
                                width: 32,
                                height: 32,
                                alignSelf: 'center',
                                marginBottom: 5
                            }} source={require('../../assets/images/Bad.png')}/>
                            <Text style={{
                                fontFamily: 'poppinsMedium',
                                fontSize: 12,
                                fontWeight: 500,
                                textAlign: "center",
                                color: '#061F2B'
                            }}>
                                Bad
                            </Text>
                        </View>
                        <View style={{
                            width: 67,
                            height: 98,
                            borderRadius: 8,
                            borderWidth: 1,
                            borderColor: '#00314866',
                            backgroundColor: '#FFFFFF',
                            justifyContent: 'center'
                        }}>
                            <Image style={{
                                width: 32,
                                height: 32,
                                alignSelf: 'center',
                                marginBottom: 5
                            }} source={require('../../assets/images/Terrible.png')}/>
                            <Text style={{
                                fontFamily: 'poppinsMedium',
                                fontSize: 12,
                                fontWeight: 500,
                                textAlign: "center",
                                color: '#061F2B'
                            }}>
                                Terrible
                            </Text>
                        </View>
                    </View>

                </View>
                
            
                <View style={{
                    marginVertical: 10,
                }}>
                    <Text style={{
                        fontFamily: 'serifRegular',
                        fontSize: 16,
                        color: '#1E1E1E'
                    }}>
                        Add a note (optional)
                    </Text>
                    <TextInput
                        style={{
                            minWidth: 380,
                            minHeight: 80,
                            borderRadius: 8,
                            borderWidth: 1,
                            paddingVertical: 8,
                            paddingHorizontal: 16,
                            backgroundColor: '#FDF2F8',
                            marginVertical: 5
                        }}
                        placeholder="What is on your mind"
                        placeholderTextColor={'#A3A3A3'}
                    />
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 10
                    }}>
                        <TouchableOpacity style={{
                            height: 37,
                            width: 170,
                            borderRadius: 8,
                            borderWidth: 1,
                            paddingVertical: 8,
                            paddingHorizontal: 16,
                            backgroundColor: '#59168B'
                        }}>
                            <Text style={{
                                fontFamily: 'poppinsBold',
                                fontWeight: 700,
                                color: '#F5F5F5',
                                fontSize: 14
                            }}>
                                Save Mood
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            height: 37,
                            width: 170,
                            borderRadius: 8,
                            borderWidth: 1.5,
                            borderColor: '#59168B',
                            paddingVertical: 8,
                            paddingHorizontal: 16,
                            backgroundColor: 'white'
                        }}>
                            <Text style={{
                                fontFamily: 'poppinsMedium',
                                fontWeight: 500,
                                color: '#59168B',
                                fontSize: 14
                            }}>
                                Cancel
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View>
                    <Text style={{
                        fontFamily: 'serifRegular',
                        fontSize: 18,
                        color: '#000000',
                        marginBottom: 10
                    }}>
                        Your Mood History
                    </Text>
                    <View>
                        <View style={{
                            width: 360,
                            height: 80,
                            borderRadius: 10,
                            padding: 16,
                            backgroundColor: '#EFF6FF',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginHorizontal: 10,
                            shadowColor: '#000',
                            shadowOffset: {width: 0, height: 5},
                            shadowOpacity: 0.1,
                            shadowRadius: 4,
                            elevation: 3,
                            marginTop: 10
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: 10,
                            }}>
                                <Image style={{
                                    width: 40,
                                    height: 40,
                                }} source={require('../../assets/images/Moods/Good.png')}/>
                                <View>
                                    <Text style={{
                                        fontFamily: 'poppinsSemibold',
                                        fontSize: 18,
                                        color: '#0A0A0A',
                                        marginBottom: 5
                                    }}>
                                        Good
                                    </Text>
                                    <Text style={{
                                        fontFamily: 'poppinsRegular',
                                        fontSize: 12,
                                        color: '#4A5565'
                                    }}>
                                        Had a productive day at work
                                    </Text>
                                </View>
                            </View>
                            <Text style={{
                                    fontFamily: 'poppinsRegular',
                                    fontSize: 14,
                                    color: '#6A7282'
                                }}>
                                Oct 23
                            </Text>
                        </View>
                        <View style={{
                            width: 360,
                            height: 80,
                            borderRadius: 10,
                            padding: 16,
                            backgroundColor: '#EFF6FF',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginHorizontal: 10,
                            shadowColor: '#000',
                            shadowOffset: {width: 0, height: 5},
                            shadowOpacity: 0.1,
                            shadowRadius: 4,
                            elevation: 3,
                            marginTop: 10
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: 10,
                            }}>
                                <Image style={{
                                    width: 40,
                                    height: 40,
                                }} source={require('../../assets/images/Moods/Amazing.png')}/>
                                <View>
                                    <Text style={{
                                        fontFamily: 'poppinsSemibold',
                                        fontSize: 18,
                                        color: '#0A0A0A',
                                        marginBottom: 5
                                    }}>
                                        Amazing
                                    </Text>
                                    <Text style={{
                                        fontFamily: 'poppinsRegular',
                                        fontSize: 12,
                                        color: '#4A5565'
                                    }}>
                                        Great time with friends
                                    </Text>
                                </View>
                            </View>
                            <Text style={{
                                    fontFamily: 'poppinsRegular',
                                    fontSize: 14,
                                    color: '#6A7282'
                                }}>
                                Oct 22
                            </Text>
                        </View>
                        <View style={{
                            width: 360,
                            height: 80,
                            borderRadius: 10,
                            padding: 16,
                            backgroundColor: '#EFF6FF',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginHorizontal: 10,
                            shadowColor: '#000',
                            shadowOffset: {width: 0, height: 5},
                            shadowOpacity: 0.1,
                            shadowRadius: 4,
                            elevation: 3,
                            marginTop: 10
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: 10,
                            }}>
                                <Image style={{
                                    width: 40,
                                    height: 40,
                                }} source={require('../../assets/images/Moods/Okay.png')}/>
                                <View>
                                    <Text style={{
                                        fontFamily: 'poppinsSemibold',
                                        fontSize: 18,
                                        color: '#0A0A0A',
                                        marginBottom: 5
                                    }}>
                                        Okay
                                    </Text>
                                    <Text style={{
                                        fontFamily: 'poppinsRegular',
                                        fontSize: 12,
                                        color: '#4A5565'
                                    }}>
                                        Feeling a bit tired
                                    </Text>
                                </View>
                            </View>
                            <Text style={{
                                    fontFamily: 'poppinsRegular',
                                    fontSize: 14,
                                    color: '#6A7282'
                                }}>
                                Oct 21
                            </Text>
                        </View>
                        <View style={{
                            width: 360,
                            height: 80,
                            borderRadius: 10,
                            padding: 16,
                            backgroundColor: '#EFF6FF',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginHorizontal: 10,
                            shadowColor: '#000',
                            shadowOffset: {width: 0, height: 5},
                            shadowOpacity: 0.1,
                            shadowRadius: 4,
                            elevation: 3,
                            marginTop: 10
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: 10,
                            }}>
                                <Image style={{
                                    width: 40,
                                    height: 40,
                                }} source={require('../../assets/images/Moods/Good.png')}/>
                                <View>
                                    <Text style={{
                                        fontFamily: 'poppinsSemibold',
                                        fontSize: 18,
                                        color: '#0A0A0A',
                                        marginBottom: 5
                                    }}>
                                        Good
                                    </Text>
                                    <Text style={{
                                        fontFamily: 'poppinsRegular',
                                        fontSize: 12,
                                        color: '#4A5565'
                                    }}>
                                        Morning walk helped my mood
                                    </Text>
                                </View>
                            </View>
                            <Text style={{
                                    fontFamily: 'poppinsRegular',
                                    fontSize: 14,
                                    color: '#6A7282'
                                }}>
                                Oct 20
                            </Text>
                        </View>
                        <View style={{
                            width: 360,
                            height: 80,
                            borderRadius: 10,
                            padding: 16,
                            backgroundColor: '#EFF6FF',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginHorizontal: 10,
                            shadowColor: '#000',
                            shadowOffset: {width: 0, height: 5},
                            shadowOpacity: 0.1,
                            shadowRadius: 4,
                            elevation: 3,
                            marginTop: 10
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: 10,
                            }}>
                                <Image style={{
                                    width: 40,
                                    height: 40,
                                }} source={require('../../assets/images/Moods/Bad.png')}/>
                                <View>
                                    <Text style={{
                                        fontFamily: 'poppinsSemibold',
                                        fontSize: 18,
                                        color: '#0A0A0A',
                                        marginBottom: 5
                                    }}>
                                        Bad
                                    </Text>
                                    <Text style={{
                                        fontFamily: 'poppinsRegular',
                                        fontSize: 12,
                                        color: '#4A5565'
                                    }}>
                                        Stressful day
                                    </Text>
                                </View>
                            </View>
                            <Text style={{
                                    fontFamily: 'poppinsRegular',
                                    fontSize: 14,
                                    color: '#6A7282'
                                }}>
                                Oct 19
                            </Text>
                        </View>
                    </View>
                </View>


                <View style={{
                    width: 380,
                    height: 98,
                    backgroundColor: '#9DD4EF',
                    padding: 16,
                    borderRadius: 16,
                    borderWidth: 1,
                    borderColor: '#00314866',
                    marginVertical: 10
                }}>
                    <Text style={{
                        fontFamily: 'serifRegular',
                        fontSize: 18,
                        color: '#061F2B'
                    }}>
                        Mood Insight
                    </Text>
                    <Text style={{
                        fontFamily: 'poppinsItalic',
                        fontSize: 14,
                        fontWeight: 800,
                        color: '#061F2B',
                        marginVertical: 5
                    }}>
                        You've been feeling good or better 80% of this week. Keep up the positive momentum!
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default MoodScreen;