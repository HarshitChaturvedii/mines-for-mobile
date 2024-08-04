$(".blocks div").css("background-image","url(./Screenshot_2024-07-28_110553-removebg-preview.png)")
$(".blocks div").css("background-position","center")
$(".blocks div").css("background-size","120px")

$("button").on("click", function(){
  location.reload() 
})


var classArray = ["one" , "two" , "three" , "four" , "five" , "six" , "seven" , "eight" , "nine" , "ten" , "eleven" , "twelve" , "thirteen" , "fourteen" , "fifteen" , "sixteen"]
var randomMines = []
var inputVal = []
var i = 1;
var j = 0;

mines()

function mines(){
    var classArray = ["one" , "two" , "three" , "four" , "five" , "six" , "seven" , "eight" , "nine" , "ten" , "eleven" , "twelve" , "thirteen" , "fourteen" , "fifteen" , "sixteen"]
    var randomMines = []
    var inputVal = []
    var i = 1;
    var j = 0;
var game = true ;
while(i<=6){
   var randomNumber = Math.floor(Math.random()*16);    
   randomMines.push(classArray[randomNumber]);
   var chosenMine = classArray[randomNumber];
   console.log("chosenMine");
   classArray.splice(randomNumber , 1)
   $("."+ chosenMine).css("background-image","url(./bomb-5620656_960_720-removebg-preview.png)")
   $("."+ chosenMine).css("background-position","center")
   $("."+ chosenMine).css("background-size","70px")
   $("."+ chosenMine).css( "background-repeat" , "no-repeat")
   i = i + 1;
}

var newArray = classArray
$(".blocks div").css("background-size","0px")

$(".blocks div").on("click", function mining(){
  $(this).css("background-size","70px")
  let chosenDiv = $(this).attr("class")  
  inputVal.push(chosenDiv)
  $(this).css("pointer-events" , "none")
  if(randomMines.includes(chosenDiv)){
    $(this).css("background-color","red")
    $(".blocks div").css("pointer-events" , "none")
    $(".blocks div").css("background-size","70px")
  }
  else{
    $(this).css("background-color","greenyellow")    
  j = j + 1;
}
 $(".footer").text("Your score is " + j)
  
})

}

