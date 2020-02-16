# Letting Users Follow Each Other

## Saving a "Follow" Action to Database

- Fix the author and gravatar link for every post
- Fix form action for the follow button
- Add route for following users, and make sure to add the function that the user must be logged in first
- Create a new instance of `Follow` and pass two (2) things
  - 1st: username that current user wants to follow
  - 2nd: id of the current visitor that has session data or logged in
- If success on the promise, use a success flash, manually save the session and redirect to the profile of the user
- If failed catch the errors w/ error flash, manually save the session and redirect to the home page
- Create a create method that returns new Promise w/ resolve & reject parameters, then call `cleanUp()` and `validate()` method
- Create a prototype of `cleanUp` to check if the data type is not a string then set it as empty string
- Create a prototype of `validate` to check if the user exist and if not push error to the array


## Stop Following a User

- Create a shared profile data function
- Update profile views to show "Stop Following" when you are already following the user
- Add `isVisitorFollowing` function to check if you are already following the user
- Add additional validation, to some you already follow or to someone you are not following
- Add additional validate so you cannot follow yourself
- Hide the follow button on your own profile


## Profile Followers and Following Screen

- Update the profile and make the data dynamic
- Create a shared include files to store duplicated codes for profiles into one file
- Add additional routes for followers and following tab
- Adjust the current tab to show what's currently selected
- Pull the real data of the number of posts tab, number of followers tab, and number of following tab
- Use an **Array desctructing** for a cleaner approach of creating variables and assigning the value of the Array
- `countDocuments` mongoDB method


## Homepage Feed

- Update the homepage to show latest posts from people you follow
- Add a condition if people you followed have posts, display it in the dashboard, but if people you followed doesn't have posts display else which should empty dashboard
- Posts of the people you followed should be sorted by the latest posts
