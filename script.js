/*
gradientBox = This is our result field after the gradient is selected
selectMenu = to select the direction of gradient
colorInput = we have two input tags
textArea = textarea where our results are showm in CSS code
refreshBTN = to refresh our colors
copyBTN = to copy the code
*/

const gradientBox = document.querySelector(".gradient-box");
const selectMenu = document.querySelector(".select-box select");
const colorInput = document.querySelectorAll(".colors input");
const textArea = document.querySelector("textarea");
const refreshBTN = document.querySelector(".refresh");
const copyBTN = document.querySelector(".copy");

const getRandomColor = () => {
    const randomHex = Math.floor(Math.random()* 0xffffff).toString(16);
    return `#${randomHex}`;
}

const generateGradient = (isRandom) =>{
    if(isRandom){
        // if the isRandom color is true, update the input values
        colorInput[0].value = getRandomColor();
        colorInput[1].value = getRandomColor();
    }
    // as we got the the values of both points we will assign them to text area
    // and then assign the same to our box
    // also we will need to update the 
    const gradientProperty = `linear-gradient(${selectMenu.value}, ${colorInput[0].value}, ${colorInput[1].value})`;
    gradientBox.style.background = gradientProperty;
    textArea.value = `background: ${gradientProperty}`;
}

colorInput.forEach(input=>{
    input.addEventListener("input", ()=> generateGradient(false));
});

const copyCode =()=>{
    navigator.clipboard.writeText(textArea.value); // copy the text inside the text field
    copyBTN.innerHTML = "Code Copied"; // set the inner HTML to Code Copied
    setTimeout(()=> copyBTN.innerHTML = "Copy Code", 1600); // Again get the Copy Code text back
}

// operation 1: Menu selector -> to select and change the direction
selectMenu.addEventListener("change", ()=>{
    generateGradient(false)
});

// operation 2: refresh the colors
refreshBTN.addEventListener("click", ()=>{
    generateGradient(true)
});

// operation 3: copy the code of the CSS 
copyBTN.addEventListener("click", copyCode);