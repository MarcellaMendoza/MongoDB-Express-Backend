# Instructions  

---

This lesson involves finding documents
based on user input. You will need to edit
'index.js' and 'script.js'. Use the 
sample_analytics.customers collection.

Start by running `npm install` to get the 
packages you need. Then, update your MongoDB client
connection url to reflect your own
information. Next, modify the `find()`
function to find document(s) matching
the user's chosen `searchBy` method
and their `input`. You should return
a valid JSON object to the frontend.
- You should return only one document (use `findOne`)
- Do not use `project` since it will not work with
  `findOne`

In 'script.js', you should make a `fetch` request
and display this text:

`<name result> + ' has username ' + <username result> + ' and email ' + <email result> + "." `

inside the `<div>` with `id="resultElem"`. If no user is found, the div
should say "No user found." If an error 
occurs, the div should say "An error occurred on
our end. Please try again."