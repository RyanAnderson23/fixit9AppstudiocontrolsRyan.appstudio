
hmbMenu.onclick=function(s){
  if (typeof(s) == "object") {
    return
  } else {
    switch(s) {
  case "Log in":
    EditForm(loginForm)
    break
case "Fave Foods":
  EditForm(favoriteFoods)
  break
case "Dessert Voting":
  EditForm(dessertVoting)
  break
case "Describing You":
  EditForm(describeYourself)
  break
case "Exercise Knowledge":
  EditForm(favExercise)
  break
    }
  }
}




