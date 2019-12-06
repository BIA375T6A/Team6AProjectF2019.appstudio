
classSubmit.onclick=function(){
   let check1 = className.value
   let check2 = classStartTime.value
   let check3 = classEndTime.value
   let check4 = classMeet.value
   let check5 = pointsAvailable.value
   let netid = "KMJ23456"
    let query = "INSERT INTO class (class_name, class_starttime, class_endtime, class_meetingdays, class_totalpointvalue, net_id) VALUES ('"+check1+"','"+check2+"','"+check3+"','"+check4+"','"+check5+"', '"+netid+"')"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dpt73961&pass=4Flagstaff$&database=375groupa6&query=" + query)

   if (req1.status == 200) { //transit worked.
        if (req1.responseText == 500) {   // means the insert succeeded
          //  var result = JSON.parse(req1.responseText)
            NSB.MsgBox("Your class has been added")
        } else
            NSB.MsgBox("There was an error entering your event try again")
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);
    }
}





addClass.onshow=function(){
        Hamburger6.clear()
  Hamburger6.addItem("Add Events")
  Hamburger6.addItem("Add Tasks")
  Hamburger6.addItem("Add Class")
  Hamburger6.addItem("Add Assignment")
  Hamburger6.addItem("Login")
  Hamburger6.addItem("create an Account")
Hamburger6.addItem("Current Weather")
Hamburger6.addItem("Home")
}


Hamburger6.onclick=function(s){
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
