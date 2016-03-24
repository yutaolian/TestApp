var React  = require('react-native');

var api = require('../../Utils/Api/Api');

var DashBoard = require('./DashBoard.js');

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
    padding:20,
    justifyContent:'center',
    marginTop:45,
    backgroundColor:'#48bbec',
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
  },
  loading:{
		flex :1,
		alignItems:'center',
		justifyContent:'center',
    color:'#111'
	}


});

class MainContent extends React.Component{

  constructor(props){
    super(props);
    this.state = ({
      username : '',
      isLoading : false,
      error : false
    })
  }
  handleChange(event){
    this.setState({
      username : event.nativeEvent.text
    });
  }
  handleSubmit(){
    this.setState({
      isLoading:true
    });
    console.log('username is :',this.state.username);
    api.getBio(this.state.username)
      .then((res) => {
        if (res.message === 'Not Found') {
          this.setState({
            error:'User not Found',
            isLoading:false
          });
        }else {
          this.props.navigator.push({
            title:res.name || 'selecte an operation',
            component:DashBoard,
            passProps:{userInfo:res}
          });
          this.setState({
            isLoading:false,
            error:false,
            username:''
          });
        }
      });
  }

  render(){

    var showErr = (
      this.state.error ? <Text>{this.state.error}</Text>:<View></View>
    );
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Search for github</Text>
        <TextInput
          style={styles.searchInput}
          value={this.state.username}
          onChange={this.handleChange.bind(this)}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
          underlayColor='white'>
          <Text style={styles.buttonText}> SESRCH </Text>
          </TouchableHighlight>
          <ActivityIndicatorIOS
            animating={this.state.isLoading}
            color="#111"
            size="large"></ActivityIndicatorIOS>
          {showErr}
      </View>
    )
  }
}


module.exports = MainContent;
