let mySonnet = document.getElementById("sonnet").innerHTML;
console.log(mySonnet);

var orphan = mySonnet.indexOf("orphan");
console.log(orphan);

console.log(mySonnet.length);


var res = mySonnet.replace("winter", "yuletide");



var x = res.replace(/ the /g, " a large ");
document.getElementById("sonnet").innerHTML = x;





