import React from 'react';
import {Image, Platform, TouchableOpacity, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Plus...
import repeat from './assets/repeat.png'

// Font Awesome Icons...
import { FontAwesome5 } from '@expo/vector-icons'
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import EmptyScreen from "./screens/EmptyScreen";
import NotesScreen from "./screens/NotesScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 40,
          marginHorizontal: 20,
          height: 60,
          borderRadius: 10,
          shadowColor: '#000',
          shadowOpacity: 0.06,
          shadowOffset: {
            width: 10,
            height: 10
          },
          paddingHorizontal: 20,
        }
      }}>

        <Tab.Screen name={"Home"} component={HomeScreen} options={{
          tabBarIcon: ({focused}) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 20
            }}>
              <FontAwesome5
                name="home"
                size={20}
                color={focused ? 'red' : 'gray'}
              />
            </View>
          )
        }}/>

        <Tab.Screen name={"Search"} component={SearchScreen} options={{
          tabBarIcon: ({focused}) => (
            <View style={{
              position: 'absolute',
              top: 20
            }}>
              <FontAwesome5
                name="search"
                size={20}
                color={focused ? 'red' : 'gray'}
              />
            </View>
          )
        }}
        />


        <Tab.Screen name={"ActionButton"} component={EmptyScreen} options={{
          tabBarIcon: () => (

            <TouchableOpacity>
              <View style={{
                width: 55,
                height: 55,
                backgroundColor: 'red',
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: Platform.OS === "android" ? 50 : 30
              }}>
                <Image source={repeat} style={{
                  width: 30,
                  height: 30,
                  tintColor: 'white',
                }}/>
              </View>
            </TouchableOpacity>
          )
        }}/>

        <Tab.Screen name={"Notifications"} component={NotesScreen} options={{
          tabBarIcon: ({focused}) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 20
            }}>
              <FontAwesome5
                name="bell"
                size={20}
                color={focused ? 'red' : 'gray'}
              />
            </View>
          )
        }}/>

        <Tab.Screen name={"Settings"} component={ProfileScreen} options={{
          tabBarIcon: ({focused}) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 20
            }}>
              <FontAwesome5
                name="user-alt"
                size={20}
                color={focused ? 'red' : 'gray'}
              />
            </View>
          )
        }} />

      </Tab.Navigator>

    </NavigationContainer>
  );
}
