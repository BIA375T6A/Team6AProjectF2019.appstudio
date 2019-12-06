importance = 0 

btnAddTask.onclick=function(){
  let task = inptTask.value
  let dueDate = inptDueDate.value
  let timeDue = inptTime.value 
  let taskLength = inptTaskLength.value 
  drpImpLeve.onclick=function(select){
  if (typeof(select) ==  "object")
    return
  else { 
    let importance = drpImportance.selection
    }
}
let taskImportance = 7
let netID = 'zon66666'

 //let query2 = "INSERT INTO task (task_name,task_duedate,task_duetime,task_length,task_importanceLevel,net_id) VALUES ('"+task+"','"+dueDate+"','"+timeDue+"','"+taskLength+"','"+tImportance+"','"+net+"')"
 let query = "INSERT INTO task (task_name,task_duedate,task_duetime,task_length,task_importanceLevel,net_id) VALUES ('"+task+"','"+dueDate+"','"+timeDue+"','"+taskLength+"','"+taskImportance+"','"+netID+"')" 
  req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=rgl17577&pass=BIA375&database=375groupa6&query=" + query)
if (req2.status == 200) { //transit worked.
        if (req2.responseText == 500) {   // means the insert succeeded
          //  var result = JSON.parse(req1.responseText)
            NSB.MsgBox("Your task has been added")
        } else
            NSB.MsgBox("There was an error entering your task try again")
    } else {
        // transit error
        NSB.MsgBox("Error: " + req2.status);
    }
}


AddTask.onshow=function(){
    Hamburger3.clear()
  Hamburger3.addItem("Add Events")
  Hamburger3.addItem("Add Tasks")
  Hamburger3.addItem("Add Class")
  Hamburger3.addItem("Add Assignment")
  Hamburger3.addItem("Login")
  Hamburger3.addItem("create an Account")
Hamburger3.addItem("Current Weather")
Hamburger3.addItem("Home")
}

Hamburger3.onclick=function(s){
    if (typeof(s) == "object"){ 
   return
   }
   switch(s) { 
case "Add Events": 
  ChangeForm(addEvent)
  break;
case "Add Tasks":
  ChangeForm(AddTask)
  break;
case "Add Class": 
  ChangeForm(addClass)
  break;
case "Add Assignment": 
  ChangeForm(addAssignment)
  break;
case "Login":
  ChangeForm(login)
  break;
case "Current Weather":
  ChangeForm(weatherAPI1)
  break;
case "create an Account":
  ChangeForm(userRegistration)
  break;
case "Home":
  ChangeForm(scheduleGenerator)
  break;
}
}
