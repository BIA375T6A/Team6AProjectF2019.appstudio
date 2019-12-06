addEvent.onshow=function(){
    Hamburger4.clear()
  Hamburger4.addItem("Add Events")
  Hamburger4.addItem("Add Tasks")
  Hamburger4.addItem("Add Class")
  Hamburger4.addItem("Add Assignment")
  Hamburger4.addItem("Login")
  Hamburger4.addItem("create an Account")
Hamburger4.addItem("Current Weather")
Hamburger4.addItem("Home")
}

drpValue = 0 

btnAddEvent.onclick=function(){
let event = inptEvent.value
let locat = inptLocation.value 
let length = inptLength.value
drpImportance.onclick=function(select){
  if (typeof(select) == "object") 
    return
  else { 
    let drpValue = drpImportance.selection
    }
}
let impLevel = 5
let datee = inptDate.value 
let start = inptStartTime.value 
let netID = 'zon66666' 
  let query = "INSERT INTO event (event_name,date,time,event_length,location,importance_level,net_id) VALUES ('"+event+"','"+datee+"','"+start+"','"+length+"','"+locat+"','"+impLevel+"','"+netID+"')" 
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=rgl17577&pass=BIA375&database=375groupa6&query=" + query)
if (req1.status == 200) { //transit worked.
        if (req1.responseText == 500) {   // means the insert succeeded
          //  var result = JSON.parse(req1.responseText)
            NSB.MsgBox("Your event has been added")
        } else
            NSB.MsgBox("There was an error entering your event try again")
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);
    }
}



Hamburger4.onclick=function(s){
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


