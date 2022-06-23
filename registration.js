function regiter(){
    var firstname= document.getElementById("fname").nodeValue;
    var lastname= document.getElementById("lname").nodeValue;
    var mobile= document.getElementById("mobile").nodeValue;
    var password= document.getElementById("pwd").nodeValue;
    if(firstname== null && lastname== null && mobile== null && password== null)
    {
        alert("Please fill the form correctly.");
        document.set("submit").disabled = true;
        return false;
    }
    else{
        alert("login succesfully!");
        
    }

}