var React  = require('react-native');
var Profile = require('./Profile.js');
var Repositories = require('./Repositories');
var Notes = require('./Notes');
var api = require('../../Utils/Api/Api');

var {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  ScrollView
} = React;

var styles = StyleSheet.create({

  scrollViewContainer:{
    flex:1,
    height: 800,

  },
  container:{
    // marginTop:65,
    flex:1
  },
  image:{
    height:350
  },
  buttonText:{
    fontSize:24,
    color:'white',
    alignSelf:'center'
  }
});

class  DashBoard extends React.Component {

  makeBackGoundColor(index){
    var obj = {
      flexDirection:'row',
      alignSelf:'stretch',
      justifyContent:'center',
      flex:1,
      height:80
    }
    if (index === 0) {
      obj.backgroundColor = '#E6876B'
    }else if (index === 1) {
      obj.backgroundColor = '#A234BC'
    }else {
      obj.backgroundColor = '#4AB454'
    }
    return obj;
  }

  goToProfile(){
    this.props.navigator.push({
      title:'Profile Page',
      component:Profile,
      passProps:{userInfo:this.props.userInfo}
    });

  }

  goToRepos(){
    api.getRepos(this.props.userInfo.login)
      .then((res) => {
        this.props.navigator.push({
          title:'Repos',
          component:Repositories,
          passProps:{
            userInfo:this.props.userInfo,
            repos:res
          }
        });
      })
  }

  goToNotes(){
    api.getNote(this.props.userInfo.login)
      .then((res) => {
        res = res || {};
        this.props.navigator.push({
          component:Notes,
          title:'Notes',
          passProps:{
            notes:res,
            userInfo :this.props.userInfo
          }
        });
      });
  }

  render(){
      return (
        <ScrollView style={styles.scrollViewContainer}>
          <View style={styles.container}>
            <Image source={{uri:this.props.userInfo.avatar_url}} style={styles.image}/>
            <TouchableHighlight
              style={this.makeBackGoundColor(0)}
              onPress={this.goToProfile.bind(this)}
              underlayColor='#111'>
              <Text style={styles.buttonText}>View Profile
              </Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={this.makeBackGoundColor(1)}
              onPress={this.goToRepos.bind(this)}
              underlayColor='#111'>
              <Text style={styles.buttonText}>View Repos
              </Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={this.makeBackGoundColor(2)}
              onPress={this.goToNotes.bind(this)}
              underlayColor='#111'>
              <Text style={styles.buttonText}>View Notes
              </Text>
            </TouchableHighlight>
          </View>
        </ScrollView>
      )
  };
}

module.exports = DashBoard;
