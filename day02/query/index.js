// const box = document.querySelector(".box");
// console.log(box);

// const box1 = document.getElementsByClassName("box");

// - 0 +
const plususBtn = document.querySelector(".plus")
plususBtn.addEventListener('click', ()=>{
    const numSpan = document.querySelector(".num");
    numSpan.innerText = Number(numSpan.innerText) + 1;
});
const minusBtn = document.querySelector(".minus")
minusBtn.addEventListener('click',()=>{
    const numSpan = document.querySelector(".num");
    const number = Number(numSpan.innerText) - 1;
    numSpan.innerText = number === -1 ? 0 : number
});
const xMark = document.querySelector(".xMark");
const bar = document.querySelector(".bar");
xMark.style.display = "none";
xMark.addEventListener('click',()=>{
bar.style.display = "block";
xMark.style.display = "none";
});
bar.addEventListener('click',()=>{
    xMark.style.display = "block";
    bar.style.display = "none";
});