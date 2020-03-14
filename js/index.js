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

//Mouse Over Event Listener
let funBanner = document.querySelector('.intro img')

funBanner.addEventListener("mouseover", () => {
  funBanner.style.transform = "scale(1.05)"
  funBanner.style.transition = "all 0.3s"
})

mLeave(funBanner);

//Keydown Event Listener

