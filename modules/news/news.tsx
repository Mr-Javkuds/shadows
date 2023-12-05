// withHooks
import { memo, useEffect, useState } from 'react';

import { LibStyle } from 'esoftplay/cache/lib/style/import';
import React from 'react';
import { ImageBackground, ScrollView, Text, TextInput, View } from 'react-native';
import { LibIcon } from 'esoftplay/cache/lib/icon/import';
import data from 'esoftplay/modules/user/data';
import { FlashList } from '@shopify/flash-list';
import { FlatList } from 'react-native-gesture-handler';


export interface NewsNewsArgs {

}
export interface NewsNewsProps {

}

function m(props: NewsNewsProps) {

  const apiKey = 'pub_34084c2ed3e3c44879bae3ca35f90b75ee023';

  const url = 'https://newsdata.io/api/1/news?language=id';

  const [resdata, setResdata] = useState<any[]>([]);
  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        'X-ACCESS-KEY': apiKey,

      }

    })
      .then(response => response.json())
      .then(data => {
        // Menggunakan setArticles untuk menyimpan data JSON ke dalam variabel articles
        setResdata(data.results);
        console.log(data.results[1].title ?? '');
      })
      .catch(error => {
        console.error(error);
      });
  }, []); // Gunakan array kosong sebagai dependency untuk memastikan useEffect hanya dijalankan sekali  return (

  return (
    <View style={{ flex: 1, marginTop: LibStyle.STATUSBAR_HEIGHT, paddingTop: 30, justifyContent: 'flex-start', alignItems: 'center', padding: 20 }} >
      <FlatList data={resdata}
    
      ListHeaderComponent={

        <View style={{ width: "auto" ,  }}  >
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Cartel News</Text>
          <Text style={{ fontSize: 14, fontWeight: 'normal', color: '#0000007c' }}>The latest news about the cartel</Text>

          <View style={{ height: "auto", width: LibStyle.width-40 , marginTop: 20, borderRadius: 10, backgroundColor: 'white', }}>
            <LibIcon.Ionicons name="search" size={25} color="gray" style={{ position: 'absolute', right: 10, top: 10 }} />
            <TextInput placeholder="Search" style={{ height: 50, width: LibStyle.width-40, borderRadius: 10, backgroundColor: 'white', paddingLeft: 10, opacity: 0.7 }} />

          </View>

          <View style={{ height: "auto", width: LibStyle.width-40, marginTop: 20, borderRadius: 10, padding: 10, backgroundColor: 'white', }}>
            <Text style={{ marginLeft: 10, fontWeight: 'bold' }}>Categorie</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ height: 50, width: LibStyle.width - 20, borderRadius: 10, backgroundColor: 'white', paddingLeft: 10, marginTop: 10, opacity: 0.7, flexDirection: 'row', }} >

              <View style={{ height: 40, width: "auto", paddingHorizontal: 15, borderRadius: 10, backgroundColor: '#67b45f', justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
                <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'white' }}>All</Text>
              </View>
              <View style={{ height: 40, width: "auto", paddingHorizontal: 15, borderRadius: 10, backgroundColor: '#67b45f', justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
                <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'white' }}>News</Text>
              </View>
              <View style={{ height: 40, width: "auto", paddingHorizontal: 15, borderRadius: 10, backgroundColor: '#67b45f', justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
                <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'white' }}>Drug</Text>
              </View>
              <View style={{ height: 40, width: "auto", paddingHorizontal: 15, borderRadius: 10, backgroundColor: '#67b45f', justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
                <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'white' }}>Crime</Text>
              </View>
              <View style={{ height: 40, width: "auto", paddingHorizontal: 15, borderRadius: 10, backgroundColor: '#67b45f', justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
                <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'white' }}>Corruption</Text>
              </View>
              <View style={{ height: 40, width: "auto", paddingHorizontal: 15, borderRadius: 10, backgroundColor: '#67b45f', justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
                <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'white' }}>Arrest</Text>
              </View>

            </ScrollView>
          </View>


        </View>
      }
      renderItem={({ item, index }) =>
        <View style={{ height: "auto", width: LibStyle.width - 40, marginTop: 20, borderRadius: 10, backgroundColor: 'white',  }}>
          <View style={{ flexDirection: 'row', width: LibStyle.width - 40, alignItems: 'center', justifyContent: 'space-between',paddingRight:20, padding: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
            <View style={{  flexDirection: 'row', alignItems: 'center' }}>

              <ImageBackground resizeMode='cover' style={{ width: 40, height: 40, borderRadius: 50 / 2, marginRight: 10 }} imageStyle={{ borderRadius: 50 }} source={{ uri: 'https://1.bp.blogspot.com/-V0zhPzMaXZU/YH9z6BCyAcI/AAAAAAAAKtM/68YfQxNNFNc9UQOYJ6Vxx5-8u5DeXLHewCNcBGAsYHQ/s640/pengguna%2Banonim.jpg' }} >
              </ImageBackground>
              {/* console.log(data.articles[0].author); */}
              <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#0000007c' }}>{item.source_id}</Text>
            </View>
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#0000007c' }}>1 day ago</Text>
          </View>
          <ImageBackground resizeMode='cover' style={{ height: 160, width: LibStyle.width - 20, }} source={{ uri: 'https://publish.narco.news/content/images/2020/12/Screen-Shot-2020-12-19-at-4.11.51-PM.png' }} />


          <View style={{ padding: 10, marginBottom: 12 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginBottom: 12 }}>{item.title}</Text>
            <Text numberOfLines={3} style={{ fontSize: 16, fontWeight: 'normal', color: '#302d2d' }}>{item.description}</Text>
          </View>
        </View>}
      keyExtractor={(item, index) => index.toString()}
    />
    </View>

   

  )
}
export default memo(m);