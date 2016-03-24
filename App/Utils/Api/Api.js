
var path = require('./Const');

var Api = {

  getBio(username){
    username = username.toLowerCase().trim();
    var url = path.bioPath + '/' + username;
    //console.log('url is '+url);
    return fetch(url).then((res) => res.json());
  },

  getRepos(username){
    username = username.toLowerCase().trim();
    var url = path.reposPath+'/' + username+ '/repos';
    console.log('url is '+url);
    return fetch(url).then((res) => res.json());
  },

  getNote(username){
    username = username.toLowerCase().trim();
    var url = 'https://haha-test.firebaseio.com/'+username+'.json';
    return fetch(url).then((res) => res.json());
  },

  addNote(username,note){
    username = username.toLowerCase().trim();
    var url = 'https://haha-test.firebaseio.com/'+username+'.json';
    return fetch(url,{
      method:'post',
      body:JSON.stringify(note)
    }).then((res) => res.json());
  }

};

module.exports = Api;
