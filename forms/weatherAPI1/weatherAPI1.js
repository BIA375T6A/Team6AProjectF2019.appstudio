arrayMain = []
arrayDescription = []
arrayTemp = []
arrayHumidity = []
zipcode = 68178



weatherAPI1.onshow=function(){

    Hamburger7.clear()
  Hamburger7.addItem("Add Events")
  Hamburger7.addItem("Add Tasks")
  Hamburger7.addItem("Add Class")
  Hamburger7.addItem("Add Assignment")
  Hamburger7.addItem("Login")
  Hamburger7.addItem("create an Account")
  Hamburger7.addItem("Current Weather")
Hamburger7.addItem("Home")

    let myurl = "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?zip=" + zipcode + ",us&units=imperial&APPID=b46c5831dd67d1d2fb57d5ef416097e2";
  $.ajax({
        url: myurl,
        method: 'GET',
        dataType: 'json',
        success: function(data){           
          // Ryan - you are just bringing back one data object - 
          // the weather for the zipcode you sent in
          // so don't need to loop through multiple 
          // weather sets - there is just one :)
          /*
          $.each(data, function(i, item) { 
           // arrayMain.push(item.weather[0])
              arrayDescription.push(item.weather[0])
           // arrayTemp.push(item.main.temp)
           // arrayHumidity.push(item.main.humidity)
          })
          */
              arrayMain.push(data.weather[0].main)
              arrayDescription.push(data.weather[0].description)
              arrayTemp.push(data.main.temp)
              arrayHumidity.push(data.main.humidity)
  
          //Textarea1.value = arrayMain[0] + '\n'  + arrayDescription[0] + '\n' + arrayIcon[0]
          Textarea11.value = arrayMain[0] + '\n'  + arrayDescription[0] + '\n' + arrayTemp[0] + " F" + '\n' + arrayHumidity[0] + "%"
  }
  })

}

Button1.onclick=function(){
  ChangeForm(scheduleGenerator)
}

Hamburger7.onclick=function(s){
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
