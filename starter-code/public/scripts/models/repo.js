'use strict';
var app = app || {};

(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    // TODO: How would you like to fetch your repos? Don't forget to call the callback.
    //       Remember that the callback function we'll want to call relies on repos.all
    //       being an array with a bunch of repo objects in it, so you'll need to
    //       populate it with the response from Github before you call the callback.
    $.ajax({
      url: 'https://api.github.com/user/repos',
      method:'GET', headers: { Authorization: `token ${githubToken}`
      }
  //.then sucess or fail
    }).then(
  //sucess
  data => {
    repos.all = data;
  },
  //fail
  err => {
    console.error(err);
  })
  .then(callback);
  };

  // REVIEW: Model method that filters the full collection for repos with a particular attribute.
  // You could use this to filter all repos that have a non-zero `forks_count`, `stargazers_count`, or `watchers_count`.
  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);
