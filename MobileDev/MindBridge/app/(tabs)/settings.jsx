import { Image, ScrollView, Text, View, TouchableOpacity, TextInput, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SIZES } from "../../themes/theme";


import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useState } from "react";



const SettingsSreen = () =>{

    const [isSwitchOn, setIsSwitchOn] = useState(false)

    const toggleSwitch = () => setIsSwitchOn(previousState => !previousState);
    


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
                    Settings
                </Text>
                <Text style={{
                    fontFamily: 'poppinsRegular',
                    fontSize: 12,
                    color: '#061F2BB2'
                }}>
                    Manage your acount and preferences
                </Text>
               </View>


                <View style={{
                    width: 380,
                    height: 244,
                    padding: 16,
                    borderRadius: 16,
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 5},
                    shadowOpacity: 0.1,
                    shadowRadius: 4,
                    elevation: 3,
                    marginTop: 10
                }}>
                    <Text style={{
                        fontFamily: 'poppinsMedium',
                        fontSize: 16,
                        color: '#0A0A0A'
                    }}>
                        Preferences
                    </Text>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: "center",
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 5
                        }}>
                            <Feather name="bell" size={24} color="black" />
                            <View>
                                <Text>
                                    Push Notifications
                                </Text>
                                <Text>
                                    Receive daily mood reminders
                                </Text>
                            </View>
                        </View>
                        
                        <Switch 
                            onValueChange={toggleSwitch}
                            value={isSwitchOn}
                            trackColor={{ false: '#CBCED4', true: '#59168B' }}
                            thumbColor={isSwitchOn ? '#f5dd4b' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                        />
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default SettingsSreen;