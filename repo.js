var Octokat = require('octokat');
var config = require('./config/development.js');
var markdown = require('markdown').markdown;
// var GitHubApi = require('github');
octo = new Octokat(config);
const ghteams     = require('ghteams')
    , authOptions = { user: 'Name', token: config.token }

var jina = 'Name';
var teams = ['team', 'team'];
var path = ['markdown-1', 'markdown-2'];
	  for(var i = 0; i < teams.length; i++){
    for(var j = 0; j < teams[i].length; j++){

        console.log(teams[i][j]);
    }
}
module.exports = {
  getTeams: function(req, res) {
	  ghteams.members(authOptions, 'organization', teams[0], function (err, teamlist) {
	  	console.log(teamlist)
	  var names = teamlist.map(function(x){
	  	return(x.login)
	  })
	  console.log(names)
	  for(var x = 0; x<=names.length; x++){
	  	if(jina===names[x]){
	  		var repo = octo.repos('organization', 'repo');
    repo.contents(path[0])
    .read()
    .then(function (contents) {
			res.send(markdown.toHTML(contents));
    });
    break;
	  	}
	  }
		  // res.send(names)
		})
  }
};
