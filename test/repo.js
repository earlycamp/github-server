var assert = require('assert');
var repo = require('../repo.js');

describe('repo', function(){
  it('should check if repo.getRepo exists', function(){
     assert.deepEqual('function', typeof repo.getRepo);
  });
});
