/*
Submit2.onclick=function(){
   let check1 = assignmentName.value
   let check2 = dueDate.value
   let check3 = timeDue.value
   let check4 = assignmentLength.value
   let check5 = pointvalue.value
    let query = "SELECT * FROM customer WHERE state = " + '"' + check + '"'  
 // alert(query)
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dpt73961&pass=4Flagstaff$&database=dpt73961&query=" + query)

    if (req1.status == 200) { //transit worked.
        // req1.responseText is a JSON object with the results of the query in it.
        // Now to format it in a nicer format that you can work with - 
        // parse it from JSON object (JS Object Notaton) into an array that holds
        // each row as an array in it. 
        results = JSON.parse(req1.responseText)
        console.log(results)
    if (results.length == 0)
        NSB.MsgBox("There are no pets of that type.")
    else {        
// this is what results look like: 
// [[47,"Paul","dog"],[23,"Marty","dog"],[34,"Jack","horse"]]  
//    0                 1                    2
//   for first row (index 0): [47,"Paul","dog"]
//                             0    1      2

        // take a closer look:
        console.log("the parsed JSON is " + results)
        console.log("eg. temp[0] or first row in big array is " + results[0])
        console.log("to get to Paul, need results[0][1]: " + results[0][1])

        // output the names of all the dogs
        var message = ""
        for (i = 0; i <= results.length - 1; i++)
            message = message + results[i][1] + "\n"
        Textarea2.value = message
      } 

  } else
        //transit error - Handle that with an error message.
        NSB.MsgBox("Error code: " + req1.status)
}

CustomerSelect.onshow=function(){
    let query="SELECT state FROM customer"

  //run a Ajax call, which run query on database server
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dpt73961&pass=4Flagstaff$&database=dpt73961&query=" + query)

  if (req1.status==200){
    //transaction works
    results=JSON.parse(req1.responseText)
    
    console.log("the parsed JSON is " + results)
    
    let message = ""
    for (i=0; i <= results.length-1; i++)
        message = message + results[i][0] + "\n"
    console.log(message)
    Textarea2.value = message
  
  }else{
    NSB.MsgBox("Error code: " + req1.status)
  }
}
*/