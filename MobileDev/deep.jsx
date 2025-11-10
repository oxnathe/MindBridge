// email-sent.jsx
import { Image, StyleSheet, Text, View, TouchableOpacity, Linking } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { SIZES } from "../../themes/theme"
import { useState, useEffect } from "react"
import { useLocalSearchParams, router } from "expo-router"

import Button from "../../components/Button"
import { firebaseAuth } from "../../services/firebaseAuth"

const EmailSent = () => {
  const params = useLocalSearchParams();
  const email = params.email || '';
  
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);

  // Countdown timer for resend email
  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (countdown === 0) {
      setCanResend(true);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  const startCountdown = () => {
    setCountdown(60);
    setCanResend(false);
  };

  // Start countdown on component mount
  useEffect(() => {
    startCountdown();
  }, []);

  const handleResendEmail = async () => {
    if (!canResend) return;

    try {
      const result = await firebaseAuth.sendPasswordReset(email);
      Alert.alert('Success', result.message);
      startCountdown();
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const handleOpenEmailApp = () => {
    // Open default email app
    Linking.openURL('mailto:');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image 
          style={styles.emailImage}
          source={require('../../assets/images/email-icon.png')} // You can use any email icon
        />
        
        <Text style={styles.formHeader}>
          Check Your Email
        </Text>
        
        <Text style={styles.formText}>
          We've sent a password reset link to:
        </Text>
        
        <Text style={styles.emailText}>
          {email}
        </Text>

        <Text style={styles.instructionText}>
          Click the link in the email to reset your password. The link will expire in 1 hour for security reasons.
        </Text>

        <View style={styles.noteBox}>
          <Text style={styles.noteTitle}>Didn't receive the email?</Text>
          <Text style={styles.noteText}>
            • Check your spam or junk folder{'\n'}
            • Make sure you entered the correct email address{'\n'}
            • Wait a few minutes and try again
          </Text>
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <Button 
          text="Open Email App" 
          onPress={handleOpenEmailApp}
          variant="primary"
        />
        
        <TouchableOpacity 
          style={[
            styles.resendButton,
            !canResend && styles.resendButtonDisabled
          ]}
          onPress={handleResendEmail}
          disabled={!canResend}
        >
          <Text style={[
            styles.resendButtonText,
            !canResend && styles.resendButtonTextDisabled
          ]}>
            {canResend ? 'Resend Email' : `Resend in ${countdown}s`}
          </Text>
        </TouchableOpacity>

        <Button 
          text="Back to Sign In" 
          onPress={() => router.push('./sign-in')}
          variant="outline"
        />
      </View>
    </SafeAreaView>
  )
}

export default EmailSent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  content: {
    alignItems: 'center',
    marginBottom: 40,
  },
  emailImage: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  formHeader: {
    fontFamily: 'serifRegular',
    fontSize: SIZES.medium,
    color: '#0B212C',
    textAlign: "center",
    marginBottom: 15,
  },
  formText: {
    fontFamily: 'poppinsRegular',
    fontSize: SIZES.small,
    color: "#0B212C",
    textAlign: "center",
    lineHeight: 20,
  },
  emailText: {
    fontFamily: 'poppinsSemiBold',
    fontSize: SIZES.regular,
    color: '#003148',
    textAlign: 'center',
    marginVertical: 10,
  },
  instructionText: {
    fontFamily: 'poppinsRegular',
    fontSize: 14,
    color: '#483B0066',
    textAlign: 'center',
    marginTop: 15,
    lineHeight: 20,
    maxWidth: 300,
  },
  noteBox: {
    backgroundColor: '#F8F9FA',
    padding: 16,
    borderRadius: 8,
    marginTop: 25,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
  },
  noteTitle: {
    fontFamily: 'poppinsSemiBold',
    fontSize: 14,
    color: '#0B212C',
    marginBottom: 8,
  },
  noteText: {
    fontFamily: 'poppinsRegular',
    fontSize: 12,
    color: '#00314866',
    lineHeight: 18,
  },
  buttonsContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 12,
  },
  resendButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  resendButtonDisabled: {
    opacity: 0.5,
  },
  resendButtonText: {
    fontFamily: 'poppinsSemiBold',
    fontSize: 14,
    color: '#007AFF',
    textAlign: 'center',
  },
  resendButtonTextDisabled: {
    color: '#00314866',
  },
});