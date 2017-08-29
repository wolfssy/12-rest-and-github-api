# Portfolio Assignment for Class 12 - REST and API's

In our blog, we used RESTful routes to interact with the Github API.  It's time to take this a step further and integrate this functionality into your portfolio project.

To get started, you will need to create a controller that includes a call to the Github API. This call should grab data about your individual account, and render the following portions of the returned content to the page, **once the data has been loaded**:

- Repo names, with
  - total number of commits on each
  - the average length of your commit messages on each repo
  - any other stats you'd like to cook up using the data!

## Technical Requirements and Grading Rubric
 - Ensure your code passes ESLint.
 - Place all code within the proper layer of MVC abstraction and encapsulation.
 - Use a proxied, authenticated AJAX call to GitHub's API to get data from the API.
 - Keep your portfolio responsive as it displays API data.
 - DO NOT publish your GitHub Token to any public repo.
