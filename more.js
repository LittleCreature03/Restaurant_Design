function myfunction(y){

  if(y=="home"){
    var x=document.getElementById("home").innerHTML;
    document.getElementById("demo").innerHTML=x; 
}

 else if(y=="offer"){
  document.getElementById("offer").setAttribute("class","off");
  var x=document.getElementById("offer").innerHTML;
  
  document.getElementById("demo").innerHTML=x; 
 }

 else if(y=="orders"){
  var x=document.getElementById("orders").innerHTML;
  document.getElementById("demo").innerHTML=x; 
 }

 else if(y=="book"){
  var x=document.getElementById("book").innerHTML;
  document.getElementById("demo").innerHTML=x; 
 }

 else if(y=="contact"){
  var x=document.getElementById("contact").innerHTML;
  document.getElementById("demo").innerHTML=x; 
 }
}


function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }