
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
let impLevel = drpValue
let datee = inptDate.value 
let start = inptStartTime.value 
let netID = 'zon66666' 
  let query = "INSERT INTO event (event_name,date,time,event_length,location,importance_level,net_id) VALUES ('"+event+"', '"+datee+"', '"+start+"', '"+length+"', '"+locat+"', '"+impLevel+"',"+netID+")" 
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


Button2.onclick=function(){
   ChangeForm(AddTask)
}
