// withHooks
import { LibStyle } from 'esoftplay/cache/lib/style/import';
import { setError } from 'esoftplay/error';
import navigation from 'esoftplay/modules/lib/navigation';
import { memo, useEffect, useState } from 'react';

import React from 'react';
import { ActivityIndicator, Button, ImageBackground, Pressable, StatusBar } from 'react-native';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Auth } from '../auth/login';


export interface MainHomeArgs {

}
export interface MainHomeProps {

}
function m(props: MainHomeProps): any {

  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState();
  // let [response, setResponse] = useState<{[]]}>();
  const [apiKey,setApiKey]=Auth.useSelector(data=>[data.key,{persistKey:'auth'}])
  const [username,setUsername]=Auth.useSelector(data=>[data.username,{persistKey:'auth'}])
  const [password,setPassword]=Auth.useSelector(data=>[data.password,{persistKey:'auth'}])
const logout=()=>{
  Auth.reset()
  navigation.navigate('auth/login')
}
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts/1")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoading(false);
  //         setResponse(result);
  //       },
  //       (error) => {
  //         setIsLoading(false);
  //         setError(error);
  //       }
  //     )
  // }, []);

  // const getContent = () => {
  //   if (isLoading) {
  //     return <ActivityIndicator size="large" />;
  //   }

  //   if (error) {
  //     return <Text>{error}</Text>
  //   }
    
  //   console.log(response);
  //   const apires = response
    
  //   // return <Text>{response.title}</Text>
  // };



  return (
      <ScrollView style={{ flex: 1 }}  >
    <View style={{ flex: 1, marginTop: LibStyle.STATUSBAR_HEIGHT, paddingTop: 30, justifyContent: 'flex-start', alignItems: 'flex-start', padding: 30 }} >
        <View style={{ flexDirection: 'row', width: "100%", alignItems: 'center', justifyContent: 'space-between' }}>
          <View>
            <Text style={{ color: "black", fontSize: 30, fontWeight: "bold" }}>Welcome </Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              <Text style={{ color: "black", fontSize: 30, fontWeight: "bold" }}>Pablo </Text>
              <Text style={{ color: "#67b45f", fontSize: 30, fontWeight: "bold" }}>Escobar</Text>
            </View>
          </View>
          <View style={{ width: 75, height: 75, borderRadius: 50, backgroundColor: 'grey' }}>
            <ImageBackground
              resizeMode='cover'
              imageStyle={{ borderRadius: 50 }}
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfYi0hwL2KN7x5Af7wTwKyr6RtOo1sxEXHXeO-6V_LoOSpJh6LE4SbWGbTlQBCbUSnfEI&usqp=CAU' }}
              style={{ flex: 1, }} >
            </ImageBackground>
          </View>
        </View>
        <Pressable style={{ marginTop: 20, width: '100%', height: 50, backgroundColor: '#67b45f', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => logout()} >
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Logout</Text>
          </Pressable>  
        <View style={{ flexDirection: 'row', height: 80, width: "100%", backgroundColor: 'white', borderRadius: 10, padding: 15, paddingHorizontal: 20, justifyContent: 'space-between', marginTop: 30, borderColor: 'black', borderCurve: 'circular', alignItems: 'center' }}>
          <View style={{ backgroundColor: 'white' }}>
            <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }} >Your Balance</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-end' }}>
              <Text style={{ color: '#2ea300fa', fontSize: 20, fontWeight: 'bold' }}>$</Text>
              <Text style={{ color: 'black', fontSize: 19, fontWeight: 'bold' }}> 100.000</Text>
            </View>
          </View>


          <View style={{ height: 40, width: "30%", borderRadius: 15, backgroundColor: '#5B8E55', justifyContent: 'center', }}>
            <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>Top Up</Text>
          </View>

        </View>
        <View style={{ height: 200, width: "100%", borderRadius: 15, backgroundColor: '#ffffff', padding: 20, justifyContent: 'center', marginTop: 40 }}>
          <Text style={{ color: '#2ea300fa', fontSize: 20, fontWeight: 'bold' }}>USE GLOBOAL VAR</Text>
          <Text style={{ color: '#2ea300fa', fontSize: 20, fontWeight: 'bold' }}>{apiKey},{username+password}</Text>
        </View>

        <Text style={{ color: '#2ea300fa', fontSize: 20, fontWeight: 'bold', marginTop: 30 }}>My Garden</Text>

        <View style={{ flexDirection: 'row',marginTop:20}}>
          <View style={{ width: 150, height: 150, borderRadius: 10, marginTop: 20, marginRight: 20 }}>
            <ImageBackground
              resizeMode='cover'
              imageStyle={{ borderRadius: 10, marginBottom: 10 }}
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfYi0hwL2KN7x5Af7wTwKyr6RtOo1sxEXHXeO-6V_LoOSpJh6LE4SbWGbTlQBCbUSnfEI&usqp=CAU' }}
              style={{ flex: 1, }} >
            </ImageBackground>
            <Text style={{ color: '#2ea300fa', fontSize: 20, fontWeight: 'bold' }}>cannabis</Text>
          </View>
          <View style={{ width: 150, height: 150, borderRadius: 10, marginTop: 20, }}>
            <ImageBackground
              resizeMode='cover'
              imageStyle={{ borderRadius: 10, marginBottom: 10 }}
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfYi0hwL2KN7x5Af7wTwKyr6RtOo1sxEXHXeO-6V_LoOSpJh6LE4SbWGbTlQBCbUSnfEI&usqp=CAU' }}
              style={{ flex: 1, }} >
            </ImageBackground>
            <Text style={{ color: '#2ea300fa', fontSize: 20, fontWeight: 'bold' }}>cannabis</Text>
          </View>
        </View>


        <View style={{ flexDirection: 'row',marginTop:20}}>
          <View style={{ width: 150, height: 150, borderRadius: 10, marginTop: 20, marginRight: 20 }}>
            <ImageBackground
              resizeMode='cover'
              imageStyle={{ borderRadius: 10, marginBottom: 10 }}
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfYi0hwL2KN7x5Af7wTwKyr6RtOo1sxEXHXeO-6V_LoOSpJh6LE4SbWGbTlQBCbUSnfEI&usqp=CAU' }}
              style={{ flex: 1, }} >
            </ImageBackground>
            <Text style={{ color: '#2ea300fa', fontSize: 20, fontWeight: 'bold' }}>cannabis</Text>
          </View>
          <View style={{ width: 150, height: 150, borderRadius: 10, marginTop: 20, }}>
            <ImageBackground
              resizeMode='cover'
              imageStyle={{ borderRadius: 10, marginBottom: 10 }}
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfYi0hwL2KN7x5Af7wTwKyr6RtOo1sxEXHXeO-6V_LoOSpJh6LE4SbWGbTlQBCbUSnfEI&usqp=CAU' }}
              style={{ flex: 1, }} >
            </ImageBackground>
            <Text style={{ color: '#2ea300fa', fontSize: 20, fontWeight: 'bold' }}>cannabis</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row',marginTop:20}}>
          <View style={{ width: 150, height: 150, borderRadius: 10, marginTop: 20, marginRight: 20 }}>
            <ImageBackground
              resizeMode='cover'
              imageStyle={{ borderRadius: 10, marginBottom: 10 }}
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfYi0hwL2KN7x5Af7wTwKyr6RtOo1sxEXHXeO-6V_LoOSpJh6LE4SbWGbTlQBCbUSnfEI&usqp=CAU' }}
              style={{ flex: 1, }} >
            </ImageBackground>
            <Text style={{ color: '#2ea300fa', fontSize: 20, fontWeight: 'bold' }}>cannabis</Text>
          </View>
          <View style={{ width: 150, height: 150, borderRadius: 10, marginTop: 20, }}>
            <ImageBackground
              resizeMode='cover'
              imageStyle={{ borderRadius: 10, marginBottom: 10 }}
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfYi0hwL2KN7x5Af7wTwKyr6RtOo1sxEXHXeO-6V_LoOSpJh6LE4SbWGbTlQBCbUSnfEI&usqp=CAU' }}
              style={{ flex: 1, }} >
            </ImageBackground>
            <Text style={{ color: '#2ea300fa', fontSize: 20, fontWeight: 'bold' }}>cannabis</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row',marginTop:20}}>
          <View style={{ width: 150, height: 150, borderRadius: 10, marginTop: 20, marginRight: 20 }}>
            <ImageBackground
              resizeMode='cover'
              imageStyle={{ borderRadius: 10, marginBottom: 10 }}
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfYi0hwL2KN7x5Af7wTwKyr6RtOo1sxEXHXeO-6V_LoOSpJh6LE4SbWGbTlQBCbUSnfEI&usqp=CAU' }}
              style={{ flex: 1, }} >
            </ImageBackground>
            <Text style={{ color: '#2ea300fa', fontSize: 20, fontWeight: 'bold' }}>cannabis</Text>
          </View>
          <View style={{ width: 150, height: 150, borderRadius: 10, marginTop: 20, }}>
            <ImageBackground
              resizeMode='cover'
              imageStyle={{ borderRadius: 10, marginBottom: 10 }}
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfYi0hwL2KN7x5Af7wTwKyr6RtOo1sxEXHXeO-6V_LoOSpJh6LE4SbWGbTlQBCbUSnfEI&usqp=CAU' }}
              style={{ flex: 1, }} >
            </ImageBackground>
            <Text style={{ color: '#2ea300fa', fontSize: 20, fontWeight: 'bold' }}>cannabis</Text>
          </View>
        </View>
        
      {/* 
      <Text>Ini Home</Text>
      
      <Button
      title="Go to Details"
      onPress={() => navigation.navigate('main/splash')}
    /> */}
    </View>
    </ScrollView>
  )
}
export default memo(m);