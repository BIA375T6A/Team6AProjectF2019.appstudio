/*
classSubmit.onclick=function(){
   let check1 = className.value
   let check2 = classStartTime.value
   let check3 = classEndTime.value
   let check4 = 5
   let check5 = pointsAvailable.value
    let query = "INSERT INTO class (class_name, class_starttime, class_endtime, class_meetingdays, class_totalpointvalue) VALUES ('"+check1+"','"+check2+"','"+check3+"','"+check4+"','"+check5+")"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dpt73961&pass=4Flagstaff$&database=375groupa6&query=" + query)

    if (req1.status == 200) { //transit worked. 
        results = JSON.parse(req1.responseText)
        console.log(results)
    if (results.length == 500)
        NSB.MsgBox("You have succesfully created the class.")
    } else        
       NSB.MsgBox("There was an unexpected issue")

   } else {
        NSB.MsgBox("Error code: " + req1.status);
}


}

*/

Button4.onclick=function(){
   ChangeForm(addAssignment)
}
