import { Image, ScrollView, Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SIZES } from "../themes/theme";


import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';




const dashBoard = () =>{
    
    const currentTime = "Good Day, Friend!";
    const moodData = [
        { day: 'M', mood: 4 }, { day: 'T', mood: 3 }, { day: 'W', mood: 5 },
        { day: 'T', mood: 2 }, { day: 'F', mood: 4 }, { day: 'S', mood: 5 },
        { day: 'S', mood: 3 }
    ];

    

    return(
        <SafeAreaView>

            <ScrollView showsVerticalScrollIndicator={false}>
               <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
               }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 10
                    }}>
                        <Image style={{
                            width: 40,
                            height: 40,
                        }} source={require('../assets/images/dashboard-logo.png')}/>
                        <Text style={{
                            fontFamily: 'serifRegular',
                            fontSize: SIZES.large,
                            color: '#013E5B'
                        }}>
                            MindBridge
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 10
                    }}>
                        <FontAwesome name="user-circle-o" size={24} color="black" />
                        <Ionicons name="settings" size={24} color="black" />
                    </View>
               </View>

                <View>
                    <View>
                        <View style={styles.header}>
                            <Text style={styles.greeting}>{currentTime}</Text>
                            <Text style={styles.greetingSubtitle}>How are you feeling today?</Text>
                        </View>
                        
                    </View>
                    

                </View>

               


               <View>

               </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default dashBoard;

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