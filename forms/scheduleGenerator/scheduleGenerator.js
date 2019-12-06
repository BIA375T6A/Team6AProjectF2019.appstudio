
schCreate.onclick=function(){
let message1 = ""
let message2 = ""
let message3 = ""
let message4 = ""
  let dateCheck = dateTest.value 
  console.log("The date check variable is" + dateCheck)
  let queryClass = "SELECT class_name, class_starttime, class_endtime FROM class WHERE class_meetingdays = 'Monday'" 
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dpt73961&pass=4Flagstaff$&database=375groupa6&query=" + queryClass)
  
  
  

if (req1.status == 200) { //transit worked.
     //   if (req1.responseText == 500) {   // means the insert succeeded
            var results = JSON.parse(req1.responseText)
         /*   NSB.MsgBox("Your event has been added")
        } else
            NSB.MsgBox("There was an error entering your 1 try again")
       */
        message1 = ""
        for (i = 0; i <= results.length - 1; i++)
            message1 = message1 + results[i][0] + results[i][1] + results[i][2] + "\n"
          // dailySch.value = message
        
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);
    }
let queryAssi = "SELECT assignment_name, assignment_duetime, assignment_length, assignment_pointvalue, assignment_duedate FROM assignment WHERE assignment_duedate = ('" +dateCheck+ "')" 
  req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dpt73961&pass=4Flagstaff$&database=375groupa6&query=" + queryAssi)

if (req2.status == 200) { //transit worked.
       // if (req2.responseText == 500) {   // means the insert succeeded
             var results2 = JSON.parse(req2.responseText)
          /*  NSB.MsgBox("Your event has been added")
        } else
            NSB.MsgBox("There was an error entering your 2 try again")
       */
       console.log("The date time from the data base is" + results2)
        message2 = ""
        for (i = 0; i <= results2.length - 1; i++) {
          console.log(results2[i][0])
            message2 = message2 + results2[i][0] + results2[i][1] + results2[i][2] + results2[i][3] + "\n"
         }
        
        
    } else {
        // transit error
        NSB.MsgBox("Error: " + req2.status);
    }
let queryEvent = "SELECT event_name, time, location, event_length FROM event WHERE date = ('" +dateCheck+ "')"
  req3 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dpt73961&pass=4Flagstaff$&database=375groupa6&query=" + queryEvent)
if (req3.status == 200) { //transit worked.
       // if (req3.responseText == 500) {   // means the insert succeeded
            var results3 = JSON.parse(req3.responseText)
            //NSB.MsgBox("Your event has been added")
       // } else
       //     NSB.MsgBox("There was an error entering your 3 try again")
         message3 = ""
        for (i = 0; i <= results3.length - 1; i++)
            message3 = message3 + results3[i][0] + results3[i][1] + results3[i][2] + results3[i][3] + "\n"
           dailySch.value = message1 + "___________\n" + message2+ "___________\n" + message3 + "___________\n" + message4
        
    } else {
        // transit error
        NSB.MsgBox("Error: " + req3.status);
    }
/*
let queryTask = "SELECT task_name, task_duetime, task_length FROM task WHERE duedate = ('" +dateCheck+ "')"
  req4 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dpt73961&pass=4Flagstaff$&database=375groupa6&query=" + queryTask)
if (req4.status == 200) { //transit worked.
       // if (req4.responseText == 500) {   // means the insert succeeded
           var  results4 = JSON.parse(req4.responseText)
          //  NSB.MsgBox("Your event has been added")
      //  } else
       //     NSB.MsgBox("There was an error entering your 4 try again")
         message4 = ""
        for (i = 0; i <= results4.length - 1; i++)
            message4 = message4 + results4[i][0] + results4[i][1] + results4[i][2] + "\n"
         dailySch.value = message1 + "___________\n" + message2+ "___________\n" + message3 + "___________\n" + message4
        
    } else {
        // transit error
        NSB.MsgBox("Error: " + req4.status);
    }
*/
}




scheduleGenerator.onshow=function(){
        Hamburger8.clear()
  Hamburger8.addItem("Add Events")
  Hamburger8.addItem("Add Tasks")
  Hamburger8.addItem("Add Class")
  Hamburger8.addItem("Add Assignment")
  Hamburger8.addItem("Login")
  Hamburger8.addItem("create an Account")
  Hamburger8.addItem("Current Weather")
Hamburger8.addItem("Home")
}

Hamburger8.onclick=function(s){
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
