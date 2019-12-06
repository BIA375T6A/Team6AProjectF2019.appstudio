
assignmentSubmit.onclick=function(){
    let check1 = assignmentName.value
   let check2 = dueDate.value
   let check3 = timeDue.value
   let check4 = assignmentLength.value
   let check5 = pointValue.value
   let netid = "KMJ23456"
   let classid = 2
    let query = "INSERT INTO assignment (assignment_name, assignment_duedate, assignment_duetime, assignment_length, assignment_pointvalue, net_id, class_id) VALUES ('"+check1+"','"+check2+"','"+check3+"','"+check4+"','"+check5+"', '"+netid+"', '"+classid+"')"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dpt73961&pass=4Flagstaff$&database=375groupa6&query=" + query)

   if (req1.status == 200) { //transit worked.
        if (req1.responseText == 500) {   // means the insert succeeded
          //  var result = JSON.parse(req1.responseText)
            NSB.MsgBox("Your assignment has been added")
        } else
            NSB.MsgBox("There was an error entering your assignment try again")
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);
    }
}


addAssignment.onshow=function(){
      Hamburger5.clear()
  Hamburger5.addItem("Add Events")
  Hamburger5.addItem("Add Tasks")
  Hamburger5.addItem("Add Class")
  Hamburger5.addItem("Add Assignment")
  Hamburger5.addItem("Login")
  Hamburger5.addItem("create an Account")
Hamburger5.addItem("Current Weather")
Hamburger5.addItem("Home")
}

Hamburger5.onclick=function(s){
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
