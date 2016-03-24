/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  TabBarIOS,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

var Main = require('./App/Components/Main/Main.js');
var Home = require('./App/Components/Main/Home.js');
var styles = StyleSheet.create({
  container:{
		flex:1,
		//paddingTop:64
	}
});

class TestApp extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedTab:'main'
    };
  }
  render(){
    return (
      <Main/>
      // <TabBarIOS
      //   selectedTab={this.state.selectedTab}
      //   tintColor='#548B54'
      //   >
      //
      //   <TabBarIOS.Item
      //     selected={this.state.selectedTab === 'main'}
      //     systemIcon = {'featured'}
      //     title = {'main'}
      //     onPress={() => {
      //       this.setState({
      //         selectedTab :'main'
      //       });
      //     }}>
      //     <Main/>
      //   </TabBarIOS.Item>
      //   <TabBarIOS.Item
      //     selected={this.state.selectedTab === 'home'}
      //     icon={ require('image!home') }
      //     title = {'home'}
      //     onPress={() => {
      //       this.setState({
      //         selectedTab :'home'
      //       });
      //     }}>
      //     <Home/>
      //   </TabBarIOS.Item>
      // </TabBarIOS>
    );
}
}
AppRegistry.registerComponent('TestApp', () => TestApp);
