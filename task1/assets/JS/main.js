function myFunction(){
    let text='Press a button to open or close the window !';
    let myWindow;
     document.getElementById('demo').innerHTML=text;


    if(confirm(text)==true){
        
        document.getElementById("element").style.display = "visible";
    }
    else{
        document.getElementById("element").style.display = "none";
        
    }
    document.getElementById('demo').innerHTML=text;

}