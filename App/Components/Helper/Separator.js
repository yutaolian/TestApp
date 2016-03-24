var React = require('react-native');

var {

  View,
  StyleSheet
} = React;

var styles = StyleSheet.create({
  separator:{
    height:1,
    backgroundColor:'#e4e4e4',
    flex:1,
    marginLeft:15,
    marginTop:10
  }
});

 class Separator extends React.Component{
  render(){
    return (
      <View style={styles.separator}>
      </View>
    )
  }
}

module.exports = Separator;
