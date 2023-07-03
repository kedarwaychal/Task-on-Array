
var cl = console.log;

//  console print values from  1 to 10
// for(var i = 0; i <= 10; i++){
//     cl(i);
// }

 
for(var i = 0; i <= 10; i++){
    cl(i);
}

for(var i = 100; i <= 110; i++){
    cl(i);
}

var Bikes = ["honda","Ducati","BMW1200","Benelli","Shine"];

for(var i = 0; i <= Bikes.length; i++){
    cl(Bikes[i]);
}
 var skills  = ["HTML5","CSS3","javascript","SASS","Typescript","Angular"];
 // i = i + 1 >> i++
 // for (var i = 0; i < skills.length; i++){
  //  cl("I Love " + skills [i])
 //}


 var infoDiv = document.getElementById('info');

 cl(infoDiv);

 var result = "<ul class='list-group'>";
for (var i = 0; i < skills.length; i++) {
    result = result + "<li class='list-group-item'>I love" + skills[i] + "</li>";

}

result = result + "</ul>";

cl(result);

infoDiv.innerHTML = result; 

var hobbies = ["cricket","carrom","football","chess"];

var inffodiv = document.getElementById("info2");

var result = "<ul class= 'list-group'>";

for(var i = 0; i < hobbies.length; i++){
    result += "<li class='list-group-item'>I Love "+hobbies[i]+"</li>"
}


result +="</ul>"

inffodiv.innerHTML = result;

cl(result);


// var infoDiv2 = document.getElementById("info2");

// var result = "<ul class='list-group'>";

// for(var i = 0; i < hobbies.length; i++){
//     result += "<li class='list-group-item'>I Love "+hobbies[i]+"</li>"

// }

// result += "</ul>";

// infoDiv2.innerHTML = result;

var x = 10;
var flag = "true";

var r = x === "10";
cl(r);


var hobbies = ["cricket","carrom","football","chess"];


idiv = document.getElementById('info');

var result = "<ul class='list-group'>";

for(var i = 0; i < hobbies.length; i++){
    result += "<li class='list-group-item'>"+"I love"+hobbies[i]+"<li>";
}
result +="<ul>";

idiv.innerHTML = result;  


function multiplication3num (p,q,r){
    var result = p*q*r;
    cl(result);
}

cl(multiplication3num(1,2,3));