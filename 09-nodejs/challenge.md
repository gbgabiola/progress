# Challenges

## Setup a express server challenge:

1. Create new directory called my-express-server
2. cd into the new directory
3. Inside create a new file called server.js
4. Initialize npm with server.js as start point


## Page route challenge:

- Create an about page route


## Calculator website setup challenge:

1. Make a new folder called Calculator on your Desktop
2. Change Directory to this new folder
3. Inside the Calculator folder, create a new file called - **calculator.js**
4. Set up a new NPM package
5. Open the project folder in Atom 
6. Using NPM install the **express** module
7. Require express in your `calculator.js`
8. Setup express
9. Create a root route get method with `app.get()`
10. Send the words **Hello World** from the root route as the - response
11. Spin up our server on port **3000** with `app.listen`
12. Run server with **nodemon**


## BMI Calculator challenge:

1. Create a new file called **bmiCalculator.html** inside the Calculator folder
2. Add the **HTML boilerplate** and set the page title to BMI Calculator
3. Add an **HTML form**, this form will make a **post request** to our server at the route `/bmicalculator`. The form will have 2 inputs, weight and height with placeholder text that tell the user what they should type into which text box. 
4. Add a button which says "Caculate BMI"
5. Add the get and post methods for the `/bmicalculator` route into the same calculator.js
6. Use `sendFile()` to send the **bmiCalculator.html** page as a response inside the get method.
7. Add an h1 that says **BMI Calculator**
8. Inside calculator.js , create 2 variables, one for weight and one for height. 
9. Use the BMI calculator code you wrote previously, or write some new code to calculate and send back the result as text. It should read something like "Your BMI is **n**" where n is equal to the calculated BMI based on their weight and height inputs.