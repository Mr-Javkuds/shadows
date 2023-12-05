// withHooks
import { memo } from 'react';

import navigation from 'esoftplay/modules/lib/navigation';
import React from 'react';

import { View,Text, Button} from 'react-native';


export interface DetailDetailArgs {
  
}
export interface DetailDetailProps {
  
}
function m(props: DetailDetailProps): any {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Detail !</Text>
      <Button
        title="Go to splash"
        onPress={() => navigation.navigate('main/splash')}
      />
      <Button title="Go back" onPress={() => navigation.back()} />
    </View>
  )
}
export default memo(m);