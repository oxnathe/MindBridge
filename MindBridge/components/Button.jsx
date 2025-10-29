import { TouchableOpacity, Text } from "react-native"
import { COLORS, SIZES } from "../themes/theme";


const Button = ({text, buttonStyle, onPress}) =>{
    return(
        <TouchableOpacity onPress={onPress} style={{
            backgroundColor: '#003148',
            borderRadius: 10,
            height: 48,
            width: 400, 
            padding: 10, 
            justifyContent: 'center',
            marginVertical: 10, ...buttonStyle
        }}>
            <Text style={{
                color: '#ffffff',
                textAlign: 'center',
                fontWeight: 700,
                fontSize: SIZES.regular,
                fontFamily: 'poppinsBold'
            }}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

export default Button;