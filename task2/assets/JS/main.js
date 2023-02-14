function myFunction(){
    let age = prompt("Please enter your age", 18);
    if (age >=18) {
        document.getElementById("demo").innerHTML =
        "Hello! ";
      }

    else{
        document.getElementById("demo").innerHTML =
        "You do not have acces this site! " 
      }
    
}