
btnLogin.onclick=function(){
      // little program on radlab server: authLDAP.php that authenicates 
    // the CU login you send and responds with a 1 (passed) or a 0 (failed)
    req1 = Ajax("https://radlab.creighton.edu/appStudio/authLDAP.php", "POST", "j_username=" + inpUsername.value + "&j_password=" + inpPass.value)
    if (req1.status == 200) {  //AJAX call worked.
        if(req1.responseText == 1){
        ChangeForm(Daniel)
      }else{
        lblResponse.value = `Your username or password is wrong, please try again.`
        }
    } else {  //had a problem with the AJAX request. 
        lblResponse.value = `Error: if you are off-campus you must be using CU VPN. The error code returned was: ${req1.status}. Please try again.`
    }
}
