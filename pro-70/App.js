import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs' 
import WriteStoryScreen from './main/main1/screens/WriteStoryScreen'
import ReadStoryScreen from './main/main1/screens/ReadStoryScreen'

export default class App extends React.Component {
  render(){
    return(
      <AppContainer />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  WriteStory: WriteStoryScreen,
  ReadStory: ReadStoryScreen
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "WriteStory"){
        return(
          <Image
          source={require("./main/main1/assets/write.png")}
          style={{width:40, height:40}}
        />
        )
        
      }
      else if(routeName === "ReadStory"){
        return(
          <Image
          source={require("./main/main1/assets/read.png")}
          style={{width:40, height:40}}
        />)
        
      }
    }
  })
}
  )

const AppContainer = createAppContainer(TabNavigator);

