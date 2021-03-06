import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./../bundles/HomeComponent/index";
import DrawerNavigator from "./DrawerNavigator";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import NearbyComponent from "./../bundles/NearbyComponent";
import ProfileComponent from "./../bundles/ProfileComponent";
import Bookmarked from "./../bundles/BookmarkedComponent";
const Tab = createBottomTabNavigator();
export default function BottomTab() {
    return (
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: 'black',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="cafes" component={Home} options={{
               tabBarIcon: ({focused, color, size }) => {
                return <FontAwesome5 name={'utensils'} size={size} color={color} />;
              },
              title:'Cafes'
          }}  
          />
          <Tab.Screen name="nearby" component={NearbyComponent}
          options={{
                tabBarIcon: ({focused, color, size }) => {
                return <MaterialIcons name={'pin-drop'} size={size} color={color} />;
            },
            title:'Nearby'
            }}
        />
          <Tab.Screen name="profile" component={ProfileComponent}
            options={{
                tabBarIcon: ({focused, color, size }) => {
                return <MaterialIcons name={'person'} size={size} color={color} />;
            },
            title:'Profile'
            }} />
          <Tab.Screen name="saved" component={Bookmarked}
          
            options={{
                tabBarIcon: ({focused, color, size }) => {
                return <MaterialIcons name={'bookmark'} size={size} color={color} />;
            },
            title:'Saved'
            }} />
        </Tab.Navigator>
    );
  }