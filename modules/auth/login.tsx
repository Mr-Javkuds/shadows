// withHooks
import { LibDialog } from 'esoftplay/cache/lib/dialog/import';
import { LibIcon } from 'esoftplay/cache/lib/icon/import';
import { LibInput, LibInputProperty } from 'esoftplay/cache/lib/input/import';
import { LibNavigation } from 'esoftplay/cache/lib/navigation/import';
import { LibStyle } from 'esoftplay/cache/lib/style/import';
import { UserData } from 'esoftplay/cache/user/data/import';
import useGlobalState from 'esoftplay/global';
import { memo, useState } from 'react';

import React from 'react';
import { ImageBackground, Pressable, Text, TextInput, View } from 'react-native';
import { State } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';


export interface AuthLoginArgs {

}
export interface AuthLoginProps {

}

export const Auth=useGlobalState({
  username:'',
  password:'',
  key:'5ffb55ab6fb84f01a227379f724a55ce',
  isLogin:false,
},{persistKey:'auth',loadOnInit:true,isUserData:true,inFile:true})

function m(props: AuthLoginProps): any {

  const url = "https://st4.depositphotos.com/1000664/40222/i/450/depositphotos_402224272-stock-photo-wallpaper-cannabis-background-medical-marijuana.jpg"
  const [isLogin,setIsLogin]=Auth.useSelector(data=>[data.isLogin,{persistKey:'auth'}])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const login = (username: string, password: any) => {
    console.log("username: " + username + '\n' + "password: " + password)
    if (username == '' || password == '') {
    LibDialog.info("Warning", "Username or Password cannot be empty")
    }else{
      Auth.set({username: username, password: password, key: 'apikey',isLogin:true},)
     LibNavigation.navigate('main/index')}
  }
  if(isLogin){
    LibNavigation.navigate('main/index')
  }


  return (
    <View style={{ flex: 1, backgroundColor: "#e9e9e9", marginTop: LibStyle.STATUSBAR_HEIGHT, justifyContent: 'center' }} >
      <ImageBackground resizeMode='cover' style={{ flex: 1 }} source={{ uri: url }} >
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', paddingHorizontal: 20, paddingTop: 50, backgroundColor: '#13121280', }}>


          <View style={{ justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap', marginBottom: 90 }}>
            <Text style={{ color: 'white', fontSize: 30, justifyContent: 'center' }}>Shadows</Text>
            <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#5B8E55' }}> Garden</Text>
          </View>

          <Text style={{ color: 'white', fontSize: 28, fontWeight: 'bold', marginTop: 20 }}>Login </Text>
          <Text style={{ color: 'white', fontSize: 20, marginTop: 0 }}>And create your own shadows empire</Text>
          {/* Text Input  Username */}
          <Text style={{ color: 'white', fontSize: 20, marginTop: 20 }}>Username</Text>

          <View style={{flexDirection:"row",width: '100%', height: 50, backgroundColor: 'white', borderRadius: 10, marginTop: 10, paddingLeft: 10, opacity: 0.7,alignItems:'center'}} >
         <LibIcon.AntDesign name="user" size={25} color="gray" style={{marginRight:10}} />
          <TextInput 
            placeholder="Username"
            // clearTextOnFocus={true}
           
            onChangeText={(text) => setUsername(text)}
          />
          </View>
         

          {/* Text Input  Password */}
          <Text style={{ color: 'white', fontSize: 20, marginTop: 20 }}>Password</Text>
         <View style={{flexDirection:"row",width: '100%', height: 50, backgroundColor: 'white', borderRadius: 10, marginTop: 10, paddingLeft: 10, opacity: 0.7,alignItems:'center'}} >
         <LibIcon.EvilIcons name="lock" size={30} color="gray" style={{marginRight:10}} />
         <TextInput 
            placeholder="Password"
            secureTextEntry={true}
            clearTextOnFocus={true}

            onChangeText={(text) => setPassword(text)} />
         </View>

          <Pressable style={{ marginTop: 50, width: '100%', height: 50, backgroundColor: '#67b45f', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => login(username, password)} >
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Login</Text>
          </Pressable>


        </View>
      </ImageBackground>
    </View>
  )
}
export default memo(m);