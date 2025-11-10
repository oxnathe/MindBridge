import { Image, StyleSheet, Text, View, Alert, Platform, TextInput, KeyboardAvoidingView,} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import InputComponent from "../../components/InputComponent"
import { SIZES } from "../../themes/theme"
import { useState } from "react"
import { useLocalSearchParams , router } from "expo-router"

import Button from "../../components/Button"
import { firebaseAuth } from "../../services/firebaseAuth"


const CreatePassword = () =>{

    const params = useLocalSearchParams();
    const email = params.email;

    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [passwordVisible, setPasswordVisible] =useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)

    const validatePassword = (password) => {
        const minLength = 6; // Firebase minimum
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumbers = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

        return {
        isValid: password.length >= minLength && hasUpperCase && hasLowerCase && hasNumbers,
        minLength: password.length >= minLength,
        hasUpperCase,
        hasLowerCase,
        hasNumbers,
        hasSpecialChar
        };
    };

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
    }));

    if (errors[field]) {
        setErrors(prev => ({
        ...prev,
        [field]: ''
        }));
    }
    };

    const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    const passwordValidation = validatePassword(formData.password);
    
    if (!formData.password) {
        newErrors.password = 'Password is required';
        isValid = false;
    } else if (!passwordValidation.isValid) {
        newErrors.password = 'Password does not meet requirements';
        isValid = false;
    }

    if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
        isValid = false;
    } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
        isValid = false;
    }

    setErrors(newErrors);
    return isValid;
    };

    const handleCreatePassword = async () => {
    if (!validateForm()) {
        Alert.alert('Validation Error', 'Please fix all errors before submitting');
        return;
    }

    setLoading(true);
    try {
        const result = await firebaseAuth.updatePassword(formData.password);
        Alert.alert('Success', result.message);
        
        // Navigate to success page
        router.push('./password-success');
    } catch (error) {
        Alert.alert('Error', error.message);
    } finally {
        setLoading(false);
    }
    };

    const passwordValidation = validatePassword(formData.password);

    return(
        <SafeAreaView style={{
            flex: 1,
            alignItems: "center",
            marginTop: 80,
        }}>
            <KeyboardAvoidingView>
                <View>
                    <Text style={formStyles.formHeader}>
                        Create a new password
                    </Text>
                    <Text style={formStyles.formText}>
                        You’re almost done choose a new password {'\n'} to secure your account
                    </Text>
                </View>
                    <View style={{
                        marginTop: 10,
                    }}>
                        <Text style={formStyles.label}>
                            Password
                        </Text>
                        <TextInput style={[
                            formStyles.inputPassword,
                            errors.password && formStyles.inputError
                        ]} 
                        placeholder="Enter Password"
                        placeholderTextColor= '#AFAFAF'
                        returnKeyType="done"
                        secureTextEntry={!passwordVisible}
                        onChangeText={(value) => handleInputChange('password', value)}
                        autoCapitalize="none"
                        />
                        <Image style={{
                            width: 16,
                            height: 16,
                            position: "absolute",
                            top: 40,
                            left: 370,
                        }} source={require('../../assets/images/eye-alt.png')} 
                            onPress={() => setPasswordVisible(!passwordVisible)}
                        />
                        
                    </View>

                    <View style={{
                        marginTop: 10,
                        marginBottom: 300,
                    }}>
                        <Text style={formStyles.label}>
                            Confirm Password
                        </Text>
                        <TextInput 
                        style={[
                            formStyles.inputPassword,
                            errors.confirmPassword && formStyles.inputError
                        ]}
                        placeholder="Confirm Password"
                        placeholderTextColor='#AFAFAF'
                        returnKeyType="done"
                        secureTextEntry={!confirmPasswordVisible}
                        value={formData.confirmPassword}
                        onChangeText={(value) => handleInputChange('confirmPassword', value)}
                        autoCapitalize="none"
                        />
                        <Image style={{
                            width: 16,
                            height: 16,
                            position: "absolute",
                            top: 40,
                            left: 370,
                        }} source={require('../../assets/images/eye-alt.png')}
                        onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}/>
                        <Text style={{
                                fontFamily: 'poppinsRegular',
                                fontSize: '10',
                            }}>
                            Must contain at least a uppercase, a lowercase, a character
                        </Text>
                        {errors.confirmPassword && (
                            <Text style={formStyles.errorText}>{errors.confirmPassword}</Text>
                        )}
                    </View>
                
                <Button 
                    text={loading ? 'Saving' : 'Save new password'} 
                    onPress={handleCreatePassword}
                    disabled={loading}
                />
        
             </KeyboardAvoidingView>            
        </SafeAreaView>
    )
}

export default CreatePassword;

const formStyles = StyleSheet.create({
    formHeader:{
        fontFamily: 'serifRegular',
        fontSize: SIZES.medium,
        color: '#0B212C',
        textAlign: "center"
    },
    formText:{
        fontFamily: 'poppinsRegular',
        fontSize: SIZES.small,
        color: "#0B212C",
        textAlign: "center"
    },
    span:{
        fontFamily:'poppinsSemiBold',
        fontWeight: 600
    },
    label:{
        fontFamily: 'serifRegular',
        fontSize: SIZES.regular,
        color: '#0B212C',
        marginBottom: 5,
    },
    inputPassword:{
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
    },
    errorText: {
        fontFamily: 'poppinsRegular',
        fontSize: 12,
        color: '#FF3B30',
        marginTop: 4,
    }
})