var us=0;

var u=document.getElementById("us");
var c=document.getElementById("cs");
var b1 = document.getElementById("b1");
var b2=document.getElementById("b2");
var b3=document.getElementById("b3");
var b4=document.getElementById("b4");
var b5=document.getElementById("b5");
var ann= document.getElementById("ann");
function cos(){
    var cs=Math.floor( Math.random()*5) ;
    c.innerHTML=cs;
}

b1.addEventListener("click" ,function score(){
    us=1;
    u.innerHTML=us;
    cos();
    main();
} );
b2.addEventListener("click" ,function score(){
    us=2;
    u.innerHTML=us;
    cos();
    main();
} );
b3.addEventListener("click" ,function score(){
    us=3;
    u.innerHTML=us;
    cos();
    main();
} );
b4.addEventListener("click" ,function score(){
    us=4;
    u.innerHTML=us;
    cos();
    main();
} );
b5.addEventListener("click" ,function score(){
    us=5;
    u.innerHTML=us;
    cos();
    main();
} );
 
function main(){
    if((us+cs)%2==0)
     console.log("Its Even -You won!");
     else
     console.log("Its Odd -You lost!");
}