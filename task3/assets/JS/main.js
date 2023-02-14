let input=document.getElementById('inp')
let body= document.getElementById('bd')


function enter(){
   
    let input=document.getElementById('inp').value;
    let daytime=input.slice(-3,-2);

    if(daytime==1){
       body.style.backgroundColor='blue';
       body.style.color='yellow'
       document.getElementById("demo").innerHTML =
       "Hello Morning Session Student! "

       
    }
    else if(daytime==2){
        body.style.backgroundColor='yellow'
        body.style.color='red'
        document.getElementById("demo").innerHTML =
        "Hello Afternoon Session Student! "

    }
    else if(daytime==3){
        body.style.backgroundColor='grey'
        body.style.color='black'
        document.getElementById("demo").innerHTML =
        "Hello Evening Session Student! "
    }
    else{
        body.style.backgroundColor='red'
        body.style.color='black'
        document.getElementById("demo").innerHTML =
        "Inserted WRONG! "
    }



}