var React  = require('react-native');

var {
  View,
  Text,
  StyleSheet,
  NavigatorIOS
} = React;

var HomeContent = require('./HomeContent.js');

var styles = StyleSheet.create({
  container:{
		flex:1
	}
});

class Home extends React.Component{

    render(){
      return (
        <NavigatorIOS
				ref="nav"
				style={styles.container}
				initialRoute={{
					title:'Home',
          component:HomeContent
				}}
        tintColor="#45b97c"
        barTintColor="#45b97c"
        titleTextColor="#FFFFFF"
        translucent={true}
			/>
      )
    }
}

module.exports = Home;
