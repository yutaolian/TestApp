var React  = require('react-native');

var {
  View,
  Text,
  StyleSheet,
  NavigatorIOS,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS
} = React;

var styles = StyleSheet.create({

  mainContainer:{
    flex:1,
    padding:30,
    justifyContent:'center',
    marginTop:65,
    backgroundColor:'#fff',
    flexDirection:'column'
  },

  title:{
    marginBottom:20,
    fontSize:25,
    textAlign:'center',
    color:'#fff'
  },

  searchInput:{
    height:50,
    padding:4,
    marginRight:5,
    fontSize:23,
    borderWidth:1,
    borderColor:'white',
    borderRadius:8,
    color:'white'
  },

  buttonText:{

    fontSize:18,
    color:'#111',
    alignSelf:'center'
  },

  button:{
    height:45,
    flexDirection:'row',
    backgroundColor:'white',
    borderColor:'white',
    borderWidth:1,
    borderRadius:8,
    marginTop:10,
    justifyContent:'center',
    alignSelf:'stretch'
  }

});

class HomeContent extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      username:'',
      isLoading:false,
      error:false
    }
  }
  handleChange(event){
    this.state = {
      username:event.nativeEvent.text
    };
  }
  handleSubmit(){
    this.state = {
      isLoading:true
    };

    console.log('username',this.state.username);

  }

  render(){
    return (
      <View style={styles.mainContainer}>
      
      </View>
    )
  }
}


module.exports = HomeContent;
