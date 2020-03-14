// Your code goes here
/*let mLeave = function (element) {
    element.style.transform = "scale(1)"
    element.style.transition = "all 0.3s"
}*/

//Mouse Leave Function

let mLeave = function(event){

funBanner.addEventListener("mouseleave", (event) => {
  // when the "mouseleave" event occurs, the transform style is overwritten with "scale(1)"
  event.target.style.transform = "scale(1)"
})

}

//Enlarge -- Mouse Over


let enlarge = function(event){

    event.addEventListener("mouseover", () => {
    event.style.transform = "scale(1.05)"
    event.style.transition = "all 0.3s"
    })
}

//Keydown Function

let colorCycle = function(event){

addEventListener("keydown", function(event) {
    if (event.target.keyCode == 86)
      document.target.body.style.color = "violet";
  });
  addEventListener("keyup", function(event) {
    if (event.keyCode == 86)
      document.body.style.color = "";
  });

}

//Variables

let funBanner = document.querySelector('.intro img');
let navAnchorz = document.querySelectorAll('.nav a');


//Keydown Event Listener





//
enlarge(funBanner);
mLeave(funBanner);
colorCycle(navAnchorz);
