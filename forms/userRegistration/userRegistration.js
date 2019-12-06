userRegistration.onshow=function(){
    Hamburger1.clear()
  Hamburger1.addItem("Add Events")
  Hamburger1.addItem("Add Tasks")
  Hamburger1.addItem("Add Class")
  Hamburger1.addItem("Add Assignment")
  Hamburger1.addItem("Login")
  Hamburger1.addItem("create an Account")
Hamburger1.addItem("Current Weather")
Hamburger1.addItem("Home")
}

BtnSubmit.onclick=function(){
  var netid = inptUsername.value
  var password = inptPass.value
  var email = inptEmail.value
  var firstname = inptFirst.value
  var lastname = inptLast.value
  
  var query1 = "INSERT INTO user (net_id,first_name,last_name,email,password) VALUES ('"+netid+"', '"+firstname+"', '"+lastname+"','"+email+"','"+password+"')"
  
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=zon68891&pass=Ryan#19976633&database=375groupa6&query=" + query1)
  
  if (req1.status == 200) { //transit worked.
        if (req1.responseText == 500) {   // means the insert succeeded
          //  var result = JSON.parse(req1.responseText)
            NSB.MsgBox("You have successfully added the user!")
        } else
            NSB.MsgBox("There was a problem with adding the user to the database.")
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);
    }  

  
}


Hamburger1.onclick=function(s){
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


