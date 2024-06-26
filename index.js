const colorPicker = document.getElementById("color-picker");
const btn = document.getElementById("btn");
const select = document.getElementById("color-scheme");
const boxes = document.getElementById("color-boxes");

let color = '' || 'ff0000'; // default
let option = '';

// load color on run
window.addEventListener("load", (e) => {
    fetchColors(color, 'monochrome') 
})

colorPicker.addEventListener("change", function(e) {
    const colorValue = e.target.value;
    color = colorValue.slice(1); //removing # sign in front of hex value

})

btn.addEventListener("click", function(){
const selectedVal = select.value;
option = selectedVal;
        
    fetchColors(color, option);
})
    

function fetchColors(color, option){
   
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${option}`)
    .then(response => response.json())
    .then(data => {
        
        let box = '';
        for(let color of data.colors){
            
            box += `<div class="box" style='background-color: ${color.hex.value}'><p>${color.hex.value}</p></div>
            `
        }
        boxes.innerHTML = box;
    })
}
