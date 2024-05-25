
const ameriCano = document.querySelector(".americano_span");
const ameriCano_cost = document.querySelector(".americano_cost");
const americano_Buy = document.querySelector(".americano_buy")
const Total = document.querySelector(".total");
const Total_num = document.querySelector(".total_num");
Total_num.innerText = Number(0);
Total_num >= 0;

americano_Buy.addEventListener('click',()=>{
    Total_num.innerText = Number(Total_num.innerText) + 3000;
    ResetBtn.style.display = "block";
});

const Latte_span = document.querySelector(".latte_span");
const Latte_cost = document.querySelector(".latte_cost");
const Latte_Buy = document.querySelector(".latte_buy")
Latte_Buy.addEventListener('click',()=>{
    Total_num.innerText = Number(Total_num.innerText) + 3500;
    ResetBtn.style.display = "block";
});

const Vanila_span = document.querySelector(".vanila_span");
const Vanila_cost = document.querySelector(".vanila_cost");
const Vanila_Buy = document.querySelector(".vanila_buy")
Vanila_Buy.addEventListener('click',()=>{
    Total_num.innerText = Number(Total_num.innerText) + 4000;
    ResetBtn.style.display = "block";
});



const ResetBtn = document.querySelector(".resetBtn");
ResetBtn.style.display = "none";
ResetBtn.addEventListener('click',()=>{
    Total_num.innerText = Number(0);
});