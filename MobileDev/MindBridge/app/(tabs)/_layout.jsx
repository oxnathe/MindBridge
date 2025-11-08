import { Tabs } from 'expo-router';
import Octicons from '@expo/vector-icons/Octicons';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';



export default function TabLayout() {
    return(
        <Tabs
        screenOptions={{
            tabBarActiveTintColor: '#0B212C',
            backgroundColor:'#9DD4EF',
            tabBarInactiveTintColor: '#666',
            tabBarStyle: {
                backgroundColor: '#FFFFFF',
                borderTopWidth: 1,
                borderTopColor: '#E5E5E5',
                height: 80,
                // paddingBottom: 8,
                // paddingTop: 8,
            },
            headerShown: false
        }}>
            <Tabs.Screen
                name="dashboard"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, size }) => (
                    <Octicons name="home" size={24} color="black" />
                ),
            }}
            />

            <Tabs.Screen 
                name="mood"
                options={{
                    title: 'Mood',
                    tabBarIcon: ({color, size}) => (
                        <Feather name="heart" size={24} color="white" />
                    )
                }}
            />

            <Tabs.Screen
                name="insight"
                options={{
                    title: 'Insight',
                    tabBarIcon: ({ color, size }) => (
                    <Octicons name="graph" size={24} color="black" />
                    ),
                }}
            />

            <Tabs.Screen
                name="community"
                options={{
                    title: 'Community',
                    tabBarIcon: ({ color, size }) => (
                    <FontAwesome6 name="people-group" size={24} color="black" />
                    ),
                }}
            />

            <Tabs.Screen
                name="resources"
                options={{
                    title: 'Resources',
                    tabBarIcon: ({ color, size }) => (
                    <FontAwesome6 name="lines-leaning" size={24} color="black" />
                    ),
                }}
            />



        </Tabs>
    )
}