import { Platform, StyleSheet, Text, TextInput, View } from "react-native";




const InputComponent = ({
    placeholder, 
    value,
    onChangeText, 
    keyboardType='default',
    autoCapitalize = 'sentences',
    secureTextEntry = false,
    onBlur,
    hasError = false,
    ...props
}) => {
    return(

        <View>
            <TextInput 
            style={[
                styles.input,
                hasError && styles.inputError
            ]}
            placeholder={placeholder}
            placeholderTextColor="#AFAFAF"
            value={value}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            autoCapitalize={autoCapitalize}
            returnKeyType="done" 
            secureTextEntry={secureTextEntry}
            onBlur={onBlur}
            editable={true}
            {...props}
            />
        </View>
        
            
    )
}

export default InputComponent;

const styles = StyleSheet.create({
    input: {
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
    },
    inputError: {
        borderColor: '#FF3B30',
        backgroundColor: '#FFF9F9',
    }
})