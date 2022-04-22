import React from 'react';
import {StyleSheet, View} from 'react-native';
import {WebView} from 'react-native-webview';

export default class App extends React.Component {
  onNavigationStateChange = (navState)=>{
    console.log('navState', navState)
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <WebView
          source={{uri: 'https://google.com'}}
          ref={'webview'}
          onNavigationStateChange = {this.onNavigationStateChange}
          >


          </WebView>
      </View>
    );
  }
}
