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
let taskImp = importance 

 let query2 = "INSERT INTO task (task_name, task_duedate, task_duetime, task_length, task_importanceLevel) VALUES ( '" + task  +   "' ,  '" + dueDate + "' ,  '"  + timeDue +  "', '"  + taskLength +  "', " + taskImp +  ") "
  req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=rgl17577&pass=BIA375&database=375groupa6&query=" + query2)
if (req2.status == 200) { //transit worked.
        if (req2.responseText == 500) {   // means the insert succeeded
          //  var result = JSON.parse(req1.responseText)
            NSB.MsgBox("Your event has been added")
        } else
            NSB.MsgBox("There was an error entering your event try again")
    } else {
        // transit error
        NSB.MsgBox("Error: " + req2.status);
    }
}


  

