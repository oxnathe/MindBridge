// services/firebaseAuth.js
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updatePassword,
  signOut
} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKEzArnxDdPHvm5s2x8BT6BhMFX3eCjOI",
  authDomain: "mindbridge-915c1.firebaseapp.com",
  projectId: "mindbridge-915c1",
  storageBucket: "mindbridge-915c1.firebasestorage.app",
  messagingSenderId: "328394292405",
  appId: "1:328394292405:web:7e9feda5f71a90da10d2fc",
  measurementId: "G-BZFZC56J09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const firebaseAuth = {
  // Register user with email and password
  async register(email, password, username) {
    try {
      console.log('Attempting to register:', email);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      console.log('User registered successfully:', user.uid);
      
      return {
        success: true,
        user: {
          uid: user.uid,
          email: user.email,
          username: username,
          emailVerified: user.emailVerified
        },
        message: 'Account created successfully!'
      };
    } catch (error) {
      console.error('Firebase registration error:', error);
      let errorMessage = 'Registration failed';
      
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'This email is already registered.';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Invalid email address.';
          break;
        case 'auth/weak-password':
          errorMessage = 'Password should be at least 6 characters.';
          break;
        case 'auth/network-request-failed':
          errorMessage = 'Network error. Please check your connection.';
          break;
        case 'auth/too-many-requests':
          errorMessage = 'Too many attempts. Please try again later.';
          break;
        default:
          errorMessage = error.message || 'Registration failed. Please try again.';
      }
      
      throw new Error(errorMessage);
    }
  },

  // Login user
  async login(email, password) {
    try {
      console.log('Attempting to login:', email);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      console.log('User logged in successfully:', user.uid);
      
      return {
        success: true,
        user: {
          uid: user.uid,
          email: user.email,
          emailVerified: user.emailVerified
        },
        message: 'Login successful!'
      };
    } catch (error) {
      console.error('Firebase login error:', error);
      let errorMessage = 'Login failed';
      
      switch (error.code) {
        case 'auth/invalid-email':
          errorMessage = 'Invalid email address.';
          break;
        case 'auth/user-disabled':
          errorMessage = 'This account has been disabled.';
          break;
        case 'auth/user-not-found':
          errorMessage = 'No account found with this email.';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Incorrect password.';
          break;
        case 'auth/network-request-failed':
          errorMessage = 'Network error. Please check your connection.';
          break;
        case 'auth/too-many-requests':
          errorMessage = 'Too many attempts. Please try again later.';
          break;
        default:
          errorMessage = error.message || 'Login failed. Please try again.';
      }
      
      throw new Error(errorMessage);
    }
  },

  // Send password reset email
  async sendPasswordReset(email) {
    try {
      console.log('Sending password reset to:', email);
      await sendPasswordResetEmail(auth, email);
      
      console.log('Password reset email sent successfully');
      return {
        success: true,
        message: 'Password reset email sent! Check your inbox.'
      };
    } catch (error) {
      console.error('Firebase password reset error:', error);
      let errorMessage = 'Failed to send reset email';
      
      switch (error.code) {
        case 'auth/user-not-found':
          errorMessage = 'No account found with this email.';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Invalid email address.';
          break;
        case 'auth/network-request-failed':
          errorMessage = 'Network error. Please check your connection.';
          break;
        case 'auth/too-many-requests':
          errorMessage = 'Too many attempts. Please try again later.';
          break;
        default:
          errorMessage = error.message || 'Failed to send reset email. Please try again.';
      }
      
      throw new Error(errorMessage);
    }
  },

  // Update user password
  async updatePassword(newPassword) {
    try {
      const user = auth.currentUser;
      if (user) {
        await updatePassword(user, newPassword);
        return {
          success: true,
          message: 'Password updated successfully!'
        };
      } else {
        throw new Error('No user is currently signed in.');
      }
    } catch (error) {
      console.error('Firebase update password error:', error);
      let errorMessage = 'Failed to update password';
      
      switch (error.code) {
        case 'auth/weak-password':
          errorMessage = 'Password should be at least 6 characters.';
          break;
        case 'auth/requires-recent-login':
          errorMessage = 'Please sign in again to update your password.';
          break;
        default:
          errorMessage = error.message || 'Failed to update password. Please try again.';
      }
      
      throw new Error(errorMessage);
    }
  },

  // Sign out
  async signOut() {
    try {
      await signOut(auth);
      return {
        success: true,
        message: 'Signed out successfully!'
      };
    } catch (error) {
      console.error('Firebase signout error:', error);
      throw new Error('Failed to sign out: ' + error.message);
    }
  },

  // Get current user
  getCurrentUser() {
    return auth.currentUser;
  },

  // Auth state observer
  onAuthStateChanged(callback) {
    return auth.onAuthStateChanged(callback);
  }
};

// Token storage utility
export const tokenStorage = {
  async setUser(user) {
    try {
      await AsyncStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      console.error('Error saving user:', error);
      throw error;
    }
  },

  async getUser() {
    try {
      const user = await AsyncStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    } catch (error) {
      console.error('Error getting user:', error);
      return null;
    }
  },

  async clearAuthData() {
    try {
      await AsyncStorage.removeItem('user');
    } catch (error) {
      console.error('Error clearing auth data:', error);
      throw error;
    }
  }
};