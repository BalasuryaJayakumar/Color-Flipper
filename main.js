const simple = document.getElementById("simple");
const simple_h1 = simple.querySelector(".simple__h1");
const simple_button = simple.querySelector(".simple__button");
const colorText = simple.querySelector(".simple__name");

const hex = document.getElementById("hex");
const head_div = document.querySelector(".header__div");
const hex_head_btn = head_div.querySelector(".hex__btn");
const simple_head_btn = head_div.querySelector(".simple__btn");
const hexColorText = hex.querySelector(".hex__name");

hex_head_btn.addEventListener("click", (event) => {
    simple.classList.add("simple__none");
    hex.classList.remove("hex__none");
})

const colorArray = ["maroon","orange","magenta","papayawhip","grey","midnightblue","cyan"];

const randomColor = () => {
    const randomNum = Math.floor(Math.random() * colorArray.length);
    return randomNum;
}
randomColor();

simple_button.addEventListener("click", (event) => {
    const clrNumber = randomColor();
    simple.style.backgroundColor = colorArray[clrNumber];
    colorText.textContent = colorArray[clrNumber];
    colorText.style.color = colorArray[clrNumber];
})

/* hex.addEventListener("click", (event) => {
    const myArray = ["A","B","C","D","E","F","0","1","2","3","4","5","6","7","8","9"];
    const randLetOne = myArray[Math.floor(Math.random() * myArray.length)];
    const randLetTwo = myArray[Math.floor(Math.random() * myArray.length)];
    const randLetThree = myArray[Math.floor(Math.random() * myArray.length)];
    const randLetFour = myArray[Math.floor(Math.random() * myArray.length)];
    const randLetFive = myArray[Math.floor(Math.random() * myArray.length)];
    const randLetSix = myArray[Math.floor(Math.random() * myArray.length)];
    const randColorPalate = "#"+randLetOne+randLetTwo+randLetThree+randLetFour+randLetFive+randLetSix;
    const color = randColorPalate;
    hex.style.backgroundColor = color;
    hexColorText.textContent = color;
}) */

const myHexArray = ["A","B","C","D","E","F",0,1,2,3,4,5,6,7,8,9];
const getRandNum = () => {
    return Math.floor(Math.random() * myHexArray.length);
}
hex.addEventListener("click", (event) => {
    let colorPalate = "#";
    for(let i=0; i<6; i++) {
        colorPalate += myHexArray[getRandNum()];
    }
    hex.style.backgroundColor = colorPalate;
    hexColorText.textContent = colorPalate;
    hexColorText.style.color = colorPalate;
})