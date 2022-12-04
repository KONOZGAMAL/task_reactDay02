
// import { StyleSheet, Text, View } from 'react-native';
// import Button from './Day02/button';
// export default function App() {
//   return (
//      <View >
//       <Text>Open up App.js to start working </Text>
//       <Button />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import React from "react";
import { SafeAreaView ,Text,View,StyleSheet, Platform} from "react-native";
import Box from './Day02/box'
export default function App(){
  return(
   <SafeAreaView>
    <View style={styles.containerStyle}> 
<Text style={styles.text}> Here are some boxes with color names </Text>
<Box title="Cyan : #2aa198" bgColor="#2aa198"/>
<Box title="Blue : #268bd2" bgColor="#268bd2"/>
<Box title="Magenta : #d33682" bgColor="#d33682"/>
<Box title="Orange : #cb4b16" bgColor="#cb4b16"/>
<Box title="Bonus : #cb4b16" bgColor={Platform.OS==='ios'? 'red':'blue'}/>
</View>
  </SafeAreaView>
  );
};
const styles =StyleSheet.create({
  containerStyle:{
    marginTop:50,
    paddingHorizontal:15,
  },
  text:{
    fontSize:22,
    fontWeight:'bold',
marginBottom:15,
  }
})