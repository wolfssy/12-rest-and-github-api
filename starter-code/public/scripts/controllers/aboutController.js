'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
    $('#about').show().siblings().hide(); // REVIEW: We have a slight refactor in selectors here, which has reduced the amount of code from the last lab.

    // TODO: Call a function to load all the data.
    // Pass a view function as a callback, so the view will render after the data is loaded.
    $.ajax({
      url:'https://api.github.com/user/repos',
      method: 'GET',
      headers: {
        Authorization: `token ${githubToken}` //this is what github wants
        }
    })
    //.then (success, fail)
    .then(
      //  sucess
      data => data.forEach(repo => $(`{{name}}`).append(`<p> ${repo.name} </p>`)),
      data => data.forEach(repo => $(`{{description}}`).append(`<p> ${repo.description} </p>`)),
      data => data.forEach(repo => $(`{{language}}`).append(`<p> ${repo.language} </p>`)),
      data => data.forEach(repo => $(`{{created_at}}`).append(`<p> ${repo.created_at} </p>`)),
      data => data.forEach(repo => $(`{{updated_at}}`).append(`<p> ${repo.updated_at} </p>`)),
      data => data.forEach(repo => $(`{{watchers_count}}`).append(`<p> ${repo.watchers_count} </p>`)),
      //  fail
      err => console.error(err.status, err.statusText, 'is the way my stuff is broken'))
  };

  module.aboutController = aboutController;
})(app);
