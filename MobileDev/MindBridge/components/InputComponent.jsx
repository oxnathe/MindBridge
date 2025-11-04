import { Platform, Text, TextInput, View } from "react-native";




const InputComponent = ({placeholder, onChangeText, keyboardType='default'}) => {
    return(

        <View>
            <TextInput style={{
                width: 400,
                height: 46,
                backgroundColor: "#F9F8F8",
                paddingBottom: 12, 
                paddingTop: 12, 
                paddingRight: 16, 
                paddingLeft: 20, 
                borderRadius: 6,
                borderBottom: 1,
                
                ...Platform.select({
                    ios: {
                        shadowColor: '#0031484D',
                        shadowOffset: {width: 2, height: 2},
                        shadowOpacity: 0.75,
                        shadowRadius: .5,
                    },
                    android: {
                        elevation: 5,
                    }
                })
            }}placeholder={placeholder}
            placeholderTextColor="#AFAFAF"
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            returnKeyType="done" 
            secureTextEntry={true}/>
        </View>
        
            
    )
}

export default InputComponent;