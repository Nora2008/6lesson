const box_1 =document.querySelectorAll('.box_1')

function randColor() {
    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)
 return `rgb(${r},${g},${b})`   
}

for (let i = 0; i < box_1.length; i++) {
    box_1[i].addEventListener('click' , function () {
        box_1[i].style.background =randColor()
   })
    
}



// box_2

const box_2 =document.querySelectorAll('.box_2')
function getRandomColor () {
    Math.floor(Math.random()* 0xffffff).toString(16);
    return `linear-gradient(to left top, #${color1},#${color2})`
} 

// const generateGradient = function () {
//     const color1 = getRandomColor();
//     const color2 = getRandomColor();

   
// } 

 function generateGradient () {
        const color1 = getRandomColor();
        const color2 = getRandomColor();
 }
   
//  generateGradient();
//  box_2.addEventListenerAll('click' , generateGradient)
for (let i = 0; i < box_2.length; i++) {
    box_2[i].addEventListener('click' , function () {
        box_2[i].style.background =generateGradient()
    
})
}