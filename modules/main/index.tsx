// withHooks
import { memo, useState } from 'react';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import home from './home';
import detail from '../detail/detail';
import splash from '../main/splash';

import { Ionicons, Octicons } from '@expo/vector-icons';
import { LibIcon } from 'esoftplay/cache/lib/icon/import';
import { DetailDetail } from 'esoftplay/cache/detail/detail/import';
import { LibNavigation } from 'esoftplay/cache/lib/navigation/import';
import { Auth } from '../auth/login';
import { NewsNews } from 'esoftplay/cache/news/news/import';

export interface MainIndexArgs {

}
export interface MainIndexProps {

}
function m(props: MainIndexProps): any {
  const [isSignedIn] = Auth.useSelector(data => [data.isLogin, { persistKey: 'auth' }])
  const Tab = createBottomTabNavigator();

  if (isSignedIn==true) {
    
  } else {
    LibNavigation.navigate('auth/login');
  }
  return (

   
    <NavigationContainer independent={true} >
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
              case 'News':
                return (
                  <Ionicons
                    name={
                      focused
                        ? 'ios-newspaper'
                        : 'ios-newspaper-outline'
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
        <Tab.Screen name="News" component={NewsNews} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default memo(m);