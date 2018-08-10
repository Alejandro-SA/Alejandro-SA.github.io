var bot1 = document.getElementById("bot1");
var bot2 = document.getElementById("bot2");
var back =  document.getElementsByClassName("defaultform");
var rancol = randomColor();
bot1.addEventListener("click", DaFunc1);
bot2.addEventListener("click", DaFunc2);

function DaFunc1() {
rancol=randomColor();
document.body.style.backgroundColor = rancol;

}

function DaFunc2() {
    rancol=randomColor();
    back[0].style.backgroundColor = rancol;
    
    }
// document.getElementById("myBtn").addEventListener("click", myFunction);

// function myFunction() {
//     document.getElementById("demo").innerHTML = "Hello World";
// }

function randomColor (e) {
    e = (
     0 |                      // shorter than a Math.floor call
     Math.random() * 16777216 // random number n, 0 <= n <= 0xFFFFFF
                              // note that 16777216 = 0xFFFFFF+1
    .toString(16) )           // get the hex representation of n
    while( e.length<6 ) e=0+e;// pad with 0s if necessary
  
    return'#'+e
  }
  