var React  = require('react-native');

var {
  View,
  Text,
  StyleSheet,
  NavigatorIOS
} = React;

var MainContent = require('./MainContent.js');

var styles = StyleSheet.create({


  container:{
		flex:1
	}

});

class Main extends React.Component{
    render(){
      return (
        <NavigatorIOS
				ref="nav"
				style={styles.container}
				initialRoute={{
					title:'首页',
          component:MainContent
				}}
			/>
      )
    }
}

module.exports = Main;
