import { Image, StyleSheet, Text, View, Platform, TextInput, Modal, TouchableOpacity, Alert } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import InputComponent from "../../components/InputComponent"
import { SIZES } from "../../themes/theme"
import { useState } from "react"

import Button from "../../components/Button"
import { router } from "expo-router"

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { firebaseAuth, tokenStorage } from "../../services/firebaseAuth"




const Signin = () =>{

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })
    
    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }))

        if(errors[field]) {
            setErrors(prev => ({
                ...prev,
                [field]: ''
            }))
        }
    }

    const validateForm = () => {
        const newErrors = {}
        let isValid = true

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
            isValid = false
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address'
            isValid = false
        }

        if (!formData.password) {
            newErrors.password = 'Password is required'
            isValid = false
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters'
            isValid = false
        }

        setErrors(newErrors)
        return isValid
    }

    const handleSignIn = async () => {
        if (!validateForm()) {
            Alert.alert('Validation Error', 'Please fix all errors before submitting');
            return;
        }

        setLoading(true);
        try{
            const result = await firebaseAuth.login(
                formData.email,
                formData.password,
            );

            await tokenStorage.setUser(result.user);

            Alert.alert('Success', result.message || 'Login Successful!');

            router.replace('../dashboard')
        }catch (error) {
            Alert.alert('Login Failed', error.message);
        } finally {
            setLoading(false)
        }
    }

    const handleForgotPassword = async () => {
        if (!forgotPasswordEmail) {
            Alert.alert('Error', 'Please enter your email address')
            return
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(forgotPasswordEmail)) {
            Alert.alert('Error', 'Please enter a valid email address')
            return
        }

        setForgotPasswordLoading(true)
        try {
            const result = await firebaseAuth.sendPasswordReset(forgotPasswordEmail)
            Alert.alert('Success', result.message)
            setModalVisible(false)
            setForgotPasswordEmail('')
        } catch (error) {
            Alert.alert('Error', error.message)
        } finally {
            setForgotPasswordLoading(false)
        }
    }

    const [password, setPassword] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [forgotPasswordEmail, setForgotPasswordEmail] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const [loading, setLoading] = useState(false)
    const [forgotPasswordLoading, setForgotPasswordLoading] = useState(false)
    


    return(
        <SafeAreaView style={{
            flex: 1,
            alignItems: "center",
            marginTop: 80,
        }}>
            <View>
                <Text style={formStyles.formHeader}>
                    Welcome Back!
                </Text>
                <Text style={formStyles.formText}>
                    It’s good to have you here again. Let’s {'\n'} continue your journey.
                </Text>
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
                value={formData.email}
                onChangeText={(value) => handleInputChange('email', value)}
                />
                {errors.email ? <Text style={formStyles.errorText}>{errors.email}</Text> : null}
            </View>

            <View style={{
                marginTop: 10,
            }}>
                <Text style={formStyles.label}>
                    Password
                </Text>
                <TextInput style={formStyles.inputPassword} 
                placeholder="Enter Password"
                placeholderTextColor= '#AFAFAF'
                returnKeyType="done"
                secureTextEntry={!passwordVisible}
                value={formData.password}
                onChangeText={(value)=> handleInputChange('password', value)}
                autoCapitalize="none"
                />
                <Image style={{
                    width: 16,
                    height: 16,
                    position: "absolute",
                    top: 40,
                    left: 370,
                }} source={require('../../assets/images/eye-alt.png')} onPress={() =>
                    setPasswordVisible(!passwordVisible)
                }/>
                <Text style={{
                        fontFamily: 'poppinsRegular',
                        fontSize: '10',
                    }}>
                    Must contain at least a uppercase, a lowercase, a character
                </Text>
                {errors.password ? <Text style={formStyles.errorText}>{errors.password}</Text> : null}
            </View>
            <View style={{
                marginLeft: 250,
                marginTop: 10,
                }}>
                <Text style={{
                    fontFamily: 'poppinsSemiBold',
                    textDecorationStyle: 'solid',
                    textDecorationLine: 'underline',
                    fontSize: 14,
                }} onPress={()=>{
                    setModalVisible(true)
                }}>
                    Forgot your password?
                </Text>
            </View>

            <Modal 
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={()=>{
                    setModalVisible(!modalVisible)
                }}>

                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#fff',
                        marginTop: 380,
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40
                    }}>
                        <View style={{
                            marginTop: 20,
                            marginLeft: 350,
                        }}> 
                            <TouchableOpacity onPress={()=> setModalVisible(!modalVisible)}>
                                <MaterialIcons name="cancel" size={24} color="black"/>
                            </TouchableOpacity>
                        </View> 
                        <View style={{
                            marginTop: 30,
                        }}>
                            <Text style={{
                                fontFamily: 'serifRegular',
                                fontSize: SIZES.medium,
                                textAlign: 'center',
                                marginBottom: 10,
                            }}>
                                Forgot Password?
                            </Text>
                            <Text style={{
                                fontFamily: 'poppinsRegular',
                                textAlign: 'center',
                                fontSize: SIZES.small,
                                color: '#0B212C'
                            }}>
                                Enter your email address. We’ll send you a 6-digit code to reset it.
                            </Text>
                        </View>

                        <View style={{
                            marginTop: 50,
                        }}>
                            <Text style={formStyles.label}>
                                Email Address
                            </Text>
                            <InputComponent 
                                placeholder={"you@example.com"}
                                keyboardType={"email-address"}
                                autoCapitalize="none"
                                value={forgotPasswordEmail}
                                onChangeText={setForgotPasswordEmail}
                            />
                        </View>

                        <View style={{
                            marginTop: 150,
                            marginBottom: 100,
                        }}>
                            <Button 
                            text={forgotPasswordLoading ? 'Sending...' : 'Send Reset Link'}  
                            onPress={handleForgotPassword}
                            disabled={forgotPasswordLoading}/>
                        </View>
                        
                    </View>

            </Modal>
            

            <View style={{
                marginTop: 300,
            }}>
                <Button 
                    text={loading ? 'Signing In...' : 'Sign In'}
                    onPress={handleSignIn}
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
                        router.replace('./sign-up')
                    }} >Sign-Up</Text>
                </Text>
            </View>
            
            
        </SafeAreaView>
    )
}

export default Signin;

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
})