let exercises = ["pullups","pushups","situps","jogging","plank","curls"]
let coreExercises = ["situps","plank"]
let selectChoices = []

favExercises.onshow=function(){
selExercises.clear()   
  for (i = 0; i <= exercises.length - 1; i++) 
        selExercises.addItem(exercises[i])
  for (i = 0; i <= coreExercises.length - 1; i++) 
        selExercises.addItem(coreExercises[i])
}

selExercises.onfocusout=function(s){
if (typeof(s) == "object") {
      return                    
    } else {
        selExercises.value = s
        selectChoices.push(s) 
  }
}

btnSubmit.onclick=function(){
    if (selExercises.length > 1) {
  lblMessageExercise.value = `You chose ${selExercises.text[0]} and ${selExercises.text[1]} - those are the two core exercises.`
  } else {
  lblMessageExercise.value = "You did not pick the two core exercises."
  }
}

btnNextPage.onclick=function(){
  ChangeForm(mobileNav)
}
