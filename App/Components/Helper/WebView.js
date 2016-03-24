var React = require('react-native');

var {
  WebView,
  View,
  StyleSheet

} = React;

var styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'#F6F6EF',
    flexDirection:'column'
  }
});

class Web extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <WebView url={this.props.url}/>
      </View>
    )
  }
}

Web.PropTypes = {
  url: React.PropTypes.string.isRequrid
}

module.exports = Web;
