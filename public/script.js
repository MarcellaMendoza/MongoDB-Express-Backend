let searchBy = ""
const grid = document.getElementsByClassName('grid')[0]
const updateBtn = document.getElementById('updateBtn')
const deleteBtn = document.getElementById('deleteBtn')
const nameBtn = document.getElementById('nameBtn')
const usernameBtn = document.getElementById('usernameBtn')
const emailBtn = document.getElementById('emailBtn')
const instructions = document.getElementById('instructions')
const inputField = document.getElementById('inputField')
const findBtn = document.getElementById('find')
const resultElem = document.getElementById('resultElem')



function nameClicked() {
  searchBy = "name"
  SetAllInactive()
  nameBtn.classList.add('active')
  ShowNext()
  SetInstructions("name")
}

function usernameClicked() {
  searchBy = "username"
  SetAllInactive()
  usernameBtn.classList.add('active')
  ShowNext()
  SetInstructions("username")
}

function emailClicked() {
  searchBy = "email"
  SetAllInactive()
  emailBtn.classList.add('active')
  ShowNext()
  SetInstructions(searchBy)
}


function SetAllInactive() {
  nameBtn.classList.remove('active')
  nameBtn.classList.add('inactive')

  usernameBtn.classList.remove('active')
  usernameBtn.classList.add('inactive')

  emailBtn.classList.remove('active')
  emailBtn.classList.add('inactive')
}

function SetInstructions(searchBy) {
  instructions.innerHTML = "Enter the " + searchBy + " for the account you would like to find:"
}

function ShowNext() {
  instructions.style.display = "block"
  inputField.style.display = "block"
  findBtn.style.display = "block"
}







async function findClicked() {
  try {
    // ****** Add your code here to make a fetch
    // request and then update resultElem
    const url = 'users/' + searchBy + '/' + inputField.value
    const rawRes = await fetch(url)
    const json = await rawRes.json()
    console.log('json' + json)
    resultElem.innerText = json.name + ' has username ' + json.username + ' and email ' + json.email + "."
    
  }
  catch(err) {
    // *** Use this block to show an error message
    console.log(err)
    resultElem.innerText = "ERROR! Something went wrong!"
  }
}

