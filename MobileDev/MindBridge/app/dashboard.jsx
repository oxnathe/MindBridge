import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';



const dashBoard = () =>{
    return(
        <SafeAreaView>

            <ScrollView>
               <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
               }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Image style={{
                            width: 40,
                            height: 40,
                        }} source={require('../assets/images/dashboard-logo.png')}/>
                        <Text>
                            MindBridge
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <FontAwesome name="user-circle-o" size={24} color="black" />
                        <Ionicons name="settings" size={24} color="black" />
                    </View>
               </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default dashBoard;