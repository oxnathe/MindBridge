// app/dashboard.jsx
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SIZES } from '../themes/theme';
import { useState, useEffect } from 'react';
import { router } from 'expo-router';

export default function Dashboard() {
  const [currentTime, setCurrentTime] = useState('');
  const [moodData, setMoodData] = useState([]);

  useEffect(() => {
    // Set current time
    const now = new Date();
    const hours = now.getHours();
    const greeting = hours < 12 ? 'Morning' : hours < 18 ? 'Afternoon' : 'Evening';
    setCurrentTime(`Good ${greeting}, Friend!`);

    // Mock mood data - replace with actual API call
    setMoodData([
      { day: 'Mon', mood: 4 },
      { day: 'Tue', mood: 3 },
      { day: 'Wed', mood: 5 },
      { day: 'Thu', mood: 2 },
      { day: 'Fri', mood: 4 },
      { day: 'Sat', mood: 5 },
      { day: 'Sun', mood: 3 }
    ]);
  }, []);

  const QuickActions = () => (
    <View style={styles.quickActions}>
      <Text style={styles.sectionTitle}>Quick Actions</Text>
      <View style={styles.actionsRow}>
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => router.push('/mood-tracker')}
        >
          <Text style={styles.actionButtonText}>Log Mood</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => router.push('/journal')}
        >
          <Text style={styles.actionButtonText}>Write Journal</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const CommunitySection = () => (
    <View style={styles.communitySection}>
      <Text style={styles.sectionTitle}>Community</Text>
      <View style={styles.communityCard}>
        <Text style={styles.communityTitle}>Welcome to our support community</Text>
        <Text style={styles.communityText}>
          Connect with others who understand what you're going through
        </Text>
        <TouchableOpacity style={styles.communityButton}>
          <Text style={styles.communityButtonText}>Join Community</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const InsightsSection = () => (
    <View style={styles.insightsSection}>
      <Text style={styles.sectionTitle}>View Insights</Text>
      <View style={styles.insightsCard}>
        <Text style={styles.insightsTitle}>Your Mood Trend</Text>
        
        {/* Simple mood chart */}
        <View style={styles.moodChart}>
          {moodData.map((item, index) => (
            <View key={index} style={styles.moodBarContainer}>
              <View 
                style={[
                  styles.moodBar,
                  { height: item.mood * 10 }
                ]}
              />
              <Text style={styles.moodDay}>{item.day}</Text>
            </View>
          ))}
        </View>
        
        <TouchableOpacity style={styles.insightsButton}>
          <Text style={styles.insightsButtonText}>View Analytics</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const PersonalizedSection = () => (
    <View style={styles.personalizedSection}>
      <Text style={styles.sectionTitle}>Personalized Advice</Text>
      <View style={styles.adviceCard}>
        <Text style={styles.adviceTitle}>Based on your recent entries</Text>
        <Text style={styles.adviceText}>
          Try practicing mindfulness for 5 minutes today. Focus on your breathing and be present in the moment.
        </Text>
        <TouchableOpacity style={styles.adviceButton}>
          <Text style={styles.adviceButtonText}>Get More Advice</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const DailyInspiration = () => (
    <View style={styles.inspirationSection}>
      <Text style={styles.sectionTitle}>Daily Inspiration</Text>
      <View style={styles.inspirationCard}>
        <Text style={styles.inspirationQuote}>
          "The greatest glory in living lies not in never falling, but in rising every time we fall."
        </Text>
        <Text style={styles.inspirationAuthor}>- Nelson Mandela</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>{currentTime}</Text>
          <Text style={styles.subtitle}>How are you feeling today?</Text>
        </View>

        {/* Quick Actions */}
        <QuickActions />

        {/* Community Section */}
        <CommunitySection />

        {/* Insights Section */}
        <InsightsSection />

        {/* Personalized Advice */}
        <PersonalizedSection />

        {/* Daily Inspiration */}
        <DailyInspiration />

        {/* Bottom Spacing */}
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 20,
    marginBottom: 30,
  },
  greeting: {
    fontFamily: 'serifRegular',
    fontSize: SIZES.large,
    color: '#0B212C',
    marginBottom: 8,
  },
  greetingSubtitle: {
    fontFamily: 'poppinsMedium',
    fontSize: 12,
    color: '#061F2B'
  },
  subtitle: {
    fontFamily: 'poppinsRegular',
    fontSize: SIZES.medium,
    color: '#666',
  },
  sectionTitle: {
    fontFamily: 'serifRegular',
    fontSize: SIZES.medium,
    color: '#0B212C',
    marginBottom: 16,
    fontWeight: '600',
  },
  // Quick Actions Styles
  quickActions: {
    marginBottom: 30,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#0B212C',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginHorizontal: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  actionButtonText: {
    fontFamily: 'poppinsSemiBold',
    fontSize: SIZES.small,
    color: '#FFFFFF',
  },
  // Community Section Styles
  communitySection: {
    marginBottom: 30,
  },
  communityCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  communityTitle: {
    fontFamily: 'serifRegular',
    fontSize: SIZES.regular,
    color: '#0B212C',
    marginBottom: 8,
    fontWeight: '600',
  },
  communityText: {
    fontFamily: 'poppinsRegular',
    fontSize: SIZES.small,
    color: '#666',
    marginBottom: 16,
    lineHeight: 20,
  },
  communityButton: {
    backgroundColor: '#E8F4FD',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  communityButtonText: {
    fontFamily: 'poppinsSemiBold',
    fontSize: SIZES.small,
    color: '#0B212C',
  },
  // Insights Section Styles
  insightsSection: {
    marginBottom: 30,
  },
  insightsCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  insightsTitle: {
    fontFamily: 'serifRegular',
    fontSize: SIZES.regular,
    color: '#0B212C',
    marginBottom: 16,
    fontWeight: '600',
  },
  moodChart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 80,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  moodBarContainer: {
    alignItems: 'center',
    flex: 1,
  },
  moodBar: {
    width: 12,
    backgroundColor: '#0B212C',
    borderRadius: 6,
    marginBottom: 8,
  },
  moodDay: {
    fontFamily: 'poppinsRegular',
    fontSize: 10,
    color: '#666',
  },
  insightsButton: {
    backgroundColor: '#F0F9FF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  insightsButtonText: {
    fontFamily: 'poppinsSemiBold',
    fontSize: SIZES.small,
    color: '#0B212C',
  },
  // Personalized Section Styles
  personalizedSection: {
    marginBottom: 30,
  },
  adviceCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  adviceTitle: {
    fontFamily: 'serifRegular',
    fontSize: SIZES.regular,
    color: '#0B212C',
    marginBottom: 8,
    fontWeight: '600',
  },
  adviceText: {
    fontFamily: 'poppinsRegular',
    fontSize: SIZES.small,
    color: '#666',
    marginBottom: 16,
    lineHeight: 20,
  },
  adviceButton: {
    backgroundColor: '#F0F4FF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  adviceButtonText: {
    fontFamily: 'poppinsSemiBold',
    fontSize: SIZES.small,
    color: '#0B212C',
  },
  // Inspiration Section Styles
  inspirationSection: {
    marginBottom: 30,
  },
  inspirationCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  inspirationQuote: {
    fontFamily: 'serifRegular',
    fontSize: SIZES.regular,
    color: '#0B212C',
    fontStyle: 'italic',
    marginBottom: 8,
    lineHeight: 22,
  },
  inspirationAuthor: {
    fontFamily: 'poppinsRegular',
    fontSize: SIZES.small,
    color: '#666',
    textAlign: 'right',
  },
  bottomSpacing: {
    height: 20,
  },
});