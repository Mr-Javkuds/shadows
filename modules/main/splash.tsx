// withHooks
import { LibNavigation } from 'esoftplay/cache/lib/navigation/import';
import { LibStyle } from 'esoftplay/cache/lib/style/import';

import navigation from 'esoftplay/modules/lib/navigation';
import { Component, memo } from 'react';

import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';


export interface MainSplashArgs {

}
export interface MainSplashProps {

}
function m(props: MainSplashProps): any {
  

    setTimeout(() => {
   (LibNavigation.replace('auth/login'));
    }, 1500);
  

  return (
    <View style={{ flex: 1, marginTop: LibStyle.STATUSBAR_HEIGHT, justifyContent: 'center' }} >
      <ImageBackground  resizeMode='cover' imageStyle={{ flex: 1,width:LibStyle.width  }} source={{ uri: 'https://media.istockphoto.com/photos/sunset-closeup-shot-of-mature-harvest-ready-herbal-cannabis-plant-at-picture-id1279487353?k=20&m=1279487353&s=170667a&w=0&h=AhE1QdZFaw1br29OBHd_FnWPrTHzqnZT0JIEPxRHxwI=' }} style={{ flex: 1, }} >
       
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#13121280',}}>
          <Text style={{color:'white',fontSize:25, justifyContent:'center'}}>To be Profesional</Text>
          <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}>Cannabis Farmer</Text>

        </View>
      </ImageBackground>
    </View>
  )
}
export default memo(m);