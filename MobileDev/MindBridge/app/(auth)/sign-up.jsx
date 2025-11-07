import { Image, StyleSheet, Text, View, Platform, TextInput, Alert } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import InputComponent from "../../components/InputComponent"
import { SIZES } from "../../themes/theme"
import { useState } from "react"

import Button from "../../components/Button"
import { router } from "expo-router"
import { firebaseAuth, tokenStorage } from "../../services/firebaseAuth"





const Signup = () =>{

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
    })
    const [errors, setErrors] = useState({
        username: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
    })

    const [password, setPassword] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [loading, setLoading] = useState(false)

    const validateField = (field, value) => {
        let error = ''

        switch (field) {
            case 'username':
                if (!value.trim()) {
                    error = 'Username is required'
                } else if (value.length < 3) {
                    error = 'Username must be at least 3 characters'
                }
                break
            
            case 'email':
                if (!value.trim()) {
                    error = 'Email is required'
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    error = 'Please enter a valid email address'
                }
                break
            
            case 'phoneNumber':
                if (!value.trim()) {
                    error = 'Phone number is required'
                } else if (!/^\+?[\d\s-()]+$/.test(value)) {
                    error = 'Please enter a valid phone number'
                }
                break
            
            case 'password':
                if (!value) {
                    error = 'Password is required'
                } else if (value.length < 8) {
                    error = 'Password must be at least 8 characters'
                } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(value)) {
                    error = 'Must contain uppercase, lowercase, number, and special character'
                }
                break
            
            case 'confirmPassword':
                if (!value) {
                    error = 'Please confirm your password'
                } else if (value !== formData.password) {
                    error = 'Passwords do not match'
                }
                break
        }

        return error
    }

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }))

        if (errors[field]) {
            setErrors(prev => ({
                ...prev,
                [field]: ''
            }))
        }
    }

    const handleInputBlur = (field, value) => {
        const error = validateField(field, value)
        setErrors(prev => ({
            ...prev,
            [field]: error
        }))
    }

    const validateForm = () => {
        const newErrors = {}
        let isValid = true

        Object.keys(formData).forEach(field => {
            const error = validateField(field, formData[field])
            if (error) {
                newErrors[field] = error
                isValid = false
            }
        })

        setErrors(newErrors)
        return isValid
    }

    const handleSignUp = async () => {
        if (!validateForm()) {
            Alert.alert('Validation Error', 'Please fix all errors before submitting')
            return
        }

        setLoading(true)
        try {
        
            const result = await firebaseAuth.register(
                formData.email,
                formData.password,
                formData.username,
            )
            
            await tokenStorage.setUser(result.user)
            
            
            Alert.alert('Success', result.message)
            
            // Navigate to survey
            router.push('../firstSurvey')
            
        } catch (error) {
            Alert.alert('Registration Failed', error.message)
        } finally {
            setLoading(false)
        }
    }


    return(
        <SafeAreaView style={{
            flex: 1,
            alignItems: "center",
            marginTop: 80,
        }}>
            <View>
                <Text style={formStyles.formHeader}>
                    Let’s get started
                </Text>
                <Text style={formStyles.formText}>
                    Join <Text style={formStyles.span}>MindBridge</Text> and begin tracking your mood {'\n'} today.
                </Text>
            </View>

            <View style={{
                marginTop: 10,
            }}>
                <Text style={formStyles.label}>
                    Username
                </Text>
                <InputComponent 
                    placeholder={"Enter your username"}
                    value={formData.username}
                    placeholderTextColor="#AFAFAF"
                    onChangeText={(value) => handleInputChange('username', value)}
                    onBlur={() => handleInputBlur('username', formData.username)}
                    hasError={!!errors.username}
                    autoCapitalize="words"
                />
                {errors.username ? <Text style={formStyles.errorText}>{errors.username}</Text> : null}
            </View>
            <View style={{
                marginTop: 10,
            }}>
                <Text style={formStyles.label}>
                    Email Address
                </Text>
                <InputComponent 
                placeholder={"you@example.com"}
                keyboardType={"email-address"}
                autoCapitalize="none"
                value={formData.email}
                onChangeText={(value) => handleInputChange('email', value)}
                onBlur={() => handleInputBlur('email', formData.email)}
                />
                {errors.email ? <Text style={formStyles.errorText}>{errors.email}</Text> : null}
            </View>
            <View style={{
                marginTop: 10,
            }}>
                <Text style={formStyles.label}>
                    Phone Number
                </Text>
                <InputComponent 
                placeholder={"+234"}
                keyboardType={"number-pad"}
                value={formData.phoneNumber}
                onChangeText={(value) => handleInputChange('phoneNumber', value)}
                onBlur={() => handleInputBlur('phoneNumber', formData.phoneNumber)}
                />
                {errors.phoneNumber ? <Text style={formStyles.errorText}>{errors.phoneNumber}</Text> : null}
            </View>
            <View style={{
                marginTop: 10,
            }}>
                <Text style={formStyles.label}>
                    Password
                </Text>
                <TextInput style={[formStyles.inputPassword, 
                        errors.password && formStyles.inputError]} 
                placeholder="Enter Password"
                placeholderTextColor= '#AFAFAF'
                returnKeyType="done"
                secureTextEntry={!passwordVisible}
                value={formData.password}
                onChangeText={(value)=>handleInputChange('password', value)}
                onBlur={() => handleInputBlur('password', formData.password)}
                autoCapitalize="none"
                />
                <Image style={{
                    width: 16,
                    height: 16,
                    position: "absolute",
                    top: 40,
                    left: 370,
                }} source={require('../../assets/images/eye-alt.png')} onPress={() =>{
                    setPasswordVisible(!passwordVisible)
                }}/>
                {errors.password ? (
                    <Text style={formStyles.errorText}>{errors.password}</Text>
                ) : (
                    <Text style={formStyles.passwordHint}>
                        Password must be at least 6 characters long
                    </Text>
                )}
            </View>
            <View style={{
                marginTop: 10,
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
                placeholderTextColor= '#AFAFAF'
                returnKeyType="done"
                secureTextEntry={!passwordVisible}
                onChangeText={(value)=> handleInputChange('confirmPassword', value)}
                onBlur={() => handleInputBlur('confirmPassword', formData.confirmPassword)}
                autoCapitalize="none"
                />
                <Image style={{
                    width: 16,
                    height: 16,
                    position: "absolute",
                    top: 40,
                    left: 370,
                }} source={require('../../assets/images/eye-alt.png')} onPress={() =>{
                    setPasswordVisible(!passwordVisible)
                }}/>
                {errors.confirmPassword ? <Text style={formStyles.errorText}>{errors.confirmPassword}</Text> : null}
            </View>

            <View style={{
                marginTop: 50,
            }}>
                <Button 
                    text={loading ? 'Creating Account...' : 'Create Account'} 
                    onPress={handleSignUp}
                    disabled={loading}
                />
            </View>

            <View>
                <Text style={{
                    fontFamily: 'poppinsRegular',
                    fontSize: SIZES.extraSmall,
                    color: '#002131',
                }}>
                    Already have an account? <Text style={formStyles.span} onPress={()=>{
                        router.push('./sign-in')
                    }} >Sign-In</Text>
                </Text>
            </View>
            
            
        </SafeAreaView>
    )
}

export default Signup;

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
        fontSize: 10,
        color: '#FF3B30',
        marginTop: 4,
    },
    passwordHint: {
        fontFamily: 'poppinsRegular',
        fontSize: 10,
        color: '#666',
        marginTop: 4,
    }
})