import { Image, ScrollView, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SIZES } from "../../themes/theme";


import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';



const dashBoard = () =>{
    
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
                    backgroundColor: '#9DD4EF',
                    borderRadius: 10,
                    borderWidth: 1.5,
                    borderColor: '#00314866',
                    paddingHorizontal: 20,
                    marginTop: 20
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                        <View style={styles.header}>
                            <Text style={styles.greeting}>{currentTime}</Text>
                            <Text style={styles.greetingSubtitle}>How are you feeling today?</Text>
                        </View>
                        <View>
                            <Image style={{
                                width: 36.68,
                                height: 36.68,
                            }} source={require('../../assets/images/dashboard-Icon.png')}/>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 10    
                    }}>
                        <TouchableOpacity style={{
                            backgroundColor: '#003148',
                            borderRadius: 10,
                            height: 40,
                            width: 130, 
                            padding: 10, 
                            justifyContent: 'center',
                            marginVertical: 10,
                            paddingTop: 8,
                            paddingBottom: 8,
                            paddingLeft: 16,
                            paddingRight: 16,
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: 5
                            }}>
                                <Feather name="heart" size={16} color="white" />
                                <Text style={{
                                    fontFamily: 'poppinsBold',
                                    fontSize: 14,
                                    color: '#FFFFFF',
                                    fontWeight: 700
                                }}>Log mood</Text>
                            </View>

                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            backgroundColor: '#9DD4EF',
                            borderRadius: 10,
                            borderWidth: 1.5,
                            borderColor: '#061F2B',
                            height: 40,
                            width: 130, 
                            padding: 10, 
                            justifyContent: 'center',
                            marginVertical: 10,
                            paddingTop: 8,
                            paddingBottom: 8,
                            paddingLeft: 16,
                            paddingRight: 16,
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: 5,
                            }}>
                                <Feather name="book-open" size={24} color="#061F2B" />
                                <Text style={{
                                    fontFamily: 'poppinsBold',
                                    fontSize: 14,
                                    color: '#061F2B',
                                    fontWeight: 700
                                }}>Journal</Text>
                            </View>

                        </TouchableOpacity>
                    </View>
                    

                </View>

            
               <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
                gap: 10,
               }}>
                    <View style={{
                        backgroundColor: '#FDF2F8',
                        width: 170,
                        height: 76,
                        borderRadius: 7,
                        padding: 16,
                        flexDirection: 'row',
                        alignItems: "center",
                        shadowColor: '#000',
                        shadowOffset: {width: 0, height: 5},
                        shadowOpacity: 0.1,
                        shadowRadius: 4,
                        elevation: 3,
                        gap: 10,      
                    }}>
                        <View style={{
                            width: 40,
                            height: 40,
                            borderRadius: 8,
                            backgroundColor: '#59168B',
                            justifyContent: "center",
                            gap: 10,
                        }}>
                            <Feather style={{
                                alignSelf: 'center'
                            }} name="heart" size={24} color="white" />
                        </View>
                        <View>
                            <Text style={{
                                fontFamily: 'poppinsRegular',
                                color: '#000000B2',
                                fontSize: 14
                            }}>
                                Today's Mood
                            </Text>
                            <Text style={{
                                fontFamily: 'poppinsMedium',
                                color: '#000000B2',
                                fontSize: 20
                            }}>
                                Good
                            </Text>
                        </View>
                    </View>
                    <View style={{
                        backgroundColor: '#FDF2F8',
                        width: 170,
                        height: 76,
                        borderRadius: 7,
                        padding: 16,
                        flexDirection: 'row',
                        alignItems: "center",
                        marginHorizontal: 10,
                        shadowColor: '#000',
                        shadowOffset: {width: 0, height: 5},
                        shadowOpacity: 0.1,
                        shadowRadius: 4,
                        elevation: 3,
                        gap: 10,  
                    }}>
                        <View style={{
                            width: 40,
                            height: 40,
                            borderRadius: 8,
                            backgroundColor: '#59168B',
                            justifyContent: "center",
                        }}>
                            <Feather style={{
                                alignSelf: 'center'
                            }} name="award" size={24} color="white" />
                        </View>
                        <View>
                            <Text style={{
                                fontFamily: 'poppinsRegular',
                                color: '#000000B2',
                                fontSize: 14
                            }}>
                                Jounal Streak
                            </Text>
                            <Text style={{
                                fontFamily: 'poppinsMedium',
                                color: '#000000B2',
                                fontSize: 20
                            }}>
                                7 days
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={{
                    width: 370,
                    height: 310,
                    borderRadius: 16,
                    padding: 16,
                    backgroundColor: '#CFE2FF',
                    marginTop: 20,
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                        <Text style={{
                            fontFamily: 'serifRegular',
                            fontSize: 18,
                            color: '#0A0A0A'
                        }}>
                            Quick Actions
                        </Text>

                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 2
                        }}>
                            <Image style={{
                                width: 16,
                                height: 16
                            }} source={require('../../assets/images/dashboard-Icon.png')}/>
                            <Image style={{
                                width: 16,
                                height: 16
                            }} source={require('../../assets/images/dashboard-Icon.png')}/>
                        </View>
                    </View>
                    

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 10
                    }}>
                        <View style={{
                            width: 154,
                            height: 107,
                            borderRadius: 16,
                            borderWidth: 1.4,
                            padding: 16,
                            backgroundColor: '#EFF6FF',
                            justifyContent: 'center',
                            marginTop: 10
                        }}>
                            <Feather style={{
                                alignSelf: 'center'
                            }} name="book-open" size={32} color="#061F2B" />
                            <Text style={{
                                fontFamily: 'poppinsMedium',
                                fontSize: 14,
                                color: '#003148',
                                textAlign: "center",
                                marginTop: 5
                            }}>
                                Journal
                            </Text>
                        </View>
                        <View style={{
                            width: 154,
                            height: 107,
                            borderRadius: 16,
                            borderWidth: 1.4,
                            padding: 16,
                            backgroundColor: '#EFF6FF',
                            justifyContent: 'center',
                            marginTop: 10
                        }}>
                            <Feather style={{
                                alignSelf: 'center'
                            }} name="heart" size={32} color="#061F2B" />
                            <Text style={{
                                fontFamily: 'poppinsMedium',
                                fontSize: 14,
                                color: '#003148',
                                textAlign: "center",
                                marginTop: 5
                            }}>
                                Log Mood
                            </Text>
                        </View>    
                    </View>

                    

                    
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 10
                    }}>
                        <View style={{
                            width: 154,
                            height: 107,
                            borderRadius: 16,
                            borderWidth: 1.4,
                            padding: 16,
                            backgroundColor: '#EFF6FF',
                            justifyContent: 'center',
                            marginTop: 10
                        }}>
                            <Feather style={{
                                alignSelf: 'center'
                            }} name="message-circle" size={32} color="#061F2B" />
                            <Text style={{
                                fontFamily: 'poppinsMedium',
                                fontSize: 14,
                                color: '#003148',
                                textAlign: "center",
                                marginTop: 5
                            }}>
                                Community
                            </Text>
                        </View>

                        <View style={{
                            width: 154,
                            height: 107,
                            borderRadius: 16,
                            borderWidth: 1.4,
                            padding: 16,
                            backgroundColor: '#EFF6FF',
                            justifyContent: 'center',
                            marginTop: 10
                        }}>
                            <FontAwesome5 style={{
                                alignSelf: 'center'
                            }} name="brain" size={32} color="black" />
                            <Text style={{
                                fontFamily: 'poppinsMedium',
                                fontSize: 14,
                                color: '#003148',
                                textAlign: "center",
                                marginTop: 5
                            }}>
                                Meditate
                            </Text>
                        </View>
                        
                    </View>
                </View>

                <View style={{
                    backgroundColor: '#FDF2F8',
                    borderRadius: 7,
                    width: 380,
                    height: 132,
                    padding: 16,
                    marginTop: 20,
                    shadowColor: '#0000001F',
                    shadowOffset: {width: 0, height: 5},
                    shadowOpacity: 0.3,
                    shadowRadius: 4,
                    elevation: 3
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                        <View style={styles.header}>
                            <Text style={{
                                fontFamily: 'poppinsSemiBold',
                                fontSize: 16,
                                color: '#000000'
                            }}>View Insights</Text>
                            <Text style={styles.greetingSubtitle}>Track your progress and patterns</Text>
                        </View>
                        <View>
                            <Image style={{
                                width: 40,
                                height: 40,
                            }} source={require('../../assets/images/streamline_graph-arrow-increase.png')}/>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: "center",
                        gap: 5
                    }}>
                        <Text  style={{
                            fontFamily: 'poppinsMedium',
                            fontSize: 14,
                            textDecorationStyle: 'solid',
                            textDecorationLine: 'underline'
                        }}>
                            View Analytics 
                        </Text>
                        <AntDesign name="arrow-right" size={16} color="#59168B" />
                    </View>
                </View>


                <View style={{
                    backgroundColor: '#FDF2F8',
                    borderRadius: 7,
                    width: 380,
                    height: 132,
                    padding: 16,
                    marginTop: 20,
                    shadowColor: '#0000001F',
                    shadowOffset: {width: 0, height: 5},
                    shadowOpacity: 0.3,
                    shadowRadius: 4,
                    elevation: 3
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                        <View style={styles.header}>
                            <Text style={{
                                fontFamily: 'poppinsSemiBold',
                                fontSize: 16,
                                color: '#000000'
                            }}>Join Community</Text>
                            <Text style={styles.greetingSubtitle}>Connect with supportive peers</Text>
                        </View>
                        <View>
                            <Image style={{
                                width: 40,
                                height: 40,
                            }} source={require('../../assets/images/line-community.png')}/>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: "center",
                        gap: 5
                    }}>
                        <Text  style={{
                            fontFamily: 'poppinsMedium',
                            fontSize: 14,
                            textDecorationStyle: 'solid',
                            textDecorationLine: 'underline'
                        }}>
                            Explore 
                        </Text>
                        <AntDesign name="arrow-right" size={16} color="#59168B" />
                    </View>
                </View>


                <View style={{
                    backgroundColor: '#FDF2F8',
                    borderRadius: 7,
                    width: 380,
                    height: 132,
                    padding: 16,
                    marginTop: 20,
                    shadowColor: '#0000001F',
                    shadowOffset: {width: 0, height: 5},
                    shadowOpacity: 0.3,
                    shadowRadius: 4,
                    elevation: 3
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                        <View style={styles.header}>
                            <Text style={{
                                fontFamily: 'poppinsSemiBold',
                                fontSize: 16,
                                color: '#000000'
                            }}>Personalized Advice</Text>
                            <Text style={styles.greetingSubtitle}>Get tailored recommendations</Text>
                        </View>
                        <View>
                            <Image style={{
                                width: 40,
                                height: 40,
                            }} source={require('../../assets/images/personalized.png')}/>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: "center",
                        gap: 5
                    }}>
                        <Text  style={{
                            fontFamily: 'poppinsMedium',
                            fontSize: 14,
                            textDecorationStyle: 'solid',
                            textDecorationLine: 'underline'
                        }}>
                            View Advice
                        </Text>
                        <AntDesign name="arrow-right" size={16} color="#59168B" />
                    </View>
                </View>

                <View style={{
                    width: 380,
                    height: 280,
                    borderRadius: 16,
                    padding: 16,
                    backgroundColor: '#CFE2FF',
                    marginTop: 20,
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                        <Text style={{
                            fontFamily: 'serifRegular',
                            fontSize: 18,
                            color: '#0A0A0A'
                        }}>
                            Your Mood Trend
                        </Text>

                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 2
                        }}>
                            <FontAwesome6 name="arrow-trend-up" size={16} color="black" />
                        </View>
                    </View>
                    
                        <View style={{
                            width: 332,
                            height: 192,
                            borderRadius: 16,
                            borderWidth: 1.4,
                            padding: 16,
                            backgroundColor: '#EFF6FF',
                            justifyContent: 'center',
                            marginTop: 10
                        }}>
                            <FontAwesome6 style={{
                                alignSelf: 'center'
                            }} name="arrow-trend-up" size={32} color="black" />
                            <Text style={{
                                fontFamily: 'poppinsRegular',
                                fontSize: 14,
                                color: '#003148',
                                textAlign: "center",
                                marginTop: 5
                            }}>
                                Mood chart visualization
                            </Text>
                            <Text style={{
                                fontFamily: 'poppinsRegular',
                                fontSize: 14,
                                color: '#003148',
                                textAlign: "center",
                                marginTop: 5
                            }}>
                                (7-day overview)
                            </Text>
                        </View>
                </View>

                <View style={{
                    width: 380,
                    height: 132,
                    backgroundColor: '#9DD4EF',
                    padding: 16,
                    borderRadius: 16,
                    borderWidth: 1,
                    borderColor: '#00314866',
                    marginVertical: 10
                }}>
                    <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: 5,
                        gap: 10
                    }}>
                        <Image style={{
                            width: 20,
                            height: 20
                        }} source={require('../../assets/images/dashboard-Icon.png')}/>
                        <Text style={{
                            fontFamily: 'serifRegular',
                            fontSize: 16,
                            color: '#061F2B'
                        }}>
                            Daily Inspiration
                        </Text>
                    </View>
                    <Text style={{
                        fontFamily: 'poppinsItalic',
                        fontSize: 14,
                        fontWeight: 800,
                        color: '#061F2B',
                        marginVertical: 5
                    }}>
                        "The greatest glory in living lies not in never falling, but in rising every time we fall."
                    </Text>
                    <Text style={{
                        fontFamily: 'poppinsSemiBold',
                        fontSize: 14,
                        color: "#061F2B",
                        marginVertical: 5
                    }}>
                        - Nelson Mandela
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default dashBoard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 20,
    marginBottom: 30,
  },
  greeting: {
    fontFamily: 'serifRegular',
    fontSize: SIZES.large,
    color: '#0B212C',
    marginBottom: 8,
  },
  greetingSubtitle: {
    fontFamily: 'poppinsMedium',
    fontSize: 12,
    color: '#061F2B'
  },
  subtitle: {
    fontFamily: 'poppinsRegular',
    fontSize: SIZES.medium,
    color: '#666',
  },
  sectionTitle: {
    fontFamily: 'serifRegular',
    fontSize: SIZES.medium,
    color: '#0B212C',
    marginBottom: 16,
    fontWeight: '600',
  },
  // Quick Actions Styles
  quickActions: {
    marginBottom: 30,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#0B212C',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginHorizontal: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  actionButtonText: {
    fontFamily: 'poppinsSemiBold',
    fontSize: SIZES.small,
    color: '#FFFFFF',
  },
  // Community Section Styles
  communitySection: {
    marginBottom: 30,
  },
  communityCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  communityTitle: {
    fontFamily: 'serifRegular',
    fontSize: SIZES.regular,
    color: '#0B212C',
    marginBottom: 8,
    fontWeight: '600',
  },
  communityText: {
    fontFamily: 'poppinsRegular',
    fontSize: SIZES.small,
    color: '#666',
    marginBottom: 16,
    lineHeight: 20,
  },
  communityButton: {
    backgroundColor: '#E8F4FD',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  communityButtonText: {
    fontFamily: 'poppinsSemiBold',
    fontSize: SIZES.small,
    color: '#0B212C',
  },
  // Insights Section Styles
  insightsSection: {
    marginBottom: 30,
  },
  insightsCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  insightsTitle: {
    fontFamily: 'serifRegular',
    fontSize: SIZES.regular,
    color: '#0B212C',
    marginBottom: 16,
    fontWeight: '600',
  },
  moodChart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 80,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  moodBarContainer: {
    alignItems: 'center',
    flex: 1,
  },
  moodBar: {
    width: 12,
    backgroundColor: '#0B212C',
    borderRadius: 6,
    marginBottom: 8,
  },
  moodDay: {
    fontFamily: 'poppinsRegular',
    fontSize: 10,
    color: '#666',
  },
  insightsButton: {
    backgroundColor: '#F0F9FF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  insightsButtonText: {
    fontFamily: 'poppinsSemiBold',
    fontSize: SIZES.small,
    color: '#0B212C',
  },
  // Personalized Section Styles
  personalizedSection: {
    marginBottom: 30,
  },
  adviceCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  adviceTitle: {
    fontFamily: 'serifRegular',
    fontSize: SIZES.regular,
    color: '#0B212C',
    marginBottom: 8,
    fontWeight: '600',
  },
  adviceText: {
    fontFamily: 'poppinsRegular',
    fontSize: SIZES.small,
    color: '#666',
    marginBottom: 16,
    lineHeight: 20,
  },
  adviceButton: {
    backgroundColor: '#F0F4FF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  adviceButtonText: {
    fontFamily: 'poppinsSemiBold',
    fontSize: SIZES.small,
    color: '#0B212C',
  },
  // Inspiration Section Styles
  inspirationSection: {
    marginBottom: 30,
  },
  inspirationCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  inspirationQuote: {
    fontFamily: 'serifRegular',
    fontSize: SIZES.regular,
    color: '#0B212C',
    fontStyle: 'italic',
    marginBottom: 8,
    lineHeight: 22,
  },
  inspirationAuthor: {
    fontFamily: 'poppinsRegular',
    fontSize: SIZES.small,
    color: '#666',
    textAlign: 'right',
  },
  bottomSpacing: {
    height: 20,
  },
});