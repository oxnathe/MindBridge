import { SafeAreaView } from "react-native-safe-area-context"
import { Image, Text } from "react-native";
import { COLORS, SIZES } from "../themes/theme";


const Splash = ()=> {
    return(
        <SafeAreaView style={{
            backgroundColor: '#9DD4EF' ,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Image style={{
                height: 100,
                width: 100,
                alignSelf: 'center',
            }} source={require('../assets/images/Logo.png')}/>
            <Text style={{
                fontFamily: 'serifRegular',
                color: COLORS.textColor,
                fontSize: SIZES.largerXL
            }}>
                Welcome to MindBridge
            </Text>
            <Text style={{
                fontFamily: 'poppinsRegular',
                color: COLORS.neutralColor,
                fontSize: SIZES.regular
            }}>
                Bridging minds, Building wellness 
            </Text>
        </SafeAreaView>
    )
}

export default Splash;