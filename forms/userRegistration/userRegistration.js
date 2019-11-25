
BtnSubmit.onclick=function(){
  var netid = inptUsername.value
  var password = inptPass.value
  var email = inptEmail.value
  var firstname = inptFirst.value
  var lastname = inptLast.value
  
  var query1 = "INSERT INTO user (net_id,first_name,last_name,email,password) VALUES ('"+netid+"', '"+firstname+"', '"+lastname+"','"+ email+"'," +password+")"
  
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
