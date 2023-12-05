// withHooks
import { memo } from 'react';

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { DetailDetail } from 'esoftplay/cache/detail/detail/import';
import { LibIcon } from 'esoftplay/cache/lib/icon/import';
import React from 'react';
import { View } from 'react-native';
import home from './home';


export interface MainBotnavArgs {
  
}
export interface MainBotnavProps {
  
}
function m(props: MainBotnavProps): any {
  const Tab = createBottomTabNavigator();
  return (

    
    <NavigationContainer >
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          header: () => null,
          tabBarIcon: ({ focused, color, size }) => {
            switch (route.name) {
              case 'Home':
                return (
                  <LibIcon.Ionicons name={
                    focused
                      ? 'ios-home'
                      : 'ios-home-outline'
                  } size={size} color={color} />
                );
                break;
              case 'detail':
                return (
                  <Ionicons
                    name={
                      focused
                        ? 'ios-heart'
                        : 'ios-heart-outline'
                    }
                    size={size}
                    color={color}
                  />
                );
                break;


              default:
                return (
                  <Ionicons
                    name={
                      focused
                        ? 'ios-warning'
                        : 'ios-warning-outline'
                    }
                    size={size}
                    color={color}
                  />
                );
            }
          },
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: '#00848d',
        })}>
        <Tab.Screen name="Home" component={home} />
        <Tab.Screen name="detail" component={DetailDetail} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default memo(m);