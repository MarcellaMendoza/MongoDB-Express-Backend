# Lesson plan
  
---

(In index.js) Something like this:
```
let cursor = {};
      if (searchBy === "firstName") {
        cursor = await collection.find({firstName: input}).project({_id: 0}).sort({firstName: 1}).limit(3).toArray()
      } 
      else if (searchBy === "lastName") {
        cursor = await collection.find({lastName: input}).project({_id: 0}).sort({lastName: 1}).limit(3).toArray()
      }
      else if (searchBy === "email") {
        cursor = await collection.find({email: input}).project({_id: 0}).sort({email: 1}).limit(3).toArray()
      }
      else {
        cursor = await collection.find({phone: input}).project({_id: 0}).sort({phone: 1}).limit(3).toArray()
      }
```

Can be shortened by using JS variables in the search query to just this:
```
const cursor = await collection.find({[searchBy]: input}).project({_id: 0}).sort({[searchBy]: 1}).limit(3).toArray()
```

My function inside script.js ended up looking like this:
```
async function findClicked() {
  try {
    const url = "/users/" + searchBy + "/" + inputField.value
    const rawRes = await fetch(url) 
    const json = await rawRes.json()
    if (json.length > 0) { // If 1+ entry was found
      resultElem.innerHTML = ""
      for (let i=0; i<json.length; i++) {
        resultElem.innerHTML += `<div>${json[i].firstName} | ${json[i].lastName} | ${json[i].email} | 
        ${json[i].phone}</div>`
      }
    }
    else {
      resultElem.innerHTML = "<div>No one was found</div>"
    }
  }
  catch(err) {
    console.log(err)
    resultElem.innerHTML = "<div>Something went wrong on our side. Please try again.</div>"
  }
}
```